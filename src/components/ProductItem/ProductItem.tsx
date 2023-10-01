import { useState } from "react";
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
import Modal from "../Modal/Modal";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const isThirdItem = product.id === 3;
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ProductItemContainer>
      <ProductImage
        src={product.img}
        alt={product.name}
        style={{ order: isThirdItem ? 2 : 1 }} // Set the order style for image
      />
      <ProductText
        style={{
          order: isThirdItem ? 1 : 2,
          textAlign: isThirdItem ? "right" : "left",
        }}
      >
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
        <ProductTextContent>{formatCurrency(product.price)}</ProductTextContent>
        <Button onClick={handleClick}>Add to cart</Button>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          message="Product not available."
        />
      </ProductText>
    </ProductItemContainer>
  );
};

export default ProductItem;
