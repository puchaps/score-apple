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

export const reduceChoosedItemFromCart = (currentCartItems, reduceItem) => {
  const existingItem = currentCartItems.find(item => item.id === reduceItem.id);

  if (existingItem.quantity === 1) {
    return currentCartItems.filter(item => item.id !== reduceItem.id);
  }

  return currentCartItems.map(item => {
    if (item.id === reduceItem.id) {
      return {
        ...item,
        quantity: item.quantity - 1
      }
    }

    return item;
  });
}

export const removeChoosedItemFromCart = (currentCartItems, removeItem) => {
  return currentCartItems.filter(item => item.id !== removeItem.id);
};