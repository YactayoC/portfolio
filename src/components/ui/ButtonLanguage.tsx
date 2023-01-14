import Link from 'next/link';
import { useState } from 'react';

import { useLang } from '@/hooks';
import styles from '@/styles/ui/ButtonLanguage.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ButtonLanguage = () => {
  const router = useRouter();
  const [buttonActiveLanguage, setButtonActiveLanguage] = useState(false);
  const { setIsLangSpanish } = useLang();
  let url = router.asPath === '/' ? '' : router.asPath;

  const onChangeLang = (isSpanish: boolean) => {
    setIsLangSpanish(isSpanish);
    setButtonActiveLanguage(false);
    url = router.asPath;
  };

  return (
    <ul className={buttonActiveLanguage ? styles['language-expanded'] : styles.language}>
      <li className={styles.option} onClick={() => setButtonActiveLanguage(!buttonActiveLanguage)}>
        <Image src="https://cdn-icons-png.flaticon.com/512/9387/9387813.png" alt="languages" width={40} height={50} />
      </li>
      <li className={styles.option} onClick={() => onChangeLang(true)}>
        <Link href={`/es${url.replace('//','/')}`} locale={false}>
          <Image src="https://cdn-icons-png.flaticon.com/512/197/197593.png" alt="spanish" width={40} height={45} />
        </Link>
      </li>
      <li className={styles.option} onClick={() => onChangeLang(false)}>
        <Link href={`/en${url.replace('//','/')}`} locale={false}>
          <Image src="https://cdn-icons-png.flaticon.com/512/197/197484.png" alt="english" width={40} height={45} />
        </Link>
      </li>
    </ul>
  );
};

export default ButtonLanguage;
