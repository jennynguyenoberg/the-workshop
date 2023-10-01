import { Product } from "../../types/types";
import {
  ProductItemContainer,
  ProductText,
  ProductImage,
  ProductTextContent,
  ProductTextPara,
} from "./ProductItem.styles";
import { formatCurrency } from "../../utils/formatCurrency";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const TextAlignment = product.id === 3 ? "right" : "left";

  return (
    <ProductItemContainer>
      {product.id === 3 ? (
        <>
          <ProductText style={{ textAlign: TextAlignment }}>
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
            <ProductTextContent>
              {formatCurrency(product.price)}
            </ProductTextContent>
          </ProductText>
          <ProductImage src={product.img} alt={product.name} />
        </>
      ) : (
        <>
          <ProductImage src={product.img} alt={product.name} />
          <ProductText style={{ textAlign: TextAlignment }}>
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
            <ProductTextContent>
              {formatCurrency(product.price)}
            </ProductTextContent>
          </ProductText>
        </>
      )}
    </ProductItemContainer>
  );
};

export default ProductItem;
