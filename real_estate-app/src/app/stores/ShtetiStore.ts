import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";

import { Shteti } from "../models/Shteti";

export default class ShtetiStore {
  selectedShteti: Shteti | undefined = undefined;
  shtetiRegistry = new Map<string, Shteti>();
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get shtetet() {
    return Array.from(this.shtetiRegistry.values());
  }
  loadShtetet = async () => {
    this.loadingInitial = true;
    try {
      const shtetet = await agent.Shtetet.list();

      shtetet.forEach((shteti) => {
        this.setShtet(shteti);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadShtet = async (shtetiId: string) => {
    let shteti = this.getShtet(shtetiId);
    if (shteti) {
      this.selectedShteti = shteti;
      return shteti;
    } else {
      this.loadingInitial = true;
      try {
        shteti = await agent.Shtetet.details(shtetiId);
        this.setShtet(shteti);
        runInAction(() => {
          this.selectedShteti = shteti;
        });

        this.setLoadingInitial(false);
        return shteti;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setShtet = (shteti: Shteti) => {
    this.shtetiRegistry.set(shteti.shtetiId, shteti);
  };
  private getShtet = (shtetiId: string) => {
    return this.shtetiRegistry.get(shtetiId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createShtet = async (shteti: Shteti) => {
    this.loading = true;

    try {
      await agent.Shtetet.create(shteti);
      runInAction(() => {
        this.shtetiRegistry.set(shteti.shtetiId, shteti);
        this.selectedShteti = shteti;
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

  updateShtet = async (shteti: Shteti) => {
    this.loading = true;
    try {
      await agent.Shtetet.update(shteti);
      runInAction(() => {
        this.shtetiRegistry.set(shteti.shtetiId, shteti);
        this.selectedShteti = shteti;
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

  deleteShtet = async (shtetiId: string) => {
    this.loading = true;
    try {
      await agent.Shtetet.delete(shtetiId);
      runInAction(() => {
        this.shtetiRegistry.delete(shtetiId);
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
