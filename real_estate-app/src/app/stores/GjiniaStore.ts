import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";

import { Gjinia } from "../models/Gjinia";

export default class GjiniaStore {
  selectedGjinia: Gjinia | undefined = undefined;
  gjiniaRegistry = new Map<string, Gjinia>();
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get gjinite() {
    return Array.from(this.gjiniaRegistry.values());
  }
  loadGjinite = async () => {
    this.loadingInitial = true;
    try {
      const gjinite = await agent.Gjinite.list();

      gjinite.forEach((gjinia) => {
        this.setGjinia(gjinia);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadGjini = async (gjiniaId: string) => {
    let gjinia = this.getGjini(gjiniaId);
    if (gjinia) {
      this.selectedGjinia = gjinia;
      return gjinia;
    } else {
      this.loadingInitial = true;
      try {
        gjinia = await agent.Gjinite.details(gjiniaId);
        this.setGjinia(gjinia);
        runInAction(() => {
          this.selectedGjinia = gjinia;
        });

        this.setLoadingInitial(false);
        return gjinia;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setGjinia = (gjinia: Gjinia) => {
    this.gjiniaRegistry.set(gjinia.gjiniaId, gjinia);
  };
  private getGjini = (gjiniaId: string) => {
    return this.gjiniaRegistry.get(gjiniaId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createGjini = async (gjinia: Gjinia) => {
    this.loading = true;

    try {
      await agent.Gjinite.create(gjinia);
      runInAction(() => {
        this.gjiniaRegistry.set(gjinia.gjiniaId, gjinia);
        this.selectedGjinia = gjinia;
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

  updateGjinia = async (gjinia: Gjinia) => {
    this.loading = true;
    try {
      await agent.Gjinite.update(gjinia);
      runInAction(() => {
        this.gjiniaRegistry.set(gjinia.gjiniaId, gjinia);
        this.selectedGjinia = gjinia;
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

  deleteGjini = async (gjiniaId: string) => {
    this.loading = true;
    try {
      await agent.Gjinite.delete(gjiniaId);
      runInAction(() => {
        this.gjiniaRegistry.delete(gjiniaId);
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
