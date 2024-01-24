export class Assignment {
    id?: string;
    assignmentName: string;
    startDate: any;
    endDate: any;
    salesVolume: number = 0;
    assignmentInfo: string;
    customerId:string
  

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.assignmentName = obj ? obj.companyName : '';
        this.startDate = obj ? obj.startDate : '';
        this.endDate = obj ? obj.endDate : '';
        this.salesVolume = obj ? obj.endVolume : 0;
        this.assignmentInfo = obj ? obj.assignmentInfo : '';
        this.customerId = obj? obj.customerId : '';
    }


    public toJSON() {
        return {
            assignmentName: this.assignmentName,
            startDate: this.startDate,
            endDate: this.endDate,
            salesVolume: this.salesVolume,
            assignemtInfo: this.assignmentInfo,
            customerId: this.customerId

        }
    }


}