import { NextRouter } from 'next/router';

export const changeText = (router: NextRouter) => {
  if (typeof window !== 'undefined') {
    const text = document.querySelector('#dynamic-text');
    const textLoad = () => {
      setTimeout(() => {
        text!.textContent = router.locale === 'es' ? 'Desarrollador Frontend' : 'Frontend Developer';
      }, 0);

      setTimeout(() => {
        text!.textContent = router.locale === 'es' ? 'Desarrollador Backend' : 'Backend Developer';
      }, 4000);
    };
    textLoad();
    return setInterval(textLoad, 8000);
  }
};
