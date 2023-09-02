'use client'
import { useState } from 'react';
import styles from './donnez-votre-avis-formulaire.module.css'
import Image from 'next/image';
import etoileVide1 from '../../public/etoiles/etoile-1-vide.svg'
import etoilePleine1 from '../../public/etoiles/etoile-1-pleine.svg'
import etoileVide2 from '../../public/etoiles/etoile-2-vide.svg'
import etoilePleine2 from '../../public/etoiles/etoile-2-pleine.svg'
import etoileVide3 from '../../public/etoiles/etoile-3-vide.svg'
import etoilePleine3 from '../../public/etoiles/etoile-3-pleine.svg'
import etoileVide4 from '../../public/etoiles/etoile-4-vide.svg'
import etoilePleine4 from '../../public/etoiles/etoile-4-pleine.svg'
import etoileVide5 from '../../public/etoiles/etoile-5-vide.svg'
import etoilePleine5 from '../../public/etoiles/etoile-5-pleine.svg'

function Note() {
  const [note, donneNote] = useState(0);
  const handleNote = async (value: number) => {
    if (note === value) {
      donneNote(note - 1);
      return;
    } else {
      donneNote(value);
      return;
    }
  };

  const etoiles = [
    { value: 1, dessin: note > 0 ? etoilePleine1 : etoileVide1 },
    { value: 2, dessin: note > 1 ? etoilePleine2 : etoileVide2 },
    { value: 3, dessin: note > 2 ? etoilePleine3 : etoileVide3 },
    { value: 4, dessin: note > 3 ? etoilePleine4 : etoileVide4 },
    { value: 5, dessin: note > 4 ? etoilePleine5 : etoileVide5 },
  ]

  return <fieldset>
    <legend className={styles.hidden}>Donnez une note</legend>
    {etoiles.map(etoile => {
      return <button className={styles.reset} key={etoile.value} type="button" onClick={() => handleNote(etoile.value)}>
        <Image src={etoile.dessin} alt={`dessin étoile pour la note de ${etoile.value}`} />
      </button>
    })}
  </fieldset>;
}

export function DonnezVotreAvisFormulaire() {

  return <section>
    <form className={styles.form}>
      <h1>VOTRE AVIS COMPTE, <br/>
        DONNEZ-NOUS UNE NOTE !</h1>
      <Note />
      <textarea className={styles.avis} cols={30} rows={10} placeholder={'Partagez vos réflexions'}></textarea>
      <button className={[styles.soumettre].join(' ')} type={'submit'}>ENVOYER</button>
    </form>
  </section>;
}
