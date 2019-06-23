import React from 'react'

export default function BookingInfoHours() {
    return (
        <div className='BookingInfoItem BookingInfo-Hours' id='Booking-Info'>

            <h5 className='Booking-LandingInfo-ItemTitle' id='Booking-LandingInfo-ItemTitle'>Working Hours</h5>
            <div className='Booking-HoursGridWrap'>
                <div className='Booking-Hours-Row'>
                    <p className=' Booking-LandingInfo-ItemText Booking-Hours-Days' id='Booking-LandingInfo-ItemText'>Monday - Thursday</p>
                    <p className=' Booking-LandingInfo-ItemText Booking-hours-Times' id='Booking-LandingInfo-ItemText'>12pm - 10pm</p>
                </div>
                <div className='Booking-Hours-Row'>
                    <p className=' Booking-LandingInfo-ItemText Booking-Hours-Days' id='Booking-LandingInfo-ItemText'>Friday - Saturday</p>
                    <p className=' Booking-LandingInfo-ItemText Booking-hours-Times' id='Booking-LandingInfo-ItemText'>2pm - 12am</p>
                </div>
                <div className='Booking-Hours-Row'>
                    <p className=' Booking-LandingInfo-ItemText Booking-Hours-Days' id='Booking-LandingInfo-ItemText'>Sunday</p>
                    <p className=' Booking-LandingInfo-ItemText Booking-hours-Times' id='Booking-LandingInfo-ItemText'>10am - 4pm</p>
                </div>
            </div>
            
        </div>
    )
}
