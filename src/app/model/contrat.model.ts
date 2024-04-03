import { Personnel } from "./personnel.model";

export class Contrat {
    idContrat! : number;
    type! : string;
    dateEmbauche!:Date;
    dateSignature!:Date;
    nomSociete!:string;
    personnel!:Personnel;

    }
    