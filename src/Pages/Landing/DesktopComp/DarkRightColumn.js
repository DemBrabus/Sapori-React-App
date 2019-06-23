import React from 'react';
import { Link } from 'react-router-dom';

export default function DarkColumn() {
    return (
        <div className='DarkRightColumn'>
            <div className='DarkRightColumn-InnerWrap' id='DarkRightColumn-InnerWrap'>

                <h2 className='LandingHeader' id='LandingHeader'>An Evening At Sapori's</h2>

                <p className='LandingDescription' id='LandingDescription'>Lorem ipsum dolor sit amet, his alia sanctus id, eam ea quis error. Eu mei aeque dissentiunt, mei an wisi elaboraret, cu nam utamur torquatos dissentiet. Ex has aeque primis facete, ea minim labitur euismod nam. No Mei lobortis principes.
                </p>

                
                
                <p className='LandingDescription' id='LandingDescription'> 
                Ad natum commodo hendrerit nec. Ut reque doctus debitis eos, et ius wisi illum laboramus, his in essent tamquam principes.
                </p>

                <button className='LandingReservationBtn'>

                    <Link to='/booking'>
                        <h4 className='LandingReservationLink'>Make a reservation</h4>
                        <div className='LandingReservationLinkUnderline'></div>
                    </Link>

                </button>
                
                
                <h5 className='Footer-CopyRight' id='Footer-CopyRight'>Sapori © 2019. All Rights Reserved</h5>


            </div>
        </div>
    )
}
