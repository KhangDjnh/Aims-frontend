import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { products } from '../data/products';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const { addToCart, getCartCount } = useCart();

  const handleViewDetails = (id: number) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (id: number) => {
    const product = products.find(p => p.id === id);
    if (product) {
      addToCart(product);
    }
  };

  const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };

  return (
    <div className="homepage">
      <Navbar cartCount={getCartCount()} />
      
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Chào mừng đến với AIMS System</h1>
            <p>Khám phá bộ sưu tập đa dạng của chúng tôi: DVD, CD, Đĩa than và Sách</p>
          </div>
        </section>

        {/* DVD Section */}
        <section className="product-section">
          <div className="section-header">
            <h2 className="section-title">Đĩa DVD</h2>
            <p className="section-subtitle">Bộ sưu tập phim đa dạng và phong phú</p>
          </div>
          <div className="products-grid">
            {getProductsByCategory('DVD').map(product => (
              <ProductCard
                key={product.id}
                {...product}
                onViewDetails={handleViewDetails}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>

        {/* CD Section */}
        <section className="product-section">
          <div className="section-header">
            <h2 className="section-title">Đĩa CD</h2>
            <p className="section-subtitle">Âm nhạc chất lượng cao từ các nghệ sĩ hàng đầu</p>
          </div>
          <div className="products-grid">
            {getProductsByCategory('CD').map(product => (
              <ProductCard
                key={product.id}
                {...product}
                onViewDetails={handleViewDetails}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>

        {/* Vinyl Section */}
        <section className="product-section">
          <div className="section-header">
            <h2 className="section-title">Đĩa Than</h2>
            <p className="section-subtitle">Trải nghiệm âm thanh analog cổ điển</p>
          </div>
          <div className="products-grid">
            {getProductsByCategory('Đĩa Than').map(product => (
              <ProductCard
                key={product.id}
                {...product}
                onViewDetails={handleViewDetails}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>

        {/* Books Section */}
        <section className="product-section">
          <div className="section-header">
            <h2 className="section-title">Sách</h2>
            <p className="section-subtitle">Kho tàng tri thức và giải trí</p>
          </div>
          <div className="products-grid">
            {getProductsByCategory('Sách').map(product => (
              <ProductCard
                key={product.id}
                {...product}
                onViewDetails={handleViewDetails}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
