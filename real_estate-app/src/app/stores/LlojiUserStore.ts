import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { LlojiUserit } from "../models/LlojiUserit";

export default class LlojiUserStore {
  selectedLlojiUseri: LlojiUserit | undefined = undefined;
  llojUseriRegistry = new Map<string, LlojiUserit>();
  editMode = false;
  loading = false;
  loadingInitial = false;
  static loadingInitial: any;

  constructor() {
    makeAutoObservable(this);
  }
  get llojetUserit() {
    return Array.from(this.llojUseriRegistry.values());
  }
  loadLlojiUserit = async () => {
    this.loadingInitial = true;
    try {
      const llojetUserit = await agent.LlojetUserit.list();

      llojetUserit.forEach((llojetUser) => {
        this.setLlojUseri(llojetUser);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadLlojUseri = async (llojiUserId: string) => {
    let llojetUser = this.getLlojUseri(llojiUserId);
    if (llojetUser) {
      this.selectedLlojiUseri = llojetUser;
      return llojetUser;
    } else {
      this.loadingInitial = true;
      try {
        llojetUser = await agent.LlojetUserit.details(llojiUserId);
        this.setLlojUseri(llojetUser);
        runInAction(() => {
          this.selectedLlojiUseri = llojetUser;
        });

        this.setLoadingInitial(false);
        return llojetUser;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setLlojUseri = (llojetUser: LlojiUserit) => {
    this.llojUseriRegistry.set(llojetUser.llojiUserId, llojetUser);
  };
  private getLlojUseri = (llojiUserId: string) => {
    return this.llojUseriRegistry.get(llojiUserId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createLlojUseri = async (llojetUser: LlojiUserit) => {
    this.loading = true;

    try {
      await agent.LlojetUserit.create(llojetUser);
      runInAction(() => {
        this.llojUseriRegistry.set(llojetUser.llojiUserId, llojetUser);
        this.selectedLlojiUseri = llojetUser;
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

  updateLlojUser = async (llojetUser: LlojiUserit) => {
    this.loading = true;
    try {
      await agent.LlojetUserit.update(llojetUser);
      runInAction(() => {
        this.llojUseriRegistry.set(llojetUser.llojiUserId, llojetUser);
        this.selectedLlojiUseri = llojetUser;
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

  deleteLlojUser = async (llojiUserId: string) => {
    this.loading = true;
    try {
      await agent.LlojetUserit.delete(llojiUserId);
      runInAction(() => {
        this.llojUseriRegistry.delete(llojiUserId);
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
