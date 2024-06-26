import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const PasedorItem = ({name, description, history, img, stars, reviews, time, price }) => {
  return (
    <div>
      <img className='paseador-img' alt={name} src={img}/>
      <div className='paseador-info'>
        <p className='paseador-name'>{name}</p>
        <p className='paseador-description'>{description}</p>
        <p className='paseador-time'>{time} - Semana</p>
        <div className='paseador-reviews'><FontAwesomeIcon icon={faStar}/>{stars} - {reviews} comentario{reviews > 1 ? 's' : ''}</div>
      </div>
      <div className="paseador-history-container">
        <p>{history}</p>
      </div>
      <div className="paseador-price-container">
        <p>Al rededor de</p>
        <p className="paseador-price">{price}</p>
        <p>la hora</p>
      </div>
    </div>
  )
}

export default PasedorItem