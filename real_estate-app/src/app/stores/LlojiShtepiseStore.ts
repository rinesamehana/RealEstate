import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";

import { LlojiShtepise } from "../models/LlojiShtepise";

export default class LlojiShtepiseStore {
  selectedLlojiShtepise: LlojiShtepise | undefined = undefined;
  llojishtepiseRegistry = new Map<string, LlojiShtepise>();
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get llojeteshtepive() {
    return Array.from(this.llojishtepiseRegistry.values());
  }
  loadLlojetShtepive = async () => {
    this.loadingInitial = true;
    try {
      const llojeteshtepive = await agent.LlojiShtepive.list();

      llojeteshtepive.forEach((llojishtepise) => {
        this.setLlojiShtepise(llojishtepise);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadLlojShtepie = async (llojiShtepiseId: string) => {
    let llojishtepise = this.getLlojiShtepise(llojiShtepiseId);
    if (llojishtepise) {
      this.selectedLlojiShtepise = llojishtepise;
      return llojishtepise;
    } else {
      this.loadingInitial = true;
      try {
        llojishtepise = await agent.LlojiShtepive.details(llojiShtepiseId);
        this.setLlojiShtepise(llojishtepise);
        runInAction(() => {
          this.selectedLlojiShtepise = llojishtepise;
        });

        this.setLoadingInitial(false);
        return llojishtepise;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setLlojiShtepise = (llojishtepise: LlojiShtepise) => {
    this.llojishtepiseRegistry.set(
      llojishtepise.llojiShtepiseId,
      llojishtepise
    );
  };
  private getLlojiShtepise = (llojiShtepiseId: string) => {
    return this.llojishtepiseRegistry.get(llojiShtepiseId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createLlojShtepie = async (llojishtepise: LlojiShtepise) => {
    this.loading = true;

    try {
      await agent.LlojiShtepive.create(llojishtepise);
      runInAction(() => {
        this.llojishtepiseRegistry.set(
          llojishtepise.llojiShtepiseId,
          llojishtepise
        );
        this.selectedLlojiShtepise = llojishtepise;
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

  updateLlojShtepie = async (llojishtepise: LlojiShtepise) => {
    this.loading = true;
    try {
      await agent.LlojiShtepive.update(llojishtepise);
      runInAction(() => {
        this.llojishtepiseRegistry.set(
          llojishtepise.llojiShtepiseId,
          llojishtepise
        );
        this.selectedLlojiShtepise = llojishtepise;
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

  deleteLlojShtepie = async (llojiShtepiseId: string) => {
    this.loading = true;
    try {
      await agent.LlojiShtepive.delete(llojiShtepiseId);
      runInAction(() => {
        this.llojishtepiseRegistry.delete(llojiShtepiseId);
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
