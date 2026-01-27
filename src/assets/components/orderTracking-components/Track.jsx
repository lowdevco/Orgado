import React from 'react'
import "../../css/trackOrder-css/track.css"


function Track() {
  return (
    <div>
      <div className='container track-order'>
        <div className='track-div'>
            <form className='d-flex gap-3'>
                <input
                 type="text" 
                 placeholder='Enter Your Order ID'
                 />
                <button type='submit'> Track Order </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Track
