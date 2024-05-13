import { Assiduite } from "./assiduite.model";
import { Personnel } from "./personnel.model";

export class Absence{

    idAbs!: number;
    typeAbs!: string;
    heuresAbs!: number;
    statut!: String ;
    notification!: String ;
    assiduite!:Assiduite;   
    personnel!:Personnel; 
    nom!: string; // Nom du personnel associé
    prenom!: string  ;
    }
    