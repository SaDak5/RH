import { Absence } from './absence.model';
export class AbsenceWrapper{
_embedded!: { absences: Absence[]};
} 