class Cart {
    constructor() {
        if (Cart.instance) return Cart.instance;
        this.items = [];
        Cart.instance = this;
    }
    addItem(item) { this.items.push(item); }
    getItems() { return this.items; }
}
const cart1 = new Cart();
const cart2 = new Cart();
console.log(cart1 === cart2); // true
