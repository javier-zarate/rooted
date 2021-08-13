import React, { useState } from 'react';
import { ProductQuantityAdderWrapper } from './styles';
import { Button } from '../Button';
import { Input } from '../Input';

export function ProductQuantityAdder({ available, variantId }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <ProductQuantityAdderWrapper>
      <strong>Quantity</strong>
      <form onSubmit={handleSubmit}>
        <Input
          disabled={!available}
          type="number"
          min="1"
          step="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <Button type="submit" disabled={!available} fullWidth>
          Add to cart
        </Button>
      </form>
    </ProductQuantityAdderWrapper>
  );
}
