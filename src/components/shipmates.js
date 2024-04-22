import styles from './follow.module.css'

const ShipMates = ({ myFavoriteScallywags }) => {
  return (
    <div className={styles.favorites}>
      <h2 className='text-xl bg-cyan-50 py-1 px-2'>Following Pirates</h2>
      <ul>
        {myFavoriteScallywags.map((relationship) => (
          <li className={`text-base ${styles.favorite}`} key={relationship.id}>
            <p>{relationship?.pirate?.rank} {relationship?.pirate?.name}</p>
            <p className='text-sm italic text-slate-400'>{relationship?.pirate?.ship}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShipMates
