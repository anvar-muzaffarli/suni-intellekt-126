import React from 'react'

const Contact = () => {
  return (
    <>
    <h1 className='text-white text-center display-1 mt-5 '>Contact form</h1>
       <form className='container mt-5'>
       
     
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="text" className="form-control p-3" id="exampleFormControlInput1" placeholder="Adinizi daxil edin" />
  </div>

    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <button type='submit' className='btn btn-primary'>MURACIETI GONDER</button>

  </form>
  </>
  )
}

export default Contact