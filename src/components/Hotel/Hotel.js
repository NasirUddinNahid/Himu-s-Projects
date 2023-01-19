import React from 'react';
import './Hotel.css';
import shamolBangla from '../../images/shamolBangla.jpg';
import divineEco from '../../images/divineEco.jpg';
import silverCastle from '../../images/silverCastle.jpg';
import joarEcoCottage from '../../images/joarEcoCottage.jpg';
const Hotel = () => {
    return (
        <>
            <h1>Hotels</h1>
            <div className="mainSection">

                <div className="contentBox">
                    <p>
                        The multi-functional Shamol Bangla resort covering 8 bigha land, consisting of modern building complexes of differential heights with captivating natural and architectural view & fantastic lighting arrangement, village cottages, attractive green landscape with ceramic sitting arrangement and ceramic paved road, situated beside Ati-Kalatia Bazar road/Keranigonj, Dhaka, surrounded by pure Bangladeshi village, encircled by high boundary wall ensuring privacy and security by constant surveillance of CCTVs and professional security guards, is specially designed for Female, family and children get-together.
                    </p>
                </div>
                <div className="imageContainer">
                    <img src={shamolBangla} alt="" />
                </div>
            </div>

            <div className="mainSection">


                <div className="imageContainer">
                    <img src={silverCastle} alt="" />
                </div>
                <div className="contentBox">
                    <p>
                        The multi-functional Shamol Bangla resort covering 8 bigha land, consisting of modern building complexes of differential heights with captivating natural and architectural view & fantastic lighting arrangement, village cottages, attractive green landscape with ceramic sitting arrangement and ceramic paved road, situated beside Ati-Kalatia Bazar road/Keranigonj, Dhaka, surrounded by pure Bangladeshi village, encircled by high boundary wall ensuring privacy and security by constant surveillance of CCTVs and professional security guards, is specially designed for Female, family and children get-together.
                    </p>
                </div>
            </div>

            <div className="mainSection">

                <div className="contentBox">
                    <p>
                        The multi-functional Shamol Bangla resort covering 8 bigha land, consisting of modern building complexes of differential heights with captivating natural and architectural view & fantastic lighting arrangement, village cottages, attractive green landscape with ceramic sitting arrangement and ceramic paved road, situated beside Ati-Kalatia Bazar road/Keranigonj, Dhaka, surrounded by pure Bangladeshi village, encircled by high boundary wall ensuring privacy and security by constant surveillance of CCTVs and professional security guards, is specially designed for Female, family and children get-together.
                    </p>
                </div>
                <div className="imageContainer">
                    <img src={divineEco} alt="" />
                </div>
            </div>

            <div className="mainSection">

                <div className="imageContainer">
                    <img src={joarEcoCottage} alt="" />
                </div>
                <div className="contentBox">
                    <p>
                        The cottage was the cutest one. However there was no electricity, we relied on solar power to recharge mobile. There was table fan in the room. but the weather was cool as it was raining. I loved the food they gave. It was Vetki Fish, Shrimp fry and fresh vegetables. I loved the traditional breakfast with ruti and vegetables. In the evening they gave us some seasonal fruits which were also very good.                    </p>
                </div>
            </div>


        </>
    );
};

export default Hotel;