export const handleSliderTimeOut = (elem) => {
  let left = 0;
  
  setInterval(() => {
    const directorySlider = elem;
    
    left = left - 1000;

    if (left < -4000) {
      left = 0
    };
    directorySlider.style.left = left + 'px';
  }, 3000)
};