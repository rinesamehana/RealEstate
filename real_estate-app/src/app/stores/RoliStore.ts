import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Roli } from "../models/Roli";

export default class RoliStore {
  selectedRoli: Roli | undefined = undefined;
  roliRegistry = new Map<string, Roli>();
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get rolet() {
    return Array.from(this.roliRegistry.values());
  }
  loadRolet = async () => {
    this.loadingInitial = true;
    try {
      const rolet = await agent.Rolet.list();

      rolet.forEach((roli) => {
        this.setRoli(roli);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadRoli = async (roliId: string) => {
    let roli = this.getRoli(roliId);
    if (roli) {
      this.selectedRoli = roli;
      return roli;
    } else {
      this.loadingInitial = true;
      try {
        roli = await agent.Rolet.details(roliId);
        this.setRoli(roli);
        runInAction(() => {
          this.selectedRoli = roli;
        });

        this.setLoadingInitial(false);
        return roli;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setRoli = (roli: Roli) => {
    this.roliRegistry.set(roli.roliId, roli);
  };
  private getRoli = (roliId: string) => {
    return this.roliRegistry.get(roliId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createRoli = async (roli: Roli) => {
    this.loading = true;

    try {
      await agent.Rolet.create(roli);
      runInAction(() => {
        this.roliRegistry.set(roli.roliId, roli);
        this.selectedRoli = roli;
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

  updateRoli = async (roli: Roli) => {
    this.loading = true;
    try {
      await agent.Rolet.update(roli);
      runInAction(() => {
        this.roliRegistry.set(roli.roliId, roli);
        this.selectedRoli = roli;
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

  deleteRoli = async (roliId: string) => {
    this.loading = true;
    try {
      await agent.Rolet.delete(roliId);
      runInAction(() => {
        this.roliRegistry.delete(roliId);
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
