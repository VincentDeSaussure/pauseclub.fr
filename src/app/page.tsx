import { NavBar } from '../components/nav-bar';
import styles from '../app/page.module.css';
import { Footer } from '../components/footer';
import { DonnezVotreAvisFormulaire } from '../components/donnez-votre-avis-formulaire';

export default function Home() {
  return (
    <>
      <NavBar/>
      <main>
        <section className={styles.container}>
          <p>Bienvenue !</p>
          <p>Nous espérons que vous avez apprécié partager un lieu de restauration et la possibilité d’évaluer la
            qualité de votre commentaire : )</p>
        </section>
        <section></section>
        <section>
          <DonnezVotreAvisFormulaire />
        </section>
      </main>
      <Footer/>
    </>
  )
}
