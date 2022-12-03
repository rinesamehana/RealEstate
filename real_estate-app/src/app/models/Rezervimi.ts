import { ShtepiaProfile } from "./ShtepiaProfile";
import { UserProfile } from "./userProfile";




export interface Rezervimi{
    rezervimiId: string;
    check_in: string;
    check_out: string;
    nrPersonave: string;
    pagesa: string;
    kontrata:string;
    appUserId?: string;
    user?: UserProfile;


}
// export interface Rezervimi {
//     rezervimiId: string;
//     // nrRezervimit?:string;
//     check_in: string;
//     check_out: string;
//     // shtepiaId?: string;
//     // menyraPagesesId?: string;
//     // kontrataId?: string;
//     IsCancelled?:boolean;
//     AppUserId?:string;
//     user?: UserProfile;
//     Attendeess?: RezervimiAttendees[]
    
// }



// export interface RezervimiAttendees{
//     id?: string;
 
//     RezervimiId?: string;
//     Cmimi: string;
//     IsHost?: boolean;
// }

