import { Personnel } from "./personnel.model";
    export class Conge {
    idConge! : number;
	typeConge! : String ;
    dateDebut! : Date; 
	dateFin! : Date;
	dateDemande! : Date ;
    etat!:String;
    username! : String;
    personnel!: Personnel;
    notification!:Notification;
    }