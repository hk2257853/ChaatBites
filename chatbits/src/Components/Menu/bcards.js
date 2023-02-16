import react from 'react';
import '../Css/bcard.css'

function Bcards(){
    return (
        <>
        <div className="container">
            <div className="d-flex">
            <div className="card" >
                <div className="food-image">
                    <img src="hero.png" className="card-img-top" alt="..."/>
                </div>

                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" className="btn btn-primary">Rs 100</a>
                </div>
            </div>
            </div>
        </div>
        {/* style="width: 18rem;" */}
        </>

    )
}

export default Bcards;