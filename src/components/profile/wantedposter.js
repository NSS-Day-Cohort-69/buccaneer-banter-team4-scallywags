import { useState, useEffect } from 'react'
import styles from './profile.module.css';


const WantedPoster = ({ currentPirate }) => {
  const [pirate, setPirate] = useState({})

  async function fetchPirateProfile() {
    const response = await fetch(`http://localhost:8088/pirates/${currentPirate.id}`)
    const data = await response.json()
    setPirate(data)
  }

  useEffect(() => {
    if (currentPirate.id > 0) {
      fetchPirateProfile()
    }
  }, [currentPirate])

  if (!pirate) {
    return <div>Loading...</div>
  }

  return (
    <div className={`${styles.card} ${styles.serf}`}>
        <div className={styles.detail}>
            <div className={`${styles.user_photo} ${styles.horizontal_center}`}>
              <img src={pirate?.image_url} alt={pirate?.name} className={styles.user_photo} />
            </div>
            <p className={styles.serf__title}>Ahoy, my name be </p>
            <p className={styles.serf__name}>{pirate.name}</p>
            <p className={styles.serf__email}>{pirate.ship}</p>
        </div>
    </div>
  )
}

export default WantedPoster
