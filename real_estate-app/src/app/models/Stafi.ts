import { Qyteti } from "./Qyteti";

export interface Stafi {
  stafiId: string;
  photo: string;
  emri: string;
  mbiemri: string;
  email: string;
  nrTelefonit: string;
  roliId: string;
  llojiUserId: string;
  kohaId: string;
  gjiniaId: string;
  qytetiId: string;
  qyteti?: Qyteti;
  adresa: string;
}
