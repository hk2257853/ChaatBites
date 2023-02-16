import react from 'react';
import '../Css/bcard.css'
function Bcards(){
    return (
        <>
        <div classNameName="container">
            <div classNameName="d-flex">
            <div class="card" style="width: 18rem;">
                <div class="food-image">
                    <img src="hero.png" class="card-img-top" alt="..."/>
                </div>

                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Rs 100</a>

                </div>
            </div>
            </div>
        </div>

        </>

    )
}

export default Bcards;