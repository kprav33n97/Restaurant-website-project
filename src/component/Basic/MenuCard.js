import React from 'react'

function MenuCard() {
  return (
    <>
      <div className="card-container">
        <div className="card">
            <div className="card-body">
                <span className='card-number card-circle subtle'>1</span>
                <span className='card-author subtle'>Breakfast</span>
                <span className='card-description subtle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ullam vitae quasi voluptas beatae maxime, sequi eveniet ducimus neque iusto quidem nam eum obcaecati! Earum?</span>
                <div className="card-read">Read</div>
            </div>
            <img src="https://images.pexels.com/photos/19571065/pexels-photo-19571065/free-photo-of-palm-trees-against-sky.jpeg" alt="images" className='card-media' />
            <span className='card-tag subtle'>Order now</span>
        </div>
      </div>
    </>
  )
}

export default MenuCard
