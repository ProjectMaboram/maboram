class CartItem {
  constructor(desc, units, ppu) {
    this.description = desc;
    this.units = units;
    this.pricePerUnit = ppu;
  }
}

class CartManager {
  constructor() {
    this.storage = new LocalStorage();
    this.items = [];
    this.update();
  }

  /**
   * Adds a cart item to the cart.
   * @param {*} item CartItem to store.
   */
  add(item) {
    this.items.push(item);
    this.save();
  }

  save() {
    const jsonList = JSON.stringify(this.items);
    this.storage.set("cartItems", jsonList);
  }

  update() {
    const list = this.storage.get("cartItems");
    this.items = list === null ? [] : JSON.parse(list);
  }

  updateItem(itemNr, item) {
    this.update();
    this.items[itemNr] = item;
    this.save();
  }

  removeItem(itemNr) {
    this.update();
    this.items.splice(itemNr, 1);
    this.save();
  }

  /**
   * Returns the value associated with a given key.
   * @param {*} itemNr Item to retrieve.
   * @returns {CartItem} Found value or null.
   */
  get(itemNr) {
    this.update();
    return this.items[itemNr];
  }

  getNumberOfItems() {
    this.update();
    return this.items.length;
  }
}
