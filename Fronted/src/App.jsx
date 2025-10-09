import { useEffect, useState } from 'react';
import './App.css';
// import { Card } from './components/Card'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getprotucts();
  }, []);

  const getprotucts = async () => {
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    setProducts(data.products);

  };

  return (
    <>
      <h1 className="text-center my-4">Productos</h1>

      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-md-4 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body d-flex flex-column justify-content-between">
                  <img
                    src={product.image || "https://via.placeholder.com/300x200?text=Producto"}
                    alt={product.name}
                    className="mx-auto mb-3"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                    }}
                  />
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text mb-3">Precio: ${product.price}</p>
                  <a href="#" className="btn btn-primary mt-auto">
                    Ver detalles
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

}

export default App
