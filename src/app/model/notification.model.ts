import { Absence } from "./absence.model";
import { Conge } from "./conge.model";
import { Personnel } from "./personnel.model";
import { Pret } from "./pret.model";

export class Notification {
    idNotification! : number;
    etat! : string;
    dateDemande!:Date;
    dateDebut!:Date;
    dateFin!:Date;
    periode!: number;
    montant!:number;
    dateRemise!:Date;
    type! : string;
    excuse!:String;
    username! : String;
    lu! : boolean;
    personnel!:Personnel;
    absence!:Absence;
    pret: Pret = new Pret();
    conge!:Conge;
}
