import React from 'react';
import './Transport.css';
import rail from '../../images/rail.jpg'
import waterways from '../../images/waterways.jpg'
import bus from '../../images/bus.jpg'
import car from '../../images/car.jpg'

const Transport = () => {
    return (
        <>
            <h1>Transports</h1>
            <div className="mainSection">

                <div className="contentBox">
                    <p>
                        The Bangladesh Railway provides an efficient service to places of interest such as Chattogram, Sylhet, Khulna, Mymensingh, Bogra, Rajshahi, Dinajpur starting from Dhaka. The inter-city Express Service is available to and from important cities at cheap fares.
                    </p>
                </div>
                <div className="imageContainer">
                    <img src={rail} alt="" />
                </div>
            </div>

            <div className="mainSection">


                <div className="imageContainer">
                    <img src={waterways} alt="" />
                </div>
                <div className="contentBox">
                    <p>
                        Country-Made boats are the most widely used carrier one can see in the river and rivulets. These carry passengers and merchandise on a large scale. The landscape of Bangladesh is dominated by about 250 rivers which flow essentially north-sourth. The alluvial flood plain formed by these rivers covers most of the country. Wherever there is a river and a village, a launch or steamer will ply for trade. A journey by Rocket Steamer service from Dhaka (Sadarghat) to Khulna, the gateway to Sundarbans is a rewarding experience.
                    </p>
                </div>
            </div>

            <div className="mainSection">

                <div className="contentBox">
                    <p>
                        Road transport in Bangladesh is a private sector affair operating predominantly in domestic routes. Rates are among the cheapest in the world. Express and non stop services are available to principal towns from Gabtoli, Saidabad and Mohakhai bus terminals in Dhaka. The Bangladesh Road Transport Corporation (BRTC) also maintains a countrywide network of bus services. Recently they have introduced Dhaka - Calcutta - Dhaka direct daily bus services via Benapole, Jessore.
                    </p>
                </div>
                <div className="imageContainer">
                    <img src={bus} alt="" />
                </div>
            </div>

            <div className="mainSection">

                <div className="imageContainer">
                    <img src={car} alt="" />
                </div>
                <div className="contentBox">
                    <p>
                        Private car hire service is available in Dhaka and some other major cities. Bangladesh Parjatan Corporation (BPC), a government organization, has a fleet of air-conditioned and non air-conditioned cars, microbuses and jeeps. Besides they offer transfer service for tourists between Dhaka airport and main city points or hotels.
                    </p>
                </div>
            </div>


        </>
    );
};

export default Transport;