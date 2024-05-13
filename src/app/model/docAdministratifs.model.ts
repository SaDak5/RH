import { Personnel } from "./personnel.model";

export class Document {
    idDocument! : number;
    type! : string;
    dateCreation!:Date;
    personnel!:Personnel;

    }
    