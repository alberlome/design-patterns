import { ProductFactory } from "./productFactory";
import "./style.css";
// import { setupCounter } from './counter'

const factory = new ProductFactory();
let nombrecito;

for (let x = 0; x < 10; x++) {
  factory.createProduct("Nokia 3310", "Smartphone very popular", 100);
}

console.log(factory.getAllProducts());
console.log(factory.deleteProduct(6));
const allProducts = factory.getAllProducts();

allProducts.forEach((el) => {
  nombrecito = el.name;
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <pre> "${Object.values(allProducts[2])}" </pre>
    </a>
    <h1>Vite + TypeScript</h1>
  </div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
