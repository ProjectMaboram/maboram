class CartItem {
  constructor(desc, units, ppu) {
    this.description = desc;
    this.units = units;
    this.pricePerUnit = ppu;
    this.id = CartItem.uniqueId++;
    localStorage.setItem("uniqueId", CartItem.uniqueId);
    console.log("Id: ", this.id);
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
    const idx = cm.items.findIndex(item => item.id == itemNr);
    this.items[idx] = item;
    this.save();
  }

  removeItem(itemNr) {
    this.update();
    const idx = cm.items.findIndex(item => item.id == itemNr);
    this.items.splice(idx, 1);
    this.save();
  }

  /**
   * Returns the value associated with a given key.
   * @param {*} itemNr Item to retrieve.
   * @returns {CartItem} Found value or null.
   */
  get(itemNr) {
    this.update();
    return this.items.find(item => item.id == itemNr);

    // cm.items.find(item => item.units == 6)
    // cm.items.findIndex(item => item.units == 6)
  }

  getNumberOfItems() {
    this.update();
    return this.items.length;
  }
}

CartItem.uniqueId = Number(localStorage.getItem("uniqueId") || 0);
