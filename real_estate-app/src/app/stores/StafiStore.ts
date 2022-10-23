import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Stafi } from "../models/Stafi";

export default class StafiStore {
  selectedStafi: Stafi | undefined = undefined;
  stafiRegistry = new Map<string, Stafi>();
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get stafii() {
    return Array.from(this.stafiRegistry.values());
  }
  loadStafii = async () => {
    this.loadingInitial = true;
    try {
      const stafii = await agent.Stafii.list();

      stafii.forEach((stafi) => {
        this.setStafi(stafi);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadStafi = async (stafiId: string) => {
    let stafi = this.getStafi(stafiId);
    if (stafi) {
      this.selectedStafi = stafi;
      return stafi;
    } else {
      this.loadingInitial = true;
      try {
        stafi = await agent.Stafii.details(stafiId);
        this.setStafi(stafi);
        runInAction(() => {
          this.selectedStafi = stafi;
        });

        this.setLoadingInitial(false);
        return stafi;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setStafi = (stafi: Stafi) => {
    this.stafiRegistry.set(stafi.stafiId, stafi);
  };
  private getStafi = (stafiId: string) => {
    return this.stafiRegistry.get(stafiId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createStafi = async (stafi: Stafi) => {
    this.loading = true;

    try {
      await agent.Stafii.create(stafi);
      runInAction(() => {
        this.stafiRegistry.set(stafi.stafiId, stafi);
        this.selectedStafi = stafi;
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

  updateStafi = async (stafi: Stafi) => {
    this.loading = true;
    try {
      await agent.Stafii.update(stafi);
      runInAction(() => {
        this.stafiRegistry.set(stafi.stafiId, stafi);
        this.selectedStafi = stafi;
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

  deleteStafi = async (stafiId: string) => {
    this.loading = true;
    try {
      await agent.Stafii.delete(stafiId);
      runInAction(() => {
        this.stafiRegistry.delete(stafiId);
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
