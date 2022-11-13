export const changeText = () => {
  if (typeof window !== 'undefined') {
    const text = document.querySelector('#dynamic-text');
    const textLoad = () => {
      setTimeout(() => {
        text!.textContent = 'Frontend Developer';
      }, 0);

      setTimeout(() => {
        text!.textContent = 'Backend Developer';
      }, 4000);
    };
    textLoad();
    return setInterval(textLoad, 8000);
  }
};
