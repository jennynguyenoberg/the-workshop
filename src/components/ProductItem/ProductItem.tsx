import { Product } from '../../types/types';
import { ProductItemContainer } from './ProductItem.styles';
import { formatCurrency } from '../../utils/formatCurrency';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <ProductItemContainer>
      <img src={product.img} alt={product.name} />
      <p>{product.objectNum}</p>
      <h2>{product.name}</h2>
      <p>{product.objectDesc}</p>
      <p>Price: {formatCurrency(product.price)}</p>
    </ProductItemContainer>
  );
};

export default ProductItem;
