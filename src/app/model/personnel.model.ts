import { Absence } from './absence.model';
import { Assiduite } from './assiduite.model';
import { Conge } from './conge.model';
import { Contrat } from './contrat.model';
import { Departement } from './departement.model';
import { Messagerie } from './messagerie';
import { Pret } from './pret.model';
import { Utilisateur } from './utilisateur.model';
export class Personnel  extends Utilisateur{
	numCin! : String;
	sexe! :String ;
	fonction! :String ;
	username! : String; 
	departement!: Departement;
	conge!:Conge;
	pret!:Pret;
	contrat! :Contrat;
	assiduite!:Assiduite;
	notification!:Notification;
	messagerie!:Messagerie;
	absence!:Absence;
	
}
