import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getProductById } from '../data/products';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, getCartCount } = useCart();
  
  const productId = id ? parseInt(id) : 0;
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="product-detail-page">
        <Navbar cartCount={getCartCount()} />
        <div className="not-found">
          <h2>Sản phẩm không tồn tại</h2>
          <button onClick={() => navigate('/')} className="btn-back">
            Quay về trang chủ
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert('Đã thêm sản phẩm vào giỏ hàng!');
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="product-detail-page">
      <Navbar cartCount={getCartCount()} />
      
      <main className="detail-main">
        <button onClick={() => navigate(-1)} className="back-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Quay lại
        </button>

        <div className="product-detail-container">
          <div className="product-image-section">
            <img src={product.image} alt={product.name} className="detail-image" />
            <div className="category-badge">{product.category}</div>
          </div>

          <div className="product-info-section">
            <h1 className="product-title">{product.name}</h1>
            <div className="product-price-large">{formatPrice(product.price)}</div>
            
            {product.description && (
              <div className="product-description">
                <h3>Mô tả sản phẩm</h3>
                <p>{product.description}</p>
              </div>
            )}

            {product.details && (
              <div className="product-details">
                <h3>Thông tin chi tiết</h3>
                <p>{product.details}</p>
              </div>
            )}

            <div className="product-actions">
              <button className="btn-add-cart-large" onClick={handleAddToCart}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Thêm vào giỏ hàng
              </button>
              <button className="btn-buy-now" onClick={handleBuyNow}>
                Đặt mua ngay
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;

