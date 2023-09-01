'use client'
import { useState } from 'react';
import styles from './donnez-votre-avis-formulaire.module.css'
import Image from 'next/image';
import etoileVide1 from '../../public/etoiles/ETOILE 1 VIDE.svg'
import etoilePleine1 from '../../public/etoiles/ETOILE 1 pleine.svg'
import etoileVide2 from '../../public/etoiles/ETOILE 2 VIDE.svg'
import etoilePleine2 from '../../public/etoiles/ETOILE 2 pleine.svg'
import etoileVide3 from '../../public/etoiles/ETOILE 3 VIDE.svg'
import etoilePleine3 from '../../public/etoiles/ETOILE 3 pleine.svg'
import etoileVide4 from '../../public/etoiles/ETOILE 4 VIDE.svg'
import etoilePleine4 from '../../public/etoiles/ETOILE 4 pleine.svg'
import etoileVide5 from '../../public/etoiles/ETOILE 5 VIDE.svg'
import etoilePleine5 from '../../public/etoiles/ETOILE 5 pleine.svg'

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
  ].map(etoile => {
    return <button className={styles.reset} key={etoile.value} type="button" onClick={() => handleNote(etoile.value)}>
      <Image src={etoile.dessin} alt={`dessin étoile pour la note de ${etoile.value}`} />
    </button>
  })

  return <fieldset>
    <legend className={styles.hidden}>Donnez une note</legend>
    {etoiles}
  </fieldset>;
}

export function DonnezVotreAvisFormulaire() {

  return <form className={styles.form}>
    <h1>VOTRE AVIS COMPTE, <br/>
      DONNEZ NOUS UNE NOTE !</h1>
    <Note />
    <textarea className={styles.avis} cols={30} rows={10} placeholder={'Partagez vos réflexions'}></textarea>
    <button className={[styles.reset, styles.soumettre].join(' ')} type={'submit'}>BOUTON SOUMETTRE</button>
  </form>;
}
