import React from 'react'
import "./styles.css"
import Button from '../../Common/Button'
import  Phone  from '../../../assets/phone 1.png'
import  gradient  from '../../../assets/gradient 1.png'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import { RWebShare } from "react-web-share";
function MainComponent() {
  return (
    <div className='flex-info'>
        <div className='left-component'>
            <motion.h1 className='crypto-tracker-heading'
            initial = {{opacity : 0,y : 50}}
            animate = {{opacity : 1 , y :0}}
            transition={{duration:0.5}} 
            >Track Crypto</motion.h1>
            <motion.h1 className='real-time-heading'
            initial = {{opacity : 0,y : 50}}
            animate = {{opacity : 1 , y :0}}
            transition={{duration:0.5,delay : 0.5}} 
            >Real Time.</motion.h1>
            <motion.p 
            className='info-text'
            initial = {{opacity : 0,y : 50}}
            animate = {{opacity : 1 , y :0}}
            transition={{duration:0.5,delay : 0.75}} >Track Crypto through a public api in real time.visit the dashboard to do so!</motion.p>
            

            <motion.div className='btn-flex'
            initial = {{opacity : 0,x : 50}}
            animate = {{opacity : 1 , x :0}}
            transition={{duration:0.5,delay : 1.5}}>
            {/* <Button text={"Dashboard"}/> */}
            <Link to = '/dasboardPage'><Button text={"Dasboard"}/></Link>
            <RWebShare
            data={{
              text: "Crypto Dashboard made using React JS.",
              url: "https://crypto-dashboard-dec.netlify.app/",
              title: "CryptoDashboard.",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button text="Share App" outlined={true} />
          </RWebShare>

        </motion.div>
        </div>
        <div className='phone-gradient'>
          <motion.img src= {Phone} className='iphone-img'
          initial = {{y:-10}}
          animate = {{y:10}}
          transition = {{
            type : "smooth",
            repeatType: "mirror",
            duration : 2,
            repeat:Infinity
          }}
          />
          <img src= {gradient} className='gradient'/>

        </div>
    
    </div>
       
  )
}

export default MainComponent

