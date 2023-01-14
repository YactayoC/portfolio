import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { isAtomLangSpanish } from '../store/LangSpanish';

export const useLang = () => {
  const router = useRouter();
  const [isLangSpanish, setIsLangSpanish] = useAtom(isAtomLangSpanish);

  useEffect(() => {
    if (router.locale !== 'es') return setIsLangSpanish(false);
    setIsLangSpanish(true);
  }, [router.locale, setIsLangSpanish]);

  return {
    isLangSpanish,
    setIsLangSpanish,
  };
};
