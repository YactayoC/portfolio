import { FC } from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
import styles from '@/styles/ui/SlideImage.module.css';

interface Props {
  images: string[];
}

const SlideImages: FC<Props> = ({ images }) => {
  return (
    <Slide easing="ease" duration={5000} indicators cssClass={styles.image}>
      {images.map((image) => {
        return (
          <div className={styles['each-slide']} key={image}>
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
              }}
            ></div>
          </div>
        );
      })}
    </Slide>
  );
};

export default SlideImages;
