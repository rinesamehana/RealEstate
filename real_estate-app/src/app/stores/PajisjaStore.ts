import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Pajisja } from "../models/Pajisja";

export default class pajisjaStore {
  selectedPajisje: Pajisja | undefined = undefined;
  pajisjaRegistry = new Map<string, Pajisja>();
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get pajisjet() {
    return Array.from(this.pajisjaRegistry.values());
  }
  loadPajisjet = async () => {
    this.loadingInitial = true;
    try {
      const pajisjet = await agent.Pajisjet.list();

      pajisjet.forEach((pajisja) => {
        this.setPajisja(pajisja);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadPajisje = async (pajisjaId: string) => {
    let pajisja = this.getPajisje(pajisjaId);
    if (pajisja) {
      this.selectedPajisje = pajisja;
      return pajisja;
    } else {
      this.loadingInitial = true;
      try {
        pajisja = await agent.Pajisjet.details(pajisjaId);
        this.setPajisja(pajisja);
        runInAction(() => {
          this.selectedPajisje = pajisja;
        });

        this.setLoadingInitial(false);
        return pajisja;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setPajisja = (pajisja: Pajisja) => {
    this.pajisjaRegistry.set(pajisja.pajisjaId, pajisja);
  };
  private getPajisje = (pajisjaId: string) => {
    return this.pajisjaRegistry.get(pajisjaId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createPajisje = async (pajisja: Pajisja) => {
    this.loading = true;

    try {
      await agent.Pajisjet.create(pajisja);
      runInAction(() => {
        this.pajisjaRegistry.set(pajisja.pajisjaId, pajisja);
        this.selectedPajisje = pajisja;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  updatePajisjet = async (pajisja: Pajisja) => {
    this.loading = true;
    try {
      await agent.Pajisjet.update(pajisja);
      runInAction(() => {
        this.pajisjaRegistry.set(pajisja.pajisjaId, pajisja);
        this.selectedPajisje = pajisja;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  deletePajisje = async (pajisjaId: string) => {
    this.loading = true;
    try {
      await agent.Pajisjet.delete(pajisjaId);
      runInAction(() => {
        this.pajisjaRegistry.delete(pajisjaId);
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
