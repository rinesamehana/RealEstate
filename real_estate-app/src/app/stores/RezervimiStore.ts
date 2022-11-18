import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";

import { Rezervimi } from "../models/Rezervimi";

export default class RezervimiStore {
  selectedRezervimi: Rezervimi | undefined = undefined;
  rezervimiRegistry = new Map<string, Rezervimi>();
  editMode = false;
  loading = false;
  loadingInitial = false;
  static loadingInitial: any;

  constructor() {
    makeAutoObservable(this);
  }
  private setRezervim = (rezervim: Rezervimi) => {
    this.rezervimiRegistry.set(rezervim.rezervimiId, rezervim);
  };
  private getRezervim = (rezervimiId: string) => {
    return this.rezervimiRegistry.get(rezervimiId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
  get rezervimet() {
    return Array.from(this.rezervimiRegistry.values());
  }
  loadRezervimet = async () => {
    this.loadingInitial = true;
    try {
      const rezervimet = await agent.Rezervimet.list();

      rezervimet.forEach((rezervim) => {
        this.setRezervim(rezervim);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadRezervimin = async (rezervimiId: string) => {
    let rezervim = this.getRezervim(rezervimiId);
    if (rezervim) {
      this.selectedRezervimi = rezervim;
      return rezervim;
    } else {
      this.loadingInitial = true;
      try {
        rezervim = await agent.Rezervimet.details(rezervimiId);
        this.setRezervim(rezervim);
        runInAction(() => {
          this.selectedRezervimi = rezervim;
        });

        this.setLoadingInitial(false);
        return rezervim;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };


  createRezervimin = async (rezervim: Rezervimi) => {
    this.loading = true;

    try {
      await agent.Rezervimet.create(rezervim);
      runInAction(() => {
        this.rezervimiRegistry.set(rezervim.rezervimiId, rezervim);
        this.selectedRezervimi = rezervim;
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

  updateRezervimin = async (rezervim: Rezervimi) => {
    this.loading = true;
    try {
      await agent.Rezervimet.update(rezervim);
      runInAction(() => {
        this.rezervimiRegistry.set(rezervim.rezervimiId, rezervim);
        this.selectedRezervimi = rezervim;
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

  deleteRezervimin = async (rezervimiId: string) => {
    this.loading = true;
    try {
      await agent.Rezervimet.delete(rezervimiId);
      runInAction(() => {
        this.rezervimiRegistry.delete(rezervimiId);
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
