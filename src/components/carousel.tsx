import Image from 'next/image';
import slide1 from '../../public/carousel/Pause club 1 - Nicoli Charlotte.jpg';
import slide2 from '../../public/carousel/Pause club 2 - Nicoli Charlotte.jpg';
import slide3 from '../../public/carousel/Pause club 3 - Nicoli Charlotte.jpg';
import slide4 from '../../public/carousel/Pause club 4 - Nicoli Charlotte.jpg';
import slide5 from '../../public/carousel/Pause club 5 - Nicoli Charlotte.jpg';
import slide6 from '../../public/carousel/Pause club 6 - Nicoli Charlotte.jpg';
import styles from './carousel.module.css';

export function Carousel() {
  return <section className={styles.container}>
    <div className={styles.carousel}>
      <Image src={slide1} alt={'slide 1 - Dessin pause club 1 - Nicoli Charlotte'} height={320}/>
      <Image src={slide2} alt={'slide 2 - Dessin pause club 2 - Nicoli Charlotte'} height={320}/>
      <Image src={slide4} alt={'slide 4 - Dessin pause club 4 - Nicoli Charlotte'} height={320}/>
      <Image src={slide3} alt={'slide 3 - Dessin pause club 3 - Nicoli Charlotte'} height={320}/>
      <Image src={slide5} alt={'slide 5 - Dessin pause club 5 - Nicoli Charlotte'} height={320}/>
      <Image src={slide6} alt={'slide 6 - Dessin pause club 6 - Nicoli Charlotte'} height={320}/>
    </div>
  </section>;
}
