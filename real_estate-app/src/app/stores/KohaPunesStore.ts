import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";

import { KohaPunes } from "../models/KohaPunes";

export default class KohaPunesStore {
  selectedKohaPunes: KohaPunes | undefined = undefined;
  kohaPunesRegistry = new Map<string, KohaPunes>();
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get kohetePunes() {
    return Array.from(this.kohaPunesRegistry.values());
  }
  loadkohetePunes = async () => {
    this.loadingInitial = true;
    try {
      const kohetePunes = await agent.Oraret.list();

      kohetePunes.forEach((kohaPunes) => {
        this.setkohePune(kohaPunes);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadkohePune = async (kohaId: string) => {
    let kohaPunes = this.getkohePune(kohaId);
    if (kohaPunes) {
      this.selectedKohaPunes = kohaPunes;
      return kohaPunes;
    } else {
      this.loadingInitial = true;
      try {
        kohaPunes = await agent.Oraret.details(kohaId);
        this.setkohePune(kohaPunes);
        runInAction(() => {
          this.selectedKohaPunes = kohaPunes;
        });

        this.setLoadingInitial(false);
        return kohaPunes;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setkohePune = (kohaPunes: KohaPunes) => {
    this.kohaPunesRegistry.set(kohaPunes.kohaId, kohaPunes);
  };
  private getkohePune = (kohaId: string) => {
    return this.kohaPunesRegistry.get(kohaId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createkohePune = async (kohaPunes: KohaPunes) => {
    this.loading = true;

    try {
      await agent.Oraret.create(kohaPunes);
      runInAction(() => {
        this.kohaPunesRegistry.set(kohaPunes.kohaId, kohaPunes);
        this.selectedKohaPunes = kohaPunes;
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

  updatekohePune = async (kohaPunes: KohaPunes) => {
    this.loading = true;
    try {
      await agent.Oraret.update(kohaPunes);
      runInAction(() => {
        this.kohaPunesRegistry.set(kohaPunes.kohaId, kohaPunes);
        this.selectedKohaPunes = kohaPunes;
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

  deletekohePune = async (kohaId: string) => {
    this.loading = true;
    try {
      await agent.Oraret.delete(kohaId);
      runInAction(() => {
        this.kohaPunesRegistry.delete(kohaId);
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
