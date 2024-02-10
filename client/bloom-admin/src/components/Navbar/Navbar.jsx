import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="flex items-center text-white">
            <span className="font-semibold text-lg">Bloom Tile Admin Panel</span>
          </Link>
        </div>
        <div>
          <Link to="/product-form" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Add Product
          </Link>
          <Link to="/" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Products List
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
