import { WiDirectionUpRight } from 'react-icons/wi';
import { BiBath, BiBed } from "react-icons/bi";
import { SlShareAlt } from "react-icons/sl";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { GiSelfLove } from "react-icons/gi";
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function FirstSlide({image}) {
    const location = useLocation();
    const isProperty = location.pathname === '/allproperties'
    return (
        <div className={isProperty ?`h-[400px]` : `h-[495px]`}>
            <div className='md:flex gap-3 pt-20 md:pt-0 justify-center items-center h-full md:px-16' style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className='md:w-1/2 px-6 md:p-4 flex justify-center items-center'>
                    <div className={`md:w-3/4 text-center ${isProperty ? `md:text-center` : `md:text-left`}`}>
                        <h2 className='text-3xl md:text-5xl text-white font-bold'>Get Your Dream <br className='hidden md:flex' /> Home</h2>
                        <p className='text-sm text-white mt-1'>From as low as $20 per day with limited time offer discounts</p>
                        <div className={`flex justify-center ${ isProperty ? `md:justify-center` : `md:justify-start`}`}>
                            <button className='bg-[#EB6753] text-white px-6 py-2 rounded-lg font-semibold mt-3 flex justify-center items-center'><span className='relative pr-3'>View Details<WiDirectionUpRight className='text-3xl absolute -right-4 top-0'></WiDirectionUpRight></span> </button>
                        </div>
                    </div>
                </div>
                <div className={isProperty ? `hidden` : `md:w-1/2 md:flex px-10 md:px-0 mt-3 md:mt-0 justify-center items-center`}>
                    <div className='md:w-1/2 bg-white rounded-lg p-3 space-y-2'>
                        <h2 className='bg-[#EB6753] text-white w-1/2 px-2 rounded-lg'>$2200 per / <br />mo</h2>
                        <h3 className='text-sm'>Buy your future home</h3>
                        <p className='text-sm text-gray-600'>New york city, CA, USA</p>
                        <div className='flex justify-between text-sm text-gray-700'>
                            <p className='flex justify-center items-center gap-1'><BiBed></BiBed>1 bed</p>
                            <p className='flex justify-center items-center gap-1'><BiBath />2 bath</p>
                            <p className='flex justify-center items-center gap-1'><SlShareAlt></SlShareAlt> 1200 sqft</p>
                        </div>
                        <hr />
                        <div className='flex justify-between text-sm text-gray-600'>
                            <p>For Rent</p>
                            <div className='flex justify-between items-center gap-4'>
                                <p><SlShareAlt></SlShareAlt></p>
                                <p><LiaExternalLinkSquareAltSolid></LiaExternalLinkSquareAltSolid></p>
                                <p><GiSelfLove></GiSelfLove></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
FirstSlide.propTypes = {
    image:PropTypes.string
}