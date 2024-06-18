import { Personnel } from "./personnel.model";
import { Notification } from "./notification.model"; 
export class Pret {

    idPret! : number ;
	statutPret! : String;
	montant! : number;
	dateDemande!:number;
    dateRemise!: Date 
    //tauxInteret!:Date
	etat!:String;
	username! : String;
	personnel!:Personnel;
	notification!:Notification;
}