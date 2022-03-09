import ProductComparison from "./components/ProductComparison";
import { products } from "./data/Products";

export default function App() {
  return (
    <div className="App">
      <ProductComparison products={products} />
    </div>
  );
}
