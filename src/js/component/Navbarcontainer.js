import React from 'react'
import Navbar from './Navbar'

const Navbarcontainer = () => {
  return (
    <div>
        <div className="container">
                <div className="row">
                    <div className="col-sm-2 col-md-2 col-lg-3">
                        <Navbar/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Navbarcontainer