import { Product } from '../../types/types';
import {
  ProductItemContainer,
  ProductText,
  ProductImage,
  ProductTextContent,
  ProductTextPara
} from './ProductItem.styles';
import { formatCurrency } from '../../utils/formatCurrency';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <ProductItemContainer>
      <ProductImage src={product.img} alt={product.name} />
      <ProductText>
        <ProductTextContent>{product.objectNum}</ProductTextContent>
        <ProductTextContent>
          <ProductTextPara>{product.collection}</ProductTextPara>
          <ProductTextPara>{product.name}</ProductTextPara>
        </ProductTextContent>
        <ProductTextContent>
          <ProductTextPara>{product.year}</ProductTextPara>
          <ProductTextPara>{product.material}</ProductTextPara>
          <ProductTextPara>{product.dimensions}</ProductTextPara>
        </ProductTextContent>
        <ProductTextContent>{product.objectDesc}</ProductTextContent>
        <ProductTextContent>{formatCurrency(product.price)}</ProductTextContent>
      </ProductText>
    </ProductItemContainer>
  );
};

export default ProductItem;
