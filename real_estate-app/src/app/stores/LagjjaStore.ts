import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";

import { Lagjja } from "../models/Lagjja";

export default class LagjjaStore {
  selectedLagje: Lagjja | undefined = undefined;
  lagjjaRegistry = new Map<string, Lagjja>();
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get lagjet() {
    return Array.from(this.lagjjaRegistry.values());
  }
  loadLagjet = async () => {
    this.loadingInitial = true;
    try {
      const lagjet = await agent.Lagjet.list();

      lagjet.forEach((lagjja) => {
        this.setLagjja(lagjja);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadLagje = async (lagjjaId: string) => {
    let lagjja = this.getLagje(lagjjaId);
    if (lagjja) {
      this.selectedLagje = lagjja;
      return lagjja;
    } else {
      this.loadingInitial = true;
      try {
        lagjja = await agent.Lagjet.details(lagjjaId);
        this.setLagjja(lagjja);
        runInAction(() => {
          this.selectedLagje = lagjja;
        });

        this.setLoadingInitial(false);
        return lagjja;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setLagjja = (lagjja: Lagjja) => {
    this.lagjjaRegistry.set(lagjja.lagjjaId, lagjja);
  };
  private getLagje = (lagjjaId: string) => {
    return this.lagjjaRegistry.get(lagjjaId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createLagje = async (lagjja: Lagjja) => {
    this.loading = true;

    try {
      await agent.Lagjet.create(lagjja);
      runInAction(() => {
        this.lagjjaRegistry.set(lagjja.lagjjaId, lagjja);
        this.selectedLagje = lagjja;
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

  updateLagjet = async (lagjja: Lagjja) => {
    this.loading = true;
    try {
      await agent.Lagjet.update(lagjja);
      runInAction(() => {
        this.lagjjaRegistry.set(lagjja.lagjjaId, lagjja);
        this.selectedLagje = lagjja;
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

  deleteLagje = async (lagjjaId: string) => {
    this.loading = true;
    try {
      await agent.Lagjet.delete(lagjjaId);
      runInAction(() => {
        this.lagjjaRegistry.delete(lagjjaId);
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
