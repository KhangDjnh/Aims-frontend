import './ProductCard.css';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  onViewDetails: (id: number) => void;
  onAddToCart: (id: number) => void;
}

const ProductCard = ({ id, name, price, image, category, onViewDetails, onAddToCart }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
        <div className="product-category-badge">{category}</div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{formatPrice(price)}</p>
        <div className="product-actions">
          <button 
            className="btn-view-details"
            onClick={() => onViewDetails(id)}
          >
            Xem chi tiết
          </button>
          <button 
            className="btn-add-cart"
            onClick={() => onAddToCart(id)}
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

