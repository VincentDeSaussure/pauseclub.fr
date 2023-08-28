import styles from '../app/page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.svg';

export function NavBar() {
  return <nav className={styles.main}>
    <Link href={'/'}>
      <Image src={logo} alt="logo pause club" width={1000}/>
    </Link>
    <ul>
      <li><Link href={'/cgu'}>CGU</Link></li>
      <li><Link href={'/contact'}>Contact</Link></li>
    </ul>
  </nav>;
}
