import { useEffect, useState } from "react";
import './Css/parking.css'
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
            <section className="sec1">
                <div className="parkingLot">
                    <div className="anotations">
                        <div className="zone btn-danger">Zone 1</div>
                        <div className="zone btn-danger">Zone 2</div>
                        <div className="zone btn-danger">Zone 3</div>
                        <div className="zone btn-danger">Zone 4</div>
                        <div className="zone btn-danger">Zone 5</div>
                    </div>
                    {
                        parkData && parkData.map((parkData) => {
                            return (
                                parkData.occupied ? <button id={parkData.id} onClick={updateOccupied} className="ParkBoxes occupied"></button> : <button id={parkData.id} onClick={updateOccupied} className="ParkBoxes notoccupied"></button>
                            )
                        })
                    }
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