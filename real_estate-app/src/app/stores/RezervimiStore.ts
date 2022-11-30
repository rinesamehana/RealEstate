import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Rezervimi } from "../models/Rezervimi";



export default class RezervimiStore {
  selectedRezervimi: Rezervimi | undefined = undefined;
  rezervimiRegistry = new Map<string, Rezervimi>();
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get rezervimet() {
    return Array.from(this.rezervimiRegistry.values());
  }
  loadRezervimet= async () => {
    this.loadingInitial = true;
    try {
      const rezervimet = await agent.Rezervimet.list();

      rezervimet.forEach((rezervimi) => {
        this.setRezervimin(rezervimi);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadRezervimin = async (rezervimiId: string) => {
    let rezervimi = this.getRezervimin(rezervimiId);
    if (rezervimi) {
      this.selectedRezervimi = rezervimi;
      return rezervimi;
    } else {
      this.loadingInitial = true;
      try {
        rezervimi = await agent.Rezervimet.details(rezervimiId);
        this.setRezervimin(rezervimi);
        runInAction(() => {
          this.selectedRezervimi = rezervimi;
        });

        this.setLoadingInitial(false);
        return rezervimi;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setRezervimin = (rezervimi: Rezervimi) => {
    this.rezervimiRegistry.set(rezervimi.rezervimiId, rezervimi);
  };
  private getRezervimin = (rezervimiId: string) => {
    return this.rezervimiRegistry.get(rezervimiId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createRezervimin = async (rezervimi: Rezervimi) => {
    this.loading = true;

    try {
      await agent.Rezervimet.create(rezervimi);
      runInAction(() => {
        this.rezervimiRegistry.set(rezervimi.rezervimiId, rezervimi);
        this.selectedRezervimi = rezervimi;
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

  updateRezervimin = async (rezervimi: Rezervimi) => {
    this.loading = true;
    try {
      await agent.Rezervimet.update(rezervimi);
      runInAction(() => {
        this.rezervimiRegistry.set(rezervimi.rezervimiId, rezervimi);
        this.selectedRezervimi = rezervimi;
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
