import { Product } from '../../types/types';
import { ProductItemContainer, ProductText } from './ProductItem.styles';
import { formatCurrency } from '../../utils/formatCurrency';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <ProductItemContainer>
      <img src={product.img} alt={product.name} />
      <ProductText>{product.objectNum}</ProductText>
      <ProductText>
        <p>{product.collection}<br />{product.name}</p>
      </ProductText>
      <ProductText>
        <p>{product.year}<br />{product.material}<br />{product.dimensions}</p>  
      </ProductText>
      <ProductText>
        <p>{product.objectDesc}</p>
        <p>{formatCurrency(product.price)}</p>
      </ProductText>
    </ProductItemContainer>
  );
};

export default ProductItem;
