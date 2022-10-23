import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Gjendja } from "../models/Gjendja";

export default class GjendjaStore {
  selectedGjendje: Gjendja | undefined = undefined;
  gjendjaRegistry = new Map<string, Gjendja>();
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get gjendjet() {
    return Array.from(this.gjendjaRegistry.values());
  }
  loadGjendjet = async () => {
    this.loadingInitial = true;
    try {
      const gjendjet = await agent.Gjendjet.list();

      gjendjet.forEach((gjendja) => {
        this.setGjendja(gjendja);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadGjendje = async (gjendjaId: string) => {
    let gjendja = this.getGjendje(gjendjaId);
    if (gjendja) {
      this.selectedGjendje = gjendja;
      return gjendja;
    } else {
      this.loadingInitial = true;
      try {
        gjendja = await agent.Gjendjet.details(gjendjaId);
        this.setGjendja(gjendja);
        runInAction(() => {
          this.selectedGjendje = gjendja;
        });

        this.setLoadingInitial(false);
        return gjendja;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setGjendja = (gjendja: Gjendja) => {
    this.gjendjaRegistry.set(gjendja.gjendjaId, gjendja);
  };
  private getGjendje = (gjendjaId: string) => {
    return this.gjendjaRegistry.get(gjendjaId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createGjendje = async (gjendja: Gjendja) => {
    this.loading = true;

    try {
      await agent.Gjendjet.create(gjendja);
      runInAction(() => {
        this.gjendjaRegistry.set(gjendja.gjendjaId, gjendja);
        this.selectedGjendje = gjendja;
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

  updateGjendjet = async (gjendja: Gjendja) => {
    this.loading = true;
    try {
      await agent.Gjendjet.update(gjendja);
      runInAction(() => {
        this.gjendjaRegistry.set(gjendja.gjendjaId, gjendja);
        this.selectedGjendje = gjendja;
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

  deleteGjendje = async (gjendjaId: string) => {
    this.loading = true;
    try {
      await agent.Gjendjet.delete(gjendjaId);
      runInAction(() => {
        this.gjendjaRegistry.delete(gjendjaId);
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
