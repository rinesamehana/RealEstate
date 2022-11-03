import { config } from "@fortawesome/fontawesome-svg-core";
import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { store } from "../stores/store";

import { history } from "../..";
import { User, UserFormValues } from "../models/user";
import { Shteti } from "../models/Shteti";
import { Gjinia } from "../models/Gjinia";
import { LlojiUserit } from "../models/LlojiUserit";
import { Ambienti } from "../models/Ambienti";
import { Qyteti } from "../models/Qyteti";
import { Gjendja } from "../models/Gjendja";
import { Pamja } from "../models/Pamja";

import { Pajisja } from "../models/Pajisja";
import { Lagjja } from "../models/Lagjja";
import { Kontrata } from "../models/Kontrata";
import { KohaPunes } from "../models/KohaPunes";
import { MenyraePageses } from "../models/MenyraPageses";
import { LlojiShtepise } from "../models/LlojiShtepise";
import { Roli } from "../models/Roli";
import { Kafshet } from "../models/Kafshet";
import { Stafi } from "../models/Stafi";
import { Shtepia } from "../models/Shtepia";
import { Rezervimi } from "../models/Rezervimi";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use((config) => {
  const token = store.commonStore.token;
  if (token) {
    config!.headers!.Authorization = `Bearer ${token}`;
  }
  return config;
});
// http://localhost:5000/api
axios.interceptors.response.use(async response => {
  if(process.env.NODE_ENV === 'development') await sleep(1000);
  return response;
}, (error: AxiosError) => {
const {status, data, config}:any = error.response!;
switch (status) {
  case 400:
      if (typeof data === 'string'){
          toast.error(data);
      }
      if (config.method === 'get' && data.errors.hasOwnProperty('id')){
          history.push('/not-found');
      }
      if (data.errors) {
          const modalStateErrors = [];
          for (const key in data.errors) {
              if (data.errors[key]) {
                  modalStateErrors.push(data.errors[key])
              }
          }
          throw modalStateErrors.flat();
      } 
      break;
  case 401:
      toast.error('unathorized');
      break;
  case 404:
      history.push('/not-found');
      break;
  case 500:
      store.commonStore.setServerError(data);
      history.push('/server-error');
      break;
}
return Promise.reject(error);
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Ambientet = {
  list: () => requests.get<Ambienti[]>("/ambient"),
  details: (ambientiId: string) =>
    requests.get<Ambienti>(`/ambient/${ambientiId}`),
  create: (ambienti: Ambienti) => requests.post<void>(`/ambient`, ambienti),
  update: (ambienti: Ambienti) =>
    requests.put<void>(`/ambient/${ambienti.ambientiId}`, ambienti),
  delete: (ambientiId: string) =>
    requests.delete<void>(`/ambient/${ambientiId}`),
};

const Shtepiat = {
  list: () => requests.get<Shtepia[]>("/shtepia"),
  details: (shtepiaId: string) =>
    requests.get<Shtepia>(`/shtepia/${shtepiaId}`),
  create: (shtepia: Shtepia) => requests.post<void>(`/shtepia`, shtepia),
  update: (shtepia: Shtepia) =>
    requests.put<void>(`/shtepia/${shtepia.shtepiaId}`, shtepia),
  delete: (shtepiaId: string) =>
    requests.delete<void>(`/shtepia/${shtepiaId}`),
};

const Oraret = {
  list: () => requests.get<KohaPunes[]>("/KohaPunes"),
  details: (kohaId: string) => requests.get<KohaPunes>(`/KohaPunes/${kohaId}`),
  create: (kohaPunes: KohaPunes) =>
    requests.post<void>(`/KohaPunes`, kohaPunes),
  update: (kohaPunes: KohaPunes) =>
    requests.put<void>(`/KohaPunes/${kohaPunes.kohaId}`, kohaPunes),
  delete: (kohaId: string) => requests.delete<void>(`/KohaPunes/${kohaId}`),
};
const Kontratat = {
  list: () => requests.get<Kontrata[]>("/kontrata"),
  details: (kontrataId: string) =>
    requests.get<Kontrata>(`/kontrata/${kontrataId}`),
  create: (kontrata: Kontrata) => requests.post<void>(`/kontrata`, kontrata),
  update: (kontrata: Kontrata) =>
    requests.put<void>(`/kontrata/${kontrata.kontrataId}`, kontrata),
  delete: (kontrataId: string) =>
    requests.delete<void>(`/kontrata/${kontrataId}`),
};

const Gjinite = {
  list: () => requests.get<Gjinia[]>("/gjinia"),
  details: (gjiniaId: string) => requests.get<Gjinia>(`/gjinia/${gjiniaId}`),
  create: (gjinia: Gjinia) => requests.post<void>("/gjinia", gjinia),
  update: (gjinia: Gjinia) =>
    requests.put<void>(`/gjinia/${gjinia.gjiniaId}`, gjinia),
  delete: (gjiniaId: string) => requests.delete<void>(`/gjinia/${gjiniaId}`),
};

const Qytetet = {
  list: () => requests.get<Qyteti[]>("/qyteti"),
  details: (qytetiId: string) => requests.get<Qyteti>(`/qyteti/${qytetiId}`),
  create: (qyteti: Qyteti) => requests.post<void>("/qyteti", qyteti),
  update: (qyteti: Qyteti) =>
    requests.put<void>(`/qyteti/${qyteti.qytetiId}`, qyteti),
  delete: (qytetiId: string) => requests.delete<void>(`/qyteti/${qytetiId}`),
};

const Shtetet = {
  list: () => requests.get<Shteti[]>("/shteti"),
  details: (shtetiId: string) => requests.get<Shteti>(`/shteti/${shtetiId}`),
  create: (shteti: Shteti) => requests.post<void>("/shteti", shteti),
  update: (shteti: Shteti) =>
    requests.put<void>(`/shteti/${shteti.shtetiId}`, shteti),
  delete: (shtetiId: string) => requests.delete<void>(`/shteti/${shtetiId}`),
};

const Lagjet = {
  list: () => requests.get<Lagjja[]>("/lagjja"),
  details: (lagjjaId: string) => requests.get<Lagjja>(`/lagjja/${lagjjaId}`),
  create: (lagjja: Lagjja) => requests.post<void>("/lagjja", lagjja),
  update: (lagjja: Lagjja) =>
    requests.put<void>(`/lagjja/${lagjja.lagjjaId}`, lagjja),
  delete: (lagjjaId: string) => requests.delete<void>(`/lagjja/${lagjjaId}`),
};

const LlojetUserit = {
  list: () => requests.get<LlojiUserit[]>("/LlojiUser"),
  details: (llojiUserId: string) =>
    requests.get<LlojiUserit>(`/LlojiUser/${llojiUserId}`),
  create: (llojiUser: LlojiUserit) =>
    requests.post<void>("/LlojiUser", llojiUser),
  update: (llojiUser: LlojiUserit) =>
    requests.put<void>(`/LlojiUser/${llojiUser.llojiUserId}`, llojiUser),
  delete: (llojiUserId: string) =>
    requests.delete<void>(`/LlojiUser/${llojiUserId}`),
};

const MenyratPagesave = {
  list: () => requests.get<MenyraePageses[]>("/MenyraPageses"),
  details: (menyraPagesesId: string) =>
    requests.get<MenyraePageses>(`/MenyraPageses/${menyraPagesesId}`),
  create: (menyraePageses: MenyraePageses) =>
    requests.post<void>("/MenyraPageses", menyraePageses),
  update: (menyraePageses: MenyraePageses) =>
    requests.put<void>(
      `/MenyraPageses/${menyraePageses.menyraPagesesId}`,
      menyraePageses
    ),
  delete: (menyraPagesesId: string) =>
    requests.delete<void>(`/MenyraPageses/${menyraPagesesId}`),
};

const Stafii = {
  list: () => requests.get<Stafi[]>("/Stafi"),
  details: (stafiId: string) => requests.get<Stafi>(`/Stafi/${stafiId}`),
  create: (stafi: Stafi) => requests.post<void>("/Stafi", stafi),
  update: (stafi: Stafi) =>
    requests.put<void>(`/Stafi/${stafi.stafiId}`, stafi),
  delete: (stafiId: string) => requests.delete<void>(`/Stafi/${stafiId}`),
};

const Gjendjet = {
  list: () => requests.get<Gjendja[]>("/gjendja"),
  details: (gjendjaId: string) =>
    requests.get<Gjendja>(`/gjendja/${gjendjaId}`),
  create: (gjendja: Gjendja) => requests.post<void>("/gjendja", gjendja),
  update: (gjendja: Gjendja) =>
    requests.put<void>(`/gjendja/${gjendja.gjendjaId}`, gjendja),
  delete: (gjendjaId: string) => requests.delete<void>(`/gjendja/${gjendjaId}`),
};

const Rolet = {
  list: () => requests.get<Roli[]>("/Rolet"),
  details: (roliId: string) => requests.get<Roli>(`/Rolet/${roliId}`),
  create: (roli: Roli) => requests.post<void>("/Rolet", roli),
  update: (roli: Roli) => requests.put<void>(`/Rolet/${roli.roliId}`, roli),
  delete: (roliId: string) => requests.delete<void>(`/Rolet/${roliId}`),
};

const Kafshett = {
  list: () => requests.get<Kafshet[]>("/Kafshet"),
  details: (kafshetId: string) =>
    requests.get<Kafshet>(`/Kafshet/${kafshetId}`),
  create: (kafshet: Kafshet) => requests.post<void>("/Kafshet", kafshet),
  update: (kafshet: Kafshet) =>
    requests.put<void>(`/Kafshet/${kafshet.kafshetId}`, kafshet),
  delete: (kafshetId: string) => requests.delete<void>(`/Kafshet/${kafshetId}`),
};

const Pamjet = {
  list: () => requests.get<Pamja[]>("/pamja"),
  details: (pamjaId: string) => requests.get<Pamja>(`/pamja/${pamjaId}`),
  create: (pamja: Pamja) => requests.post<void>("/pamja", pamja),
  update: (pamja: Pamja) =>
    requests.put<void>(`/pamja/${pamja.pamjaId}`, pamja),
  delete: (pamjaId: string) => requests.delete<void>(`/pamja/${pamjaId}`),
};

const Pajisjet = {
  list: () => requests.get<Pajisja[]>("/Pajisja"),
  details: (pajisjaId: string) =>
    requests.get<Pajisja>(`/Pajisja/${pajisjaId}`),
  create: (pajisja: Pajisja) => requests.post<void>("/Pajisja", pajisja),
  update: (pajisja: Pajisja) =>
    requests.put<void>(`/Pajisja/${pajisja.pajisjaId}`, pajisja),
  delete: (pajisjaId: string) => requests.delete<void>(`/Pajisja/${pajisjaId}`),
};

const KohaPuneve = {
  list: () => requests.get<KohaPunes[]>("/kohapunes"),
  details: (kohaId: string) => requests.get<KohaPunes>(`/kohapunes/${kohaId}`),
  create: (kohapunes: KohaPunes) =>
    requests.post<void>("/kohapunes", kohapunes),
  update: (kohapunes: KohaPunes) =>
    requests.put<void>(`/kohapunes/${kohapunes.kohaId}`, kohapunes),
  delete: (kohaId: string) => requests.delete<void>(`/kohapunes/${kohaId}`),
};

const LlojiShtepive = {
  list: () => requests.get<LlojiShtepise[]>("/llojishtepise"),
  details: (llojiShtepiseId: string) =>
    requests.get<LlojiShtepise>(`/llojishtepise/${llojiShtepiseId}`),
  create: (llojishtepise: LlojiShtepise) =>
    requests.post<void>("/llojishtepise", llojishtepise),
  update: (llojishtepise: LlojiShtepise) =>
    requests.put<void>(
      `/llojishtepise/${llojishtepise.llojiShtepiseId}`,
      llojishtepise
    ),
  delete: (llojiShtepiseId: string) =>
    requests.delete<void>(`/llojishtepise/${llojiShtepiseId}`),
};
const Rezervimet = {
  list: () => requests.get<Rezervimi[]>("/rezervimi"),
  details: (rezervimiId: string) =>
    requests.get<Rezervimi>(`/rezervimi/${rezervimiId}`),
  create: (rezervimi: Rezervimi) =>
    requests.post<void>("/rezervimi", rezervimi),
  update: (rezervimi: Rezervimi) =>
    requests.put<void>(
      `/rezervimi/${rezervimi.rezervimiId}`,
      rezervimi
    ),
  delete: (rezervimiId: string) =>
    requests.delete<void>(`/rezervimi/${rezervimiId}`),
};
const Account = {
  current: () => requests.get<User>("/account"),
  login: (user: UserFormValues) => requests.post<User>("/account/login", user),
  register: (user: UserFormValues) =>
    requests.post<User>("/account/register", user),
};
const agent = {
  Ambientet,
  Qytetet,
  Rolet,
  Kafshett,
  Gjinite,
  Shtetet,
  LlojetUserit,
  MenyratPagesave,
  LlojiShtepive,
  Account,
  Gjendjet,
  KohaPuneve,
  Stafii,
  Pamjet,
  Shtepiat,
  Rezervimet,
  Kontratat,
  Pajisjet,
  Lagjet,
  Oraret,
};

export default agent;
