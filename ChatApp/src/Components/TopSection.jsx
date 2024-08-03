import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoVideocamOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { VscSearch } from "react-icons/vsc";
// THIS SECTION DESCRIBES THE TOP VIEW OF MY CHAT BOT THAT IS THE PROFILE PIC, NAME, VIDEOCALL, NORMALCALL and SEARCH OPTION  OF CHAT APPLICATION
const TopSection = () => {
  return (
    <div className='mainsection'>
        <div className='section1'>
            <div className='one increase'>
                {/* profile Section */}
            <p className='pic'><CgProfile /></p>
            </div>
            <div className='one'>
                {/* Name Section */}
                <p className = "increase">Chat Bot</p>
            </div>
        </div>
        <div className='section2 d-flex flex-row'>
            <div className='one'>
                {/* VideoCall Section */}
                <p className = "increase roundup"><IoVideocamOutline /></p>
            </div>

            <div className='one'>
                {/* Call Section */}
                <p className = "increase roundup"><IoCallOutline /></p>
            </div>

            <div className='one'>
                {/* Search Option Section */}
                <p className = "increase roundup"><VscSearch /></p>
            </div>
        </div>
    </div>
  )
}

export default TopSection