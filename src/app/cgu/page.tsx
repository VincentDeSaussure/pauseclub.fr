import { NavBar } from '../../components/nav-bar';
import { Footer } from '../../components/footer';
import styles from '../page.module.css'

export default function CGU() {
  return (
    <>
      <NavBar />
      <main className={styles.end}>
        <h1>Acceptation des CGU</h1>
        <p>En accédant à ce site web, vous acceptez de ne rien faire. Vous êtes autorisé à rester passif et à ignorer totalement ce texte.</p>

        <ol>
          <li>
            <h2>Collecte de Données Inexistante</h2>
            <p>Nous nous engageons solennellement à ne collecter aucune donnée personnelle, car nous n'avons aucune idée de ce qu'est une donnée personnelle. De plus, nous ne disposons d'aucun moyen pour collecter, stocker, ou même reconnaître des données.</p>
          </li>
          <li>
            <h2>Absence de Cookies</h2>
            <p>Notre site n'utilise aucun cookie : p</p>
          </li>
          <li>
            <h2>Aucune Analyse Statistique</h2>
            <p>Nous déclarons fièrement que nous ne réalisons aucune analyse statistique. Nous n'avons jamais compris les mathématiques, et notre calculatrice a été perdue depuis longtemps.</p>
          </li>
          <li>
            <h2>Confidentialité Inutile</h2>
            <p>Votre vie privée est totalement inintéressante pour nous, car nous n'avons ni le temps ni la compétence pour nous en soucier.</p>
          </li>
          <li>
            <h2>Droits Inexistants</h2>
            <p>Vous n'avez absolument aucun droit, mais cela ne fait aucune différence car nous ne pouvons rien faire de mal, ni de bien, en raison de notre incapacité totale à agir.</p>
          </li>
          <li>
            <h2>Contact Imaginaire</h2>
            <p>Si vous avez des questions, des préoccupations ou simplement envie de discuter de sujets sans intérêt, veuillez envoyer un e-mail à notre adresse inexistante : info@ceciestunsiteabsurde.com.</p>
          </li>
          <li>
            <h2>Aucune Modification Possible</h2>
            <p>Vous ne pouvez pas modifier ces CGU, car nous n'avons pas de système pour prendre en compte des modifications. Votre pouvoir sur ces CGU est aussi grand que notre capacité à voler.</p>
          </li>
        </ol>

        <p>En continuant à utiliser ce site, vous acceptez que tout ce qui précède n'a aucune importance et que vous avez perdu quelques minutes précieuses de votre vie en lisant ces CGU absurdes. Si cela vous a fait sourire, nous considérons notre mission accomplie.</p>
      </main>

      <Footer/>
    </>
  )
}
