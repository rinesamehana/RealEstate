import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { MenyraePageses } from "../models/MenyraPageses";

export default class MenyraPagesesStore {
  selectedMenyraPageses: MenyraePageses | undefined = undefined;
  menyraPagesesRegistry = new Map<string, MenyraePageses>();
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get menyratPageses() {
    return Array.from(this.menyraPagesesRegistry.values());
  }
  loadMenyratPageses = async () => {
    this.loadingInitial = true;
    try {
      const menyratPageses = await agent.MenyratPagesave.list();

      menyratPageses.forEach((menyraPageses) => {
        this.setMenyraPageses(menyraPageses);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadMenyrPagese = async (menyraPagesesId: string) => {
    let menyraPageses = this.getMenyraPageses(menyraPagesesId);
    if (menyraPageses) {
      this.selectedMenyraPageses = menyraPageses;
      return menyraPageses;
    } else {
      this.loadingInitial = true;
      try {
        menyraPageses = await agent.MenyratPagesave.details(menyraPagesesId);
        this.setMenyraPageses(menyraPageses);
        runInAction(() => {
          this.selectedMenyraPageses = menyraPageses;
        });

        this.setLoadingInitial(false);
        return menyraPageses;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setMenyraPageses = (menyraPageses: MenyraePageses) => {
    this.menyraPagesesRegistry.set(
      menyraPageses.menyraPagesesId,
      menyraPageses
    );
  };
  private getMenyraPageses = (menyraPagesesId: string) => {
    return this.menyraPagesesRegistry.get(menyraPagesesId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createMenyrPagese = async (menyraPageses: MenyraePageses) => {
    this.loading = true;

    try {
      await agent.MenyratPagesave.create(menyraPageses);
      runInAction(() => {
        this.menyraPagesesRegistry.set(
          menyraPageses.menyraPagesesId,
          menyraPageses
        );
        this.selectedMenyraPageses = menyraPageses;
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

  updateMenyrPagese = async (menyraPageses: MenyraePageses) => {
    this.loading = true;
    try {
      await agent.MenyratPagesave.update(menyraPageses);
      runInAction(() => {
        this.menyraPagesesRegistry.set(
          menyraPageses.menyraPagesesId,
          menyraPageses
        );
        this.selectedMenyraPageses = menyraPageses;
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

  deleteMenyrPagese = async (menyraPagesesId: string) => {
    this.loading = true;
    try {
      await agent.MenyratPagesave.delete(menyraPagesesId);
      runInAction(() => {
        this.menyraPagesesRegistry.delete(menyraPagesesId);
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
