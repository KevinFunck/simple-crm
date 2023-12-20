export class Note {
    id?: string;
    title:string;
    description:string;

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.title = obj ? obj.title : '';
        this.description = obj ? obj.description : '';

    }

    public toJSON() {
        return {
            title: this.title,
            description: this.description,
        
        }
    }
}