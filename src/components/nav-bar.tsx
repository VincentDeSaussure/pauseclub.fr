import styles from '../app/page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.svg';

export function NavBar() {
  return <nav className={[styles.main, styles.container].join(' ')}>
    <Link href={'/'}>
      <Image src={logo} alt="logo pause club" width={'220'}/>
    </Link>
    <ul className={styles.menu}>
      <li><Link href={'/cgu'}>CGU</Link></li>
      <li><Link href={'https://nicolicharlotte.com/home'}>CONTACT</Link></li>
    </ul>
  </nav>;
}
