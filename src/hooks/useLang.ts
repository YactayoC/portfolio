import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { isAtomLangSpanish } from '../store/LangSpanish';

export const useLang = () => {
  const router = useRouter();
  const [isLangSpanish, setIsLangSpanish] = useAtom(isAtomLangSpanish);
  const locale = router.locale;

  useEffect(() => {
    return setIsLangSpanish(router.locale === 'es');
  }, [router.locale, setIsLangSpanish]);

  return {
    isLangSpanish,
    setIsLangSpanish,
    locale,
  };
};
