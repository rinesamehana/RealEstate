export interface Rezervimi {
    rezervimiId: string;
    check_in: string;
    check_out: string;
    shtepiaId: string;
    menyraPagesesId: string;
    kontrataId: string;
    IsCancelled?:boolean;
    AppUserId?:string;
  }