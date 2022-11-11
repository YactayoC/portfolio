export const changeText = () => {
  if (typeof document !== 'undefined') {
    const text = document.querySelector('#dynamic');
    const textLoad = () => {
      setTimeout(() => {
        text!.textContent = 'Frontend Developer';
      }, 0);

      setTimeout(() => {
        text!.textContent = 'Backend Developer';
      }, 4000);
    };
    textLoad();
    setInterval(textLoad, 8000);
  }
};
