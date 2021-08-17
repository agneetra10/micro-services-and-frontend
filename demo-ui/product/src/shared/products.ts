export class Product {
    name: string;
    description: string;
    price: number;
    couponCode: string;
    constructor(name: string, description: string, price: number, couponCode: string){
        this.name = name;
        this.description = description;
        this.price = price;
        this.couponCode= couponCode;
    }
}