export class Note {
    id?: string;
    title:string;
    description:string;
    amount:number;

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.title = obj ? obj.title : '';
        this.description = obj ? obj.description : '';
        this.amount = obj ? obj.amount : '1';
    }

    public toJSON() {
        return {
            title: this.title,
            description: this.description,
            amount: this.amount
        }
    }
}