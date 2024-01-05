export class Customer {
    id?: string;
    companyName: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    street: string;
    zipCode: string;
    city: string;

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.companyName = obj ? obj.companyName : '';
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.phone = obj ? obj.phone : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }


    public toJSON() {
        return {
            companyName: this.companyName,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city

        }
    }


}