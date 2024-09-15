import { Personnel } from "./personnel.model";

export class Document {
    idDocument! : number;
    type! : string;
    autreType! : string;
    dateCreation!:Date;
    username! : String;
    pdfFile!: any;
    personnel!:Personnel;

    }
    