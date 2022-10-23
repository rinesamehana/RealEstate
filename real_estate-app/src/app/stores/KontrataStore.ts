import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Kontrata } from "../models/Kontrata";

export default class KontrataStore {
  selectedKontrat: Kontrata | undefined = undefined;
  kontrataRegistry = new Map<string, Kontrata>();
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get kontratat() {
    return Array.from(this.kontrataRegistry.values());
  }
  loadKontratat = async () => {
    this.loadingInitial = true;
    try {
      const kontratat = await agent.Kontratat.list();

      kontratat.forEach((kontrata) => {
        this.setKontrat(kontrata);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadKontrat = async (kontrataId: string) => {
    let kontrata = this.getKontrat(kontrataId);
    if (kontrata) {
      this.selectedKontrat = kontrata;
      return kontrata;
    } else {
      this.loadingInitial = true;
      try {
        kontrata = await agent.Kontratat.details(kontrataId);
        this.setKontrat(kontrata);
        runInAction(() => {
          this.selectedKontrat = kontrata;
        });

        this.setLoadingInitial(false);
        return kontrata;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setKontrat = (kontrata: Kontrata) => {
    this.kontrataRegistry.set(kontrata.kontrataId, kontrata);
  };
  private getKontrat = (kontrataId: string) => {
    return this.kontrataRegistry.get(kontrataId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createKontrat = async (kontrata: Kontrata) => {
    this.loading = true;

    try {
      await agent.Kontratat.create(kontrata);
      runInAction(() => {
        this.kontrataRegistry.set(kontrata.kontrataId, kontrata);
        this.selectedKontrat = kontrata;
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

  updateKontrat = async (kontrata: Kontrata) => {
    this.loading = true;
    try {
      await agent.Kontratat.update(kontrata);
      runInAction(() => {
        this.kontrataRegistry.set(kontrata.kontrataId, kontrata);
        this.selectedKontrat = kontrata;
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

  deleteKontrat = async (kontrataId: string) => {
    this.loading = true;
    try {
      await agent.Kontratat.delete(kontrataId);
      runInAction(() => {
        this.kontrataRegistry.delete(kontrataId);
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
