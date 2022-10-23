import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Pamja } from "../models/Pamja";

export default class PamjaStore {
  selectedPamje: Pamja | undefined = undefined;
  pamjaRegistry = new Map<string, Pamja>();
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get pamjet() {
    return Array.from(this.pamjaRegistry.values());
  }
  loadPamjet = async () => {
    this.loadingInitial = true;
    try {
      const pamjet = await agent.Pamjet.list();

      pamjet.forEach((pamja) => {
        this.setPamja(pamja);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadPamje = async (pamjaId: string) => {
    let pamja = this.getPamje(pamjaId);
    if (pamja) {
      this.selectedPamje = pamja;
      return pamja;
    } else {
      this.loadingInitial = true;
      try {
        pamja = await agent.Pamjet.details(pamjaId);
        this.setPamja(pamja);
        runInAction(() => {
          this.selectedPamje = pamja;
        });

        this.setLoadingInitial(false);
        return pamja;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setPamja = (pamja: Pamja) => {
    this.pamjaRegistry.set(pamja.pamjaId, pamja);
  };
  private getPamje = (pamjaId: string) => {
    return this.pamjaRegistry.get(pamjaId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createPamje = async (pamja: Pamja) => {
    this.loading = true;

    try {
      await agent.Pamjet.create(pamja);
      runInAction(() => {
        this.pamjaRegistry.set(pamja.pamjaId, pamja);
        this.selectedPamje = pamja;
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

  updatePamjet = async (pamja: Pamja) => {
    this.loading = true;
    try {
      await agent.Pamjet.update(pamja);
      runInAction(() => {
        this.pamjaRegistry.set(pamja.pamjaId, pamja);
        this.selectedPamje = pamja;
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

  deletePamje = async (pamjaId: string) => {
    this.loading = true;
    try {
      await agent.Pamjet.delete(pamjaId);
      runInAction(() => {
        this.pamjaRegistry.delete(pamjaId);
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
