export class Order {
    name: string | undefined;
    category: string | undefined;
    price: number | undefined;

    constructor(name?: string, category?: string, price?: number) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
}
