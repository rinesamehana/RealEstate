
import { Gjendja } from "./Gjendja";
import { Lagjja } from "./Lagjja";
import { LlojiShtepise } from "./LlojiShtepise";
import { Pamja } from "./Pamja";
import { Rezervimi } from "./Rezervimi";
import { Kafshet } from "./Kafshet";
import { Stafi } from "./Stafi";

export interface Shtepia {
    shtepiaId: string;
    photo: any;
    photo2: any;
    photo3: any;
    photo4: any;
    titulli:string;
    cmimi: string;
    lokacioni: string;
    nrDhomave: string;
    nrBanjove: string;
    siperfaqja: string;
    pershkrimi: string;
    lagjjaId: string;
    // lagjja?:Lagjja [];
    llojiShtepiseId: string;
    // lojiShtepise?:LlojiShtepise[];
    gjendjaShtepiseId: string;
    // gjendjaShtepise?:Gjendja[];
    pamjaId: string;
    // pamja:Pamja[];
    kafshetId: string;
    // kafshet?: Kafshet[];
    stafiId: string;
    // stafi?:Stafi[]


  }
  