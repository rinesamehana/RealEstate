import { createContext, useContext } from "react";
import AmbientiStore from "./AmbientiStore";
import commonStore from "./commonStore";
import GjiniaStore from "./GjiniaStore";
import LlojiUserStore from "./LlojiUserStore";
import QytetiStore from "./QytetiStore";
import ModalStore from "./modalStore";
import ShtetiStore from "./ShtetiStore";
import UserStore from "./UserStore";
import GjendjaStore from "./GjendjaStore";
import PamjaStore from "./PamjaStore";
import PajisjaStore from "./PajisjaStore";
import LagjjaStore from "./LagjjaStore";
import KontrataStore from "./KontrataStore";
import KohaPunesStore from "./KohaPunesStore";
import MenyraPagesesStore from "./MenyraPagesesStore";
import LlojiShtepiseStore from "./LlojiShtepiseStore";
import RoliStore from "./RoliStore";
import KafshetStore from "./KafshetStore";
import StafiStore from "./StafiStore";

interface Store {
  commonStore: commonStore;
  gjiniaStore: GjiniaStore;
  shtetiStore: ShtetiStore;
  llojiUserStore: LlojiUserStore;
  userStore: UserStore;
  ambientiStore: AmbientiStore;
  llojiShtepiseStore: LlojiShtepiseStore;
  menyraPagesesStore: MenyraPagesesStore;
  qytetiStore: QytetiStore;
  gjendjaStore: GjendjaStore;
  pamjaStore: PamjaStore;
  kontrataStore: KontrataStore;
  roliStore: RoliStore;
  pajisjaStore: PajisjaStore;
  stafiStore: StafiStore;
  lagjjaStore: LagjjaStore;
  kafshetStore: KafshetStore;
  kohaPunesStore: KohaPunesStore;

  modalStore: ModalStore;
}
export const store: Store = {
  gjiniaStore: new GjiniaStore(),
  shtetiStore: new ShtetiStore(),
  llojiUserStore: new LlojiUserStore(),
  llojiShtepiseStore: new LlojiShtepiseStore(),
  commonStore: new commonStore(),
  userStore: new UserStore(),
  menyraPagesesStore: new MenyraPagesesStore(),
  stafiStore: new StafiStore(),
  kafshetStore: new KafshetStore(),
  ambientiStore: new AmbientiStore(),
  kontrataStore: new KontrataStore(),
  qytetiStore: new QytetiStore(),
  gjendjaStore: new GjendjaStore(),
  pamjaStore: new PamjaStore(),
  roliStore: new RoliStore(),
  pajisjaStore: new PajisjaStore(),
  modalStore: new ModalStore(),
  lagjjaStore: new LagjjaStore(),
  kohaPunesStore: new KohaPunesStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
