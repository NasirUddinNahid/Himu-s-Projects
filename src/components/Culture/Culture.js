import React from 'react';
import traditionalDress from '../../images/traditionalDress.jpg';
import pohelaBoysakh from '../../images/newYear.jpg';
import religiousPeople from '../../images/religiousMans.jpg';
import traditionalFood from '../../images/traditionalFood.jpg';

const Culture = () => {
    return (
        <>
            <h1>Culture of Bangaladesh</h1>
            <div className="mainSection">

                <div className="contentBox">
                    <p>
                        Bangladeshi men wear lungi as casual wear (in rural areas). Due to the British influence during colonization, shirt-pant and suits are also very common. Bangladeshi women traditionally wear shari and young females are also often seen in shalwar kameez. It is worn during festive occasions, celebrations and weddings.
                    </p>
                </div>
                <div className="imageContainer">
                    <img src={traditionalDress} alt="" />
                </div>
            </div>

            <div className="mainSection">


                <div className="imageContainer">
                    <img src={pohelaBoysakh} alt="" />
                </div>
                <div className="contentBox">
                    <p>
                        The turning of the calendar in Bangladesh from the old year to the new is as much a purification ritual as it is an artistic one and an opportunity for usto experience a New Year's celebration like none other. The tradition of the old year is a custom of symbolically ending the old year through many traditional celebration events. I would like to say in the words of Anton K. Kressnig, "Let our New Year's resolution be this: we will be there for one another as fellow members of humanity, in the finest sense of the word."And navigating the streets of country on the Bengali New Year's celebrations also becomes a festive exercise.
                    </p>
                </div>
            </div>

            <div className="mainSection">

                <div className="contentBox">
                    <p>
                        Bangladesh is a predominantly Muslim country, and Islam’s adherents in Bangladesh celebrate the joyous festival of the two Eids, Eid-ul-Fitr, and Eid-ul-Azha, the month of Ramadan, Shab-e-Qadr, Shab-e-Barat etc. Hindus in Bangladesh celebrate Durga Puja,  Kali Puja and Janmastami. The Buddhists celebrate Buddho Purnima and the Christians Christmas. These are just a few of the religious festivals and feasts that Bangladeshis celebrate in their day to day life. National occasions also mark Bangladeshi life, and these include Independence Day, Victory Day, and the historic Language Martyr’s Day.
                    </p>
                </div>
                <div className="imageContainer">
                    <img src={religiousPeople} alt="" />
                </div>
            </div>

            <div className="mainSection">

                <div className="imageContainer">
                    <img src={traditionalFood} alt="" />
                </div>
                <div className="contentBox">
                    <p>
                        Traditional fast food is available at stalls in different spots of the area. From noon to evening, different music bands come to sing in the concert stage of the area. Youth with their friends come to the concert and celebrate with singing and dancing along with the famous singers of the nation.
                    </p>
                </div>
            </div>


        </>
    );
};

export default Culture;