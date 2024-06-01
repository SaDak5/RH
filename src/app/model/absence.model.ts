import { Assiduite } from "./assiduite.model";
import { Personnel } from "./personnel.model";

export class Absence{

    idAbs!: number;
    typeAbs!: string;
    heuresAbs!: number;
    statut!: String ;
    assiduite!:Assiduite;   
    personnel!:Personnel; 
  
    }
    