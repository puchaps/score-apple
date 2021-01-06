export const setAttributeForMac = (attribute) => {
  return (attribute.toLowerCase().includes('macbook')) ? true : false; 
}

export const setAttributeForWatch = (attribute) => {
  return (attribute.toLowerCase().includes('watch')) ? true : false;
}