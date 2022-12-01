import { Qyteti } from "./Qyteti";

export interface Shteti {
  shtetiId: string;
  emri: string;
  shkurtesa: string;
  qytetet?:Qyteti[];
}
