import React from 'react'
import Award from './Award'

import mukafatMelumatlari from '../components/mukafatMelumatlari.json'

const AwardsContainer = () => {
  return (
    <div className='row mt-5 pt-5'>
        {
            mukafatMelumatlari.map(birMelumat => (
                <Award mukafatinBasligiProps={birMelumat.mukafatinAdi} mukafatinShekliProps = {birMelumat.mukafatinShekli} mukafatinMetniProps={birMelumat.mukafatinMetni}/>
            ))
        }
    </div>
  )
}

export default AwardsContainer