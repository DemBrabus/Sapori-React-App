import React from 'react';
import BookingInfoLocation from './BookingInfoLocation';
import BookingInfoHours from './BookingInfoHours';
import BookingInfoCompany from './BookingInfoCompany';
import ReservationForm from './ReservationForm';

export default function Booking() {
    return (
        <div className='Booking'>

                        <div className='Menu-BlockerTop'></div>

                        

            <div className='Booking-LandingSection' id='Booking-LandingSection'>

                <div className='BookingTopSpacer'></div>

                <div className='Booking-Hero'>
                    <h4 className='Booking-HeroTitle'>Reservations</h4>
                    <div className='Booking-HeroOnlineWrap'>
                        <h2 className='Booking-HeroSubtitle' id='Booking-HeroSubtitle'>Book Your Table</h2>
                        <button className='Booking-HeroBtn' href='#Booking-BookingSetUp'>
                            <h5 className='Booking-HeroBtnText' id='Booking-HeroBtnText'>Online Booking</h5>
                        </button>
                    </div>
                    
                </div>

                <div className='Booking-LandingInfo' id='Booking-LandingInfo'>

                    <BookingInfoLocation />
                        
                    <BookingInfoHours />

                    <BookingInfoCompany />
                    
                </div>
            </div>

                        
            <div className='Booking-BookingSetUp' id='Booking-BookingSetUp'>

                <div className='Booking-BookingSetUp-BorderTop' id='Booking-BookingSetUp-BorderTop'></div>

                <h4 className='Booking-BookingSetUp-Title'>Make a Reservations</h4>

                <ReservationForm />


                    <div className='Booking-BookingSetUp-BottomSpacer' id='Booking-BookingSetUp-BottomSpacer'></div>

            </div>
                        
                        
                        
                        
                        
                        
                        
                        <div className='Menu-BlockerBottom'></div>
            
        </div>
    )
}
