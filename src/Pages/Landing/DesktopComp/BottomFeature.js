import React from 'react';
import { Link } from 'react-router-dom';

export default function BottomFeature() {
    return (
        <div className='BottomFeature' id='BottomFeature'>
            <div className='BottomFeature-InnerWrap'>

                <div className=' Feature Feature1' id='Feature'>
                    <div className='FeatureImageFrame'>
                        <div className='FeatureImage FeatureImage1' id='FeatureImage'></div>
                    </div>

                    <div className='Feature-Description'>
                        <h4 className='Feature-Header' id='Feature-Header'>Signature Steaks</h4>
                        <p className='Feature-Text' id='Feature-Text'>Lorem ipsum dolor sit amet, his alia sanctus id, eam ea quis error. Eu mei aeque dissentiunt, mei an wisi elaboraret, cu nam utamur torquatos dissentiet. </p>
                        <button className='Feature-Button' id='Feature-Button'>
                            <Link to='/menu'><h6 className=' Feature-ButtonText' id='Feature-ButtonText'>View Menu</h6>
                            </Link>
                            <div className='Feature-ButtonUnderline'></div>
                        </button>
                    </div>

                </div>

                <div className=' Feature Feature2' id='Feature'>
                    <div className='FeatureImageFrame'>
                        <div className='FeatureImage FeatureImage2' id='FeatureImage'></div>
                    </div>

                    <div className='Feature-Description'>
                        <h4 className='Feature-Header' id='Feature-Header'>Award Wining Chefs</h4>
                        <p className='Feature-Text' id='Feature-Text'>Lorem ipsum dolor sit amet, his alia sanctus id, eam ea quis error. Eu mei aeque dissentiunt, mei an wisi elaboraret, cu nam utamur torquatos dissentiet. </p>
                        <button className='Feature-Button' id='Feature-Button2'>
                            <Link to='/ourstory'>
                                <h6 className=' Feature-ButtonText' id='Feature-ButtonText'>Our Story</h6>
                            </Link>
                            <div className='Feature-ButtonUnderline' id='Feature-ButtonUnderline2'></div>
                        </button>
                    </div>

                </div>


            </div>
        </div>
    )
}
