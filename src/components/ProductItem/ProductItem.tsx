import { Product } from "../../types/types";
import {
  ProductItemContainer,
  ProductText,
  ProductImage,
  ProductTextContent,
  ProductTextPara,
} from "./ProductItem.styles";
import { formatCurrency } from "../../utils/formatCurrency";
import Button from "../Button/Button";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const TextAlignment = product.id === 3 ? "right" : "left";

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <ProductItemContainer>
      {product.id === 3 ? (
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
            <Button onClick={handleClick}>Add to cart</Button>
          </ProductText>
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
              <Button onClick={handleClick}>Add to cart</Button>
          </ProductText>
        </>
      )}
    </ProductItemContainer>
  );
};

export default ProductItem;
