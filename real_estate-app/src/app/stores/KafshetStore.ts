import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Kafshet } from "../models/Kafshet";

export default class KafshetStore {
  selectedKafshet: Kafshet | undefined = undefined;
  kafshetRegistry = new Map<string, Kafshet>();
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get kafshett() {
    return Array.from(this.kafshetRegistry.values());
  }
  loadKafshett = async () => {
    this.loadingInitial = true;
    try {
      const kafshett = await agent.Kafshett.list();

      kafshett.forEach((kafshet) => {
        this.setKafshet(kafshet);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadKafshet = async (kafshetId: string) => {
    let kafshet = this.getKafshet(kafshetId);
    if (kafshet) {
      this.selectedKafshet = kafshet;
      return kafshet;
    } else {
      this.loadingInitial = true;
      try {
        kafshet = await agent.Kafshett.details(kafshetId);
        this.setKafshet(kafshet);
        runInAction(() => {
          this.selectedKafshet = kafshet;
        });

        this.setLoadingInitial(false);
        return kafshet;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setKafshet = (kafshet: Kafshet) => {
    this.kafshetRegistry.set(kafshet.kafshetId, kafshet);
  };
  private getKafshet = (kafshetId: string) => {
    return this.kafshetRegistry.get(kafshetId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createKafshet = async (kafshet: Kafshet) => {
    this.loading = true;

    try {
      await agent.Kafshett.create(kafshet);
      runInAction(() => {
        this.kafshetRegistry.set(kafshet.kafshetId, kafshet);
        this.selectedKafshet = kafshet;
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

  updateKafshet = async (kafshet: Kafshet) => {
    this.loading = true;
    try {
      await agent.Kafshett.update(kafshet);
      runInAction(() => {
        this.kafshetRegistry.set(kafshet.kafshetId, kafshet);
        this.selectedKafshet = kafshet;
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

  deleteKafshet = async (kafshetId: string) => {
    this.loading = true;
    try {
      await agent.Kafshett.delete(kafshetId);
      runInAction(() => {
        this.kafshetRegistry.delete(kafshetId);
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
