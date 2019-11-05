/**
 * Classe wookie
 */
export class Wookie {
    id : number;
    prenom : string;
    dateNaissance : Date;

    /**
     * 
     * @param id 
     * @param prenom 
     * @param dateNaissance 
     */
    constructor(id : number, prenom : string, dateNaissance : Date) {
        this.id = id;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
    }
}
