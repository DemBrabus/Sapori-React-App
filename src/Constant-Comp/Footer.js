import React from 'react';
import DownArrow from '../Global-Comp/DownArrow';

export default function Footer() {

    



    return (
        <footer className='Footer' id='Footer'>

            <div className='Footer-InnerWrap' id='Footer-InnerWrap'>

                <h5 className='FooterItem' id='FooterItem'>64 Thompson St, New York, NY 10012 </h5>
                <h5 className='FooterItem'  id='FooterItem'>+1 (212) 878-6305</h5>
                <h5 className='FooterItem'  id='FooterItem'>Contact@Sapori.com</h5>

                <div className='Footer-ScrollWrap' id='Footer-ScrollWrap'>

                    <h5 className='Footer-ScrollText'>Scroll</h5>
                    <DownArrow />
                        

                </div>

            </div>
            
        </footer>
    )
}
