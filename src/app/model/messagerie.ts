import { Commentaire } from "./commentaire.model";
export class Messagerie {
  idMessagerie!: number;
  message!: string;
  dateAjout!: Date;
  commentaires?: Commentaire[];
  }
  