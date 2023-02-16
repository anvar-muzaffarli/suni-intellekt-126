import React from 'react'

const Award = ({mukafatinBasligiProps, mukafatinShekliProps, mukafatinMetniProps}) => {
  return (
    <div className='col-12 col-md-6 col-lg-2'>
    <div class="cart" >
    <img src={mukafatinShekliProps} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{mukafatinBasligiProps}</h5>
      <p class="card-text">{mukafatinMetniProps}</p>
    </div>
  </div>
    </div>
  )
}

export default Award