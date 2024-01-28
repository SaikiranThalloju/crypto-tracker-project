import React from 'react'
import "./Styles.css"
import TemporaryDrawer from './drawer'
import Button from '../Button'
import { Link } from 'react-router-dom'
import CustomizedSwitches from '../ThemeButton'
import { ThemeProvider } from '../../ThemeContext'
import Footer from '../Footer/Index'
 
const Index = () => {
  return (
 
    <ThemeProvider>
    <div className='navbar'>
        <h1 className='logo'>CryptoTracker<span style={{color : "var(--blue)"}}>.</span></h1>
        <div className='links'>
            <CustomizedSwitches/>   
            <Link to ='/'>
                <p className='link'>Home</p>
            </Link>
            <Link to ='/comparePage'>
                <p className='link'>Compare</p>
            </Link>
            <Link to='/watchlist'>
                <p className='link'>Watchlist</p>
            </Link>
            <Link to ='/dashboardPage'>
                <Button text = {"Dashboard"}
                outlined={false}
                />
            </Link>     
        </div>
        <div className='mobile-drawer'>
            <TemporaryDrawer/>
        </div>
        </div>
    </ThemeProvider>
   
  )
}

export default Index
