import React, { useContext } from 'react';
import CartContext from 'context/CartContext';
import { FaTrashAlt } from 'react-icons/fa';

export function RemoveLineItem({ lineItemId }) {
  const { removeLineItem } = useContext(CartContext);

  const handleClick = () => {
    removeLineItem(lineItemId)
  }

  return (
    <div onClick={handleClick}>
      <FaTrashAlt />
    </div>
  )
}
