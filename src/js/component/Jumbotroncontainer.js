import React from 'react'
import Jumbotron from './Jumbotron'

const Jumbotroncontainer = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-13 col-md-7 col-lg-3">
                        <Jumbotron/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotroncontainer