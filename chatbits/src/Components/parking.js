import './Css/parking.css'
const Parking = () => {
    return (
        <div>
            <section className="sec1">
                <div className="parkingLot">
                    <div className="anotations">
                        <div className="zone btn-danger">Zone 1</div>
                        <div className="zone btn-danger">Zone 2</div>
                        <div className="zone btn-danger">Zone 3</div>
                        <div className="zone btn-danger">Zone 4</div>
                        <div className="zone btn-danger">Zone 5</div>
                    </div>

                    <div className="ParkBoxes" id="p1">1</div>
                    <div className="ParkBoxes" id="p2">2</div>
                    <div className="ParkBoxes" id="p3">3</div>
                    <div className="ParkBoxes" id="p4">4</div>
                    <div className="ParkBoxes" id="p5">5</div>
                    <div className="ParkBoxes" id="p6">6</div>
                    <div className="ParkBoxes" id="p7">7</div>
                    <div className="ParkBoxes" id="p8">8</div>
                    <div className="ParkBoxes" id="p9">9</div>
                    <div className="ParkBoxes" id="p10">10</div>
                    <div className="ParkBoxes" id="p11">11</div>
                    <div className="ParkBoxes" id="p12">12</div>
                    <div className="ParkBoxes" id="p13">13</div>
                    <div className="ParkBoxes" id="p14">14</div>
                    <div className="ParkBoxes" id="p15">15</div>
                    <div className="ParkBoxes" id="p16">16</div>
                    <div className="ParkBoxes" id="p17">17</div>
                    <div className="ParkBoxes" id="p18">18</div>
                    <div className="ParkBoxes" id="p19">19</div>
                    <div className="ParkBoxes" id="p20">20</div>
                    <div className="ParkBoxes" id="p21">21</div>
                    <div className="ParkBoxes" id="p22">22</div>
                    <div className="ParkBoxes" id="p23">23</div>
                    <div className="ParkBoxes" id="p24">24</div>
                    <div className="ParkBoxes" id="p25">25</div>
                    <div className="ParkBoxes" id="p26">26</div>
                    <div className="ParkBoxes" id="p27">27</div>
                    <div className="ParkBoxes" id="p28">28</div>
                    <div className="ParkBoxes" id="p29">29</div>
                    <div className="ParkBoxes" id="p30">30</div>
                    <div className="ParkBoxeBelow">PARKING ZONE</div>
                </div>
            </section>

            <section className="sec2">
                <div className="detailsContainer">
                    <div className="actualdeets">
                        <div className="avaialble"></div>
                        <div className="CTNTT">Available</div>
                    </div>

                    <div className="actualdeets">
                        <div className="NOTavaialble"></div>
                        <div className="CTNTT">Not Available</div>
                    </div>

                    <div className="PriceDeets">
                        <div>Price: Rs. 20/- per hour</div>
                    </div>


                    </div>
                
            </section>

                    <section className="sec3">
                        <div className="sec3Cont">
                            <ul>
                                <h4>General Rules and Regulations</h4>
                                <li>No smoking or vaping allowed in the parking lot.</li>
                                <li>Please do not leave valuable items visible in your parked vehicle.</li>
                                <li>No loud music or noise disturbances.</li>
                                <li>No smoking or vaping allowed in the parking lot.</li>
                                <li>The parking lot assumes no responsibility for any damages or theft that may occur while parked.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="sec4"></section>

                </div>
        
                )
}

export default Parking;