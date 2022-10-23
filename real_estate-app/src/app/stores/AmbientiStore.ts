import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Ambienti } from "../models/Ambienti";

export default class AmbientiStore {
  selectedAmbient: Ambienti | undefined = undefined;
  ambientiRegistry = new Map<string, Ambienti>();
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get ambientet() {
    return Array.from(this.ambientiRegistry.values());
  }
  loadAmbientet = async () => {
    this.loadingInitial = true;
    try {
      const ambientet = await agent.Ambientet.list();

      ambientet.forEach((ambienti) => {
        this.setAmbienti(ambienti);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadAmbient = async (ambientiId: string) => {
    let ambienti = this.getAmbient(ambientiId);
    if (ambienti) {
      this.selectedAmbient = ambienti;
      return ambienti;
    } else {
      this.loadingInitial = true;
      try {
        ambienti = await agent.Ambientet.details(ambientiId);
        this.setAmbienti(ambienti);
        runInAction(() => {
          this.selectedAmbient = ambienti;
        });

        this.setLoadingInitial(false);
        return ambienti;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setAmbienti = (ambienti: Ambienti) => {
    this.ambientiRegistry.set(ambienti.ambientiId, ambienti);
  };
  private getAmbient = (ambientiId: string) => {
    return this.ambientiRegistry.get(ambientiId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createAmbient = async (ambienti: Ambienti) => {
    this.loading = true;

    try {
      await agent.Ambientet.create(ambienti);
      runInAction(() => {
        this.ambientiRegistry.set(ambienti.ambientiId, ambienti);
        this.selectedAmbient = ambienti;
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

  updateAmbientet = async (ambienti: Ambienti) => {
    this.loading = true;
    try {
      await agent.Ambientet.update(ambienti);
      runInAction(() => {
        this.ambientiRegistry.set(ambienti.ambientiId, ambienti);
        this.selectedAmbient = ambienti;
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

  deleteAmbient = async (ambientiId: string) => {
    this.loading = true;
    try {
      await agent.Ambientet.delete(ambientiId);
      runInAction(() => {
        this.ambientiRegistry.delete(ambientiId);
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
