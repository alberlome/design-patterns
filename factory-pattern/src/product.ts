export class Product {
  public name: String;
  public description: String;
  public price: Number;
  public id?: Number;
  public serialNumber?: String;
  public quantity?: Number;
  public others?: String;

  constructor(
    name: String,
    description: String,
    price: Number,
    id: Number,
    serialNumber?: String,
    quantity?: Number,
    others?: String
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.id = id;
    this.serialNumber = serialNumber;
    this.quantity = quantity;
    this.others = others;
  }
}
