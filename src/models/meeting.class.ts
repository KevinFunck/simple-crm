export class Meeting {
    id?: string;
    meeting:string;
    MeetingDate:any;
    MeetingTime:any;

  

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.meeting = obj ? obj.title : '';
        this.MeetingDate = obj ? obj.description : '';
        this.MeetingTime = obj ? obj.description : '';
        
    }

    public toJSON() {
        return {
            meeting: this.meeting,
            MeetingDate: this.MeetingDate,
            MeetingTime: this.MeetingTime
        }
    }
}