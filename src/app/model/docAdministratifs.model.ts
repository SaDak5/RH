import { Personnel } from "./personnel.model";

export class Document {
    idDocument! : number;
    type! : string;
    dateCreation!:Date;
    username! : String;
    personnel!:Personnel;

    }
    