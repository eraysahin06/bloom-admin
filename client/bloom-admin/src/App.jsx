// App.jsx

import './App.css';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductForm from './components/ProductForm/ProductForm';
import ProductsList from './components/ProductsList/ProductsList';
import Navbar from './components/Navbar/Navbar';

function App() {
  const handleAddProduct = (productData) => {
    // Define the logic to add a product here
    console.log('Adding product:', productData);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductsList />} />
          {/* Pass onAddProduct function as prop to ProductForm */}
          <Route path="/product-form" element={<ProductForm onAddProduct={handleAddProduct} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
