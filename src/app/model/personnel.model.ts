import { Absence } from './absence.model';
import { Assiduite } from './assiduite.model';
import { Conge } from './conge.model';
import { Contrat } from './contrat.model';
import { Departement } from './departement.model';
import { Messagerie } from './messagerie';
import { Pret } from './pret.model';
export class Personnel {
    id! : number;
	nom! : String;
	prenom! : String;
	dateNaissance! : Date;
	email! : String;
	numTelephone! : number;
	numCin! : String;
	adresse! : String;
	fonction! :String ;
	departement!: Departement;
	conge!:Conge;
	pret!:Pret;
	contrat! :Contrat;
	assiduite!:Assiduite;
	notification!:Notification;
	messagerie!:Messagerie;
	absence!:Absence;
}
