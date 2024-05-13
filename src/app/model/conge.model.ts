import { Personnel } from "./personnel.model";
    export class Conge {
    idConge! : number;
	typeConge! : String ;
    dateDebut! : Date; 
	dateFin! : Date;
	justifConge! : String;
	dateDemande! : Date ;
    etat!:String;
    personnel!: Personnel;

    }