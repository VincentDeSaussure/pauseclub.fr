import { NavBar } from '../components/nav-bar';
import styles from '../app/page.module.css';
import { Footer } from '../components/footer';

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
          <h1>VOTRE AVIS COMPTE, <br/>
            DONNEZ NOUS UNE NOTE !</h1>
          <form>
            <input type={'range'} min={0} max={5} step={1} value={0}/>
            <textarea cols={30} rows={10} placeholder={'Partagez vos réflexions'}></textarea>
            <button type={'submit'}>Bouton soumettre</button>
          </form>
        </section>
      </main>
      <Footer/>
    </>
  )
}
