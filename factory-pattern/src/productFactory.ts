import { Product } from "./product";

export class ProductFactory {
  storeProducts: Array<Product> = new Array();

  createProduct(name: String, description: String, price: Number) {
    const id = Math.floor(Math.random() * 10);
    this.saveProduct(new Product(name, description, price, id));
  }

  saveProduct(product: Product) {
    this.storeProducts.push(product);
  }

  getAllProducts() {
    return this.storeProducts;
  }

  deleteProduct(id: Number | undefined) {
    return this.storeProducts.splice(
      this.storeProducts.findIndex((element) => element.id === id),
      1
    );
  }
}
