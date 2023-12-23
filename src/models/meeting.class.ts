export class Meeting {
    id?: string;
    meeting:string;
    date:number;
    time:number;

  

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.meeting = obj ? obj.title : '';
        this.date = obj ? obj.description : '';
        this.time = obj ? obj.description : '';
        
    }

    public toJSON() {
        return {
            meeting: this.meeting,
            date: this.date,
            time: this.time
        }
    }
}