import React from 'react'

export default function ReservationForm() {
    return (
        <div className='ReservationForm' id='ReservationForm'>

            <form action='#' className='Form'>
                    <div className='Booking-FormRow' id='Booking-FormRow'>
                        <label for='/' className='FormLabel'>Name<span className="Span">*</span>:</label>
                        <input type='text' className='Booking-Input' id='fullName' name='fullName' placeholder='Name of party'></input>
                    </div>
                    <div className='Booking-FormRow' id='Booking-FormRow'>
                        <label for='/' className='FormLabel'>Email<span className="Span">*</span>:</label>
                        <input type='email' className='Booking-Input' id='email' name='email' placeholder='Email'></input>
                    </div>
                    <div className='Booking-FormRow' id='Booking-FormRow'>
                        <label for='/' className='FormLabel'>Phone<span className="Span">*</span>:</label>
                        <input type='phone' className='Booking-Input' id='Phone' name='Phone' placeholder='888-888-8888'></input>
                    </div>
                    <div className='Booking-FormRow' id='Booking-FormRow'>
                        <label for='/' className='FormLabel'>Party Size<span className="Span">*</span>:</label>
                        <input type='number' className='Booking-Input' id='guests' name='guests' placeholder='Number of guests'></input>
                    </div>
                    <div className='Booking-FormRow' id='Booking-FormRow'>
                        <label for='/' className='FormLabel'>Date<span className="Span">*</span>:</label>
                        <input type='date' className='Booking-Input' id='date' name='date' placeholder='00/00/00'></input>
                    </div>
                    <div className='Booking-FormRow' id='Booking-FormRow'>
                        <label for='/' className='FormLabel'>Time<span className="Span">*</span>:</label>
                        <input type='time' className='Booking-Input' id='' name='' placeholder=''></input>
                    </div>

                    <div className='Booking-BookingSetUp-Radio'>
                        <label for='promotion' className='Booking-BookingSetUp-Radio-Text'>Receive news and promotion emails</label>
                        <input type='checkbox' id='Promotion' name='promotion' value='promotion'></input>
                    </div>
                    <div className='Booking-BookingSetUp-Radio'>
                         <label for='notification' className='Booking-BookingSetUp-Radio-Text'>Send me SMS reminder for reservation</label>
                        <input type='checkbox' id='notification' name='notification' value='notification'></input>
                    </div>

                    <button type='submit' className='Booking-SubmitBtn' id='Booking-SubmitBtn'>
                        <h5 className='Booking-SubmitBtn-Text'>Submit Reservation</h5>
                    </button>
                </form>
            
        </div>
    )
}
