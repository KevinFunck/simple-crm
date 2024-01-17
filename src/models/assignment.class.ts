export class Assignment {
    id?: string;
    assignmentName: string;
    startDate: any;
    endDate: any;
    salesVolume: any;
    assignmentInfo: string;
  

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.assignmentName = obj ? obj.companyName : '';
        this.startDate = obj ? obj.startDate : '';
        this.endDate = obj ? obj.endDate : '';
        this.salesVolume = obj ? obj.endVolume : '';
        this.assignmentInfo = obj ? obj.assignmentInfo : '';
    }


    public toJSON() {
        return {
            assignmentName: this.assignmentName,
            startDate: this.startDate,
            endDate: this.endDate,
            salesVolume: this.salesVolume,
            assignemtInfo: this.assignmentInfo,

        }
    }


}