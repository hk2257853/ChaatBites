import { useEffect, useState } from "react";
import './Css/ParkingLayout.css'
import * as api from "../api"

const Parking = () => {
    const [parkData, setParkData] = useState()

    useEffect(() => {
        try {
            api.getParkingStatus()
                .then((res) => {
                    setParkData(res.data)
                })
        } catch (error) {
            console.log(error.message)
        }
    }, [])

    // update parking status (flip occupied)
    const updateOccupied = (e) => {
        try {
            const id = e.target.id

            const updatedData = parkData.map((parkData) => {
                if (parkData.id === id) {
                    return {
                        ...parkData,
                        occupied: !parkData.occupied
                    }
                } else {
                    return parkData
                }
            })

            setParkData(updatedData)
            api.updateParkingStatus(id, updatedData)
                .then((res) => {
                    console.log(res)
                })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <section class="conatiner d-flex justify-content-center align-item-center mt-1 flex-wrap">
                <div class="container d-flex flex-wrap">
                    <div class="container text-center headi ">
                        Car Parking Zone
                    </div>

                    <div class="container  d-flex justify-content-center align-item-center">
                        <table class="Tcolor">

                            <tr>
                                <td>
                                    <div class="topMArking" colspan="32"></div>
                                </td>
                            </tr>

                         
                            <tr>
                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>
                                <td>
                                    <div id="L1-1">L1-1</div>
                                </td>
                                <td>
                                    <div id="L1-2">L1-2</div>
                                </td>
                                <td>
                                    <div id="L1-3">L1-3</div>
                                </td>
                                <td>
                                    <div id="L1-4">L1-4</div>
                                </td>
                                <td>
                                    <div id="L1-5">L1-5</div>
                                </td>
                                <td>
                                    <div id="L1-6">L1-6</div>
                                </td>
                                <td>
                                    <div id="L1-7">L1-7</div>
                                </td>
                                <td>
                                    <div id="L1-8">L1-8</div>
                                </td>
                                <td>
                                    <div id="L1-9">L1-9</div>
                                </td>
                                <td>
                                    <div id="L1-10">L1-10</div>
                                </td>
                                <td>
                                    <div id="L1-11">L1-11</div>
                                </td>
                                <td>
                                    <div id="L1-12">L1-12</div>
                                </td>
                                <td>
                                    <div id="L1-13">L1-13</div>
                                </td>



                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>
                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>
                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>
                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>




                                <td>
                                    <div id="L2-1">L2-1</div>
                                </td>
                                <td>
                                    <div id="L2-2">L2-2</div>
                                </td>
                                <td>
                                    <div id="L2-3">L2-3</div>
                                </td>
                                <td>
                                    <div id="L2-4">L2-4</div>
                                </td>
                                <td>
                                    <div id="L2-5">L2-5</div>
                                </td>
                                <td>
                                    <div id="L2-6">L2-6</div>
                                </td>
                                <td>
                                    <div id="L2-7">L2-7</div>
                                </td>
                                <td>
                                    <div id="L2-8">L2-8</div>
                                </td>
                                <td>
                                    <div id="L2-9">L2-9</div>
                                </td>
                                <td>
                                    <div id="L2-10">L2-10</div>
                                </td>
                                <td>
                                    <div id="L2-11">L2-11</div>
                                </td>
                                <td>
                                    <div id="L2-12">L2-12</div>
                                </td>
                                <td>
                                    <div id="L2-13">L2-13</div>
                                </td>
                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>


                            </tr>


                            <tr>
                                <td colspan="14">
                                    <div class="noneParking lane">Lane-1</div>
                                </td>
                                <td colspan="4">
                                    <div class="noneParking lane"></div>
                                </td>
                                <td colspan="14">
                                    <div class="noneParking lane">Lane-2</div>
                                </td>
                            </tr>




                          
                            <tr>
                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>
                                <td>
                                    <div id="L3-1">L3-1</div>
                                </td>
                                <td>
                                    <div id="L3-2">L3-2</div>
                                </td>
                                <td>
                                    <div id="L3-3">L3-3</div>
                                </td>
                                <td>
                                    <div id="L3-4">L3-4</div>
                                </td>
                                <td>
                                    <div id="L3-5">L3-5</div>
                                </td>
                                <td>
                                    <div id="L3-6">L3-6</div>
                                </td>
                                <td>
                                    <div id="L3-7">L3-7</div>
                                </td>
                                <td>
                                    <div id="L3-8">L3-8</div>
                                </td>
                                <td>
                                    <div id="L3-9">L3-9</div>
                                </td>
                                <td>
                                    <div id="L3-10">L3-10</div>
                                </td>
                                <td>
                                    <div id="L3-11">L3-11</div>
                                </td>
                                <td>
                                    <div id="L3-12">L3-12</div>
                                </td>
                                <td>
                                    <div id="L3-13">L3-13</div>
                                </td>



                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>
                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>
                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>
                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>




                                <td>
                                    <div id="L4-1">L4-1</div>
                                </td>
                                <td>
                                    <div id="L4-2">L4-2</div>
                                </td>
                                <td>
                                    <div id="L4-3">L4-3</div>
                                </td>
                                <td>
                                    <div id="L4-4">L4-4</div>
                                </td>
                                <td>
                                    <div id="L4-5">L4-5</div>
                                </td>
                                <td>
                                    <div id="L4-6">L4-6</div>
                                </td>
                                <td>
                                    <div id="L4-7">L4-7</div>
                                </td>
                                <td>
                                    <div id="L4-8">L4-8</div>
                                </td>
                                <td>
                                    <div id="L4-9">L4-9</div>
                                </td>
                                <td>
                                    <div id="L4-10">L4-10</div>
                                </td>
                                <td>
                                    <div id="L4-11">L4-11</div>
                                </td>
                                <td>
                                    <div id="L4-12">L4-12</div>
                                </td>
                                <td>
                                    <div id="L4-13">L4-13</div>
                                </td>
                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>


                            </tr>


                            <tr>
                                <td colspan="14">
                                    <div class="noneParking lane">Lane-3</div>
                                </td>
                                <td colspan="4">
                                    <div class="noneParking lane"></div>
                                </td>
                                <td colspan="14">
                                    <div class="noneParking lane">Lane-4</div>
                                </td>
                            </tr>


                         
                            <tr>
                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>
                                <td>
                                    <div id="L5-1">L5-1</div>
                                </td>
                                <td>
                                    <div id="L5-2">L5-2</div>
                                </td>
                                <td>
                                    <div id="L5-3">L5-3</div>
                                </td>
                                <td>
                                    <div id="L5-4">L5-4</div>
                                </td>
                                <td>
                                    <div id="L5-5">L5-5</div>
                                </td>
                                <td>
                                    <div id="L5-6">L5-6</div>
                                </td>
                                <td>
                                    <div id="L5-7">L5-7</div>
                                </td>
                                <td>
                                    <div id="L5-8">L5-8</div>
                                </td>
                                <td>
                                    <div id="L5-9">L5-9</div>
                                </td>
                                <td>
                                    <div id="L5-10">L5-10</div>
                                </td>
                                <td>
                                    <div id="L5-11">L5-11</div>
                                </td>
                                <td>
                                    <div id="L5-12">L5-12</div>
                                </td>
                                <td>
                                    <div id="L5-13">L5-13</div>
                                </td>



                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>
                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>
                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>
                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>




                                <td>
                                    <div id="L6-1">L6-1</div>
                                </td>
                                <td>
                                    <div id="L6-2">L6-2</div>
                                </td>
                                <td>
                                    <div id="L6-3">L6-3</div>
                                </td>
                                <td>
                                    <div id="L6-4">L6-4</div>
                                </td>
                                <td>
                                    <div id="L6-5">L6-5</div>
                                </td>
                                <td>
                                    <div id="L6-6">L6-6</div>
                                </td>
                                <td>
                                    <div id="L6-7">L6-7</div>
                                </td>
                                <td>
                                    <div id="L6-8">L6-8</div>
                                </td>
                                <td>
                                    <div id="L6-9">L6-9</div>
                                </td>
                                <td>
                                    <div id="L6-10">L6-10</div>
                                </td>
                                <td>
                                    <div id="L6-11">L6-11</div>
                                </td>
                                <td>
                                    <div id="L6-12">L6-12</div>
                                </td>
                                <td>
                                    <div id="L6-13">L6-13</div>
                                </td>
                                <td>
                                    <div class="noneParkingArea"></div>
                                </td>


                            </tr>


                            <tr>
                                <td colspan="14">
                                    <div class="noneParking lane">Lane-5</div>
                                </td>
                                <td colspan="4">
                                    <div class="noneParking lane"></div>
                                </td>
                                <td colspan="14">
                                    <div class="noneParking lane">Lane-6</div>
                                </td>
                            </tr>

                            <tr>
                                <td colspan="14">
                                    <div class="noneParking lane w"></div>
                                </td>
                                <td colspan="4">
                                    <div class="noneParking lane">Entry Point</div>
                                </td>
                                <td colspan="14">
                                    <div class="noneParking lane w"></div>
                                </td>
                            </tr>

                        </table>
                </div>
            </div>



            </section>

            <section class="container d-flex justify-content-center align-item-center flex-wrap mt-5">
                <div class="col-4 col-sm-6 col-lg-4">
                    <div><strong>Price Scheme</strong></div>
                    <table class="Price">
                        <tr>
                            <th>Duration</th>
                            <th>Time</th>
                        </tr>

                        <tr>
                            <td>Rs. 10</td>
                            <td>1 Hr</td>
                        </tr>

                        <tr>
                            <td>Rs. 15</td>
                            <td>1.5 Hr</td>
                        </tr>

                        <tr>
                            <td>Rs. 20</td>
                            <td>2 Hr</td>
                        </tr>
                    </table>

                </div>
                <div class="col-5 text-center B-P-Pad col-sm-6 col-lg-5 ">
                    <h6>Timmings</h6>
                    <p>9:30 AM to 8:00 PM</p>
                    <div class="P-pad text-left">
                        <ol >
                            <li>Additional 30 Mins to clear off cars parked after specified time.</li>
                            <li>Ticket valid for specified amount of time.</li>
                            <li>Extra fees shall be liable if exceeded beyond time.</li>
                            <li>No smoking or vaping allowed in the parking lot.</li>
                            <li>Please do not leave valuable items visible in your parked vehicle.</li>
                            <li>No loud music or noise disturbances.</li>
                        </ol>
                    </div>


                </div>

                <div class="col-4 col-sm-10 col-lg-3 d-flex justify-content-center align-item-center mt-sm-5 justify-content-sm-center align-item-sm-center">
                    <div class="container sm-w-75">
                        <div class="row text-center">
                            <p>Pay now and download your ticket</p>
                        </div>
                        <div class="container d-flex justify-content-center align-item-center">
                            <button type="button" class="btn btn-primary m-1">Pay Now</button>
                            <button type="button" class="btn btn-danger m-1">Open Ticket Logs</button>
                        </div>
                    </div>
                </div>
            </section>



            
<section class="container mt-5">
    <div class="accordion mt-5" id="Steps">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Step 1
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>Check if parking slot available</strong> Look for the color coded system thst indicates the availability status of the parking slots. Typically, green means that the parking slot is avaiable, while red means that it is not
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Step 2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>Pay now or at the Counter</strong> Make the payment and reserve your parking slot or physically purchase the ticket at the parking center
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Step 3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>Download your E-ticket(If purchased online)</strong> E-ticket is used as a gate entrance permit and also as a valid proof of purchase
            </div>
          </div>
        </div>
      </div>
</section>


        </div>

    )
}

export default Parking;