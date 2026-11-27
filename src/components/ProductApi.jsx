import { useEffect, useState } from "react";

import axios from "axios";

// function ProductApi() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function getProducts() {
//       try {
//         const response = await fetch("https://dummyjson.com/products?limit=5");

//         if (!response.ok) {
//           throw new Error("Something went wrong!");
//         }
//         const data = await response.json();
//         setProducts(data.products);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     getProducts();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading products .....</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         products.map((product) => <p key={product.id}>{product.title}</p>)
//       )}
//     </div>
//   );
// }

// export default ProductApi;

function ProductApi() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const url = "https://dummyjson.com/products?limit=5";

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(url);

        const data = response.data;
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading products</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        products.map((product) => <p key={product.id}>{product.title}</p>)
      )}
    </div>
  );
}

export default ProductApi;
