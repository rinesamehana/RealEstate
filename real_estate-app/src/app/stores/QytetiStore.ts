import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";

import { Qyteti } from "../models/Qyteti";

export default class QytetiStore {
  selectedQytet: Qyteti | undefined = undefined;
  qytetiRegistry = new Map<string, Qyteti>();
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get qytetet() {
    return Array.from(this.qytetiRegistry.values());
  }
  loadQytetet = async () => {
    this.loadingInitial = true;
    try {
      const qytetet = await agent.Qytetet.list();

      qytetet.forEach((qyteti) => {
        this.setQyteti(qyteti);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadQytet = async (qytetiId: string) => {
    let qyteti = this.getQytet(qytetiId);
    if (qyteti) {
      this.selectedQytet = qyteti;
      return qyteti;
    } else {
      this.loadingInitial = true;
      try {
        qyteti = await agent.Qytetet.details(qytetiId);
        this.setQyteti(qyteti);
        runInAction(() => {
          this.selectedQytet = qyteti;
        });

        this.setLoadingInitial(false);
        return qyteti;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setQyteti = (qyteti: Qyteti) => {
    this.qytetiRegistry.set(qyteti.qytetiId, qyteti);
  };
  private getQytet = (qytetiId: string) => {
    return this.qytetiRegistry.get(qytetiId);
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createQytet = async (qyteti: Qyteti) => {
    this.loading = true;

    try {
      await agent.Qytetet.create(qyteti);
      runInAction(() => {
        this.qytetiRegistry.set(qyteti.qytetiId, qyteti);
        this.selectedQytet = qyteti;
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

  updateQytetet = async (qyteti: Qyteti) => {
    this.loading = true;
    try {
      await agent.Qytetet.update(qyteti);
      runInAction(() => {
        this.qytetiRegistry.set(qyteti.qytetiId, qyteti);
        this.selectedQytet = qyteti;
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

  deleteQytet = async (qytetiId: string) => {
    this.loading = true;
    try {
      await agent.Qytetet.delete(qytetiId);
      runInAction(() => {
        this.qytetiRegistry.delete(qytetiId);
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
