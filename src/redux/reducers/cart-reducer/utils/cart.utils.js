export const verifyAddItemToCart = (currentCartItems, addItem) => {
  const existing = currentCartItems.find( item => item.id === addItem.id);

  if (existing) {
    return currentCartItems.map( item => {
      if (item.id === addItem.id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }

      return item;
    });
  }

  return [ ...currentCartItems, { ...addItem, quantity: 1} ];
}