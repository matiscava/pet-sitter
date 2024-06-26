import React from 'react'
import PasedorItem from './elements/PasedorItem'

const MisServicios = () => {
  return (
    <div>
      <h1>Mis Servicios</h1>
      <div className='service-container'>
        <PasedorItem 
          name={'1. Jorge'}
          description={'El mejor Amigo del perro'}
          time={2}
          stars={5.0}
          history={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate et aliquid exercitationem corporis voluptatibus perferendis eligendi nihil nulla excepturi porro sit quae inventore vel voluptatem, fugiat laboriosam reprehenderit eaque.'}
          img={''}
          reviews={23}
          price={100}
        />
        <PasedorItem 
          name={'2. Sabrina'}
          description={'El mejor Amigo del perro'}
          time={2}
          stars={5.0}
          history={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate et aliquid exercitationem corporis voluptatibus perferendis eligendi nihil nulla excepturi porro sit quae inventore vel voluptatem, fugiat laboriosam reprehenderit eaque.'}
          img={''}
          reviews={23}
          price={200}
        />
      </div>

    </div>
  )
}

export default MisServicios