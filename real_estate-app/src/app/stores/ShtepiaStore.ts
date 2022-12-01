import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";

import { Shtepia } from "../models/Shtepia";

export default class ShtepiaStore {
  selectedShtepia: Shtepia | undefined = undefined;
  shtepiaRegistry = new Map<string, Shtepia>();
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get shtepiat() {
    return Array.from(this.shtepiaRegistry.values());
  }
 
  get n6Shtepiav(){
return Array.from(this.shtepiaRegistry.values()).slice(-6).reverse();
  }
  get n3Shtepiav(){
    return Array.from(this.shtepiaRegistry.values()).slice(-4).reverse();
      }
 
  private setShtepia = (shtepia: Shtepia) => {
    this.shtepiaRegistry.set(shtepia.shtepiaId, shtepia);
  };
  private getShtepi = (shtepiaId: string) => {
    return this.shtepiaRegistry.get(shtepiaId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
  
  loadShtepite = async () => {
    this.loadingInitial = true;
    try {
      const shtepiat = await agent.Shtepiat.list();

      shtepiat.forEach((shtepia) => {
        this.setShtepia(shtepia);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  
  loadShtepi = async (shtepiaId: string) => {
    let shtepia = this.getShtepi(shtepiaId);
    
    if (shtepia) {
      this.selectedShtepia = shtepia;
      return shtepia;
    } else {
      this.loadingInitial = true;
      try {
        shtepia = await agent.Shtepiat.details(shtepiaId);
        this.setShtepia(shtepia);
        runInAction(() => {
          this.selectedShtepia = shtepia;
        });

        this.setLoadingInitial(false);
        return shtepia;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  
 

  createShtepi = async (shtepia: Shtepia) => {
    this.loading = true;

    try {
      await agent.Shtepiat.create(shtepia);
      runInAction(() => {
        this.shtepiaRegistry.set(shtepia.shtepiaId, shtepia);
        this.selectedShtepia = shtepia;
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

  updateShtepi = async (shtepia: Shtepia) => {
    this.loading = true;
    try {
      await agent.Shtepiat.update(shtepia);
      runInAction(() => {
        this.shtepiaRegistry.set(shtepia.shtepiaId, shtepia);
        this.selectedShtepia = shtepia;
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

  deleteShtepi = async (shtepiaId: string) => {
    this.loading = true;
    try {
      await agent.Shtepiat.delete(shtepiaId);
      runInAction(() => {
        this.shtepiaRegistry.delete(shtepiaId);
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
