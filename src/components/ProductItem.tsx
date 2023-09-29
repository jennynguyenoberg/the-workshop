import { Product } from '../types/types';
import styled from 'styled-components';
import { formatCurrency } from '../utils/formatCurrency'

const ProductItemContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  max-width: 300px;
`;

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <ProductItemContainer>
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.objectDesc}</p>
      <p>Price: {formatCurrency(product.price)}</p>
    </ProductItemContainer>
  );
};

export default ProductItem;
