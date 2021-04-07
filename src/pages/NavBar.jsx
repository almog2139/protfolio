
import { NavLink } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import WebIcon from '@material-ui/icons/Web';
import BarChartIcon from '@material-ui/icons/BarChart';
import SchoolIcon from '@material-ui/icons/School';
import EmailIcon from '@material-ui/icons/Email';
import React, { useEffect, useRef, useState } from 'react'

export const NavBar = () => {

    const [btnClass, setBtnClass] = useState(false)
    const [menuOpen, setMenuOpen] = useState(true)
    const onToggleBtn=()=>{
        setBtnClass(!btnClass)
        setMenuOpen(!menuOpen)
    }
    const onToggleMenuOpen=()=>{
        setMenuOpen(!menuOpen)
    }
  
        return <nav className="nav-bar flex column " >
           <header className="app-header">
            <label htmlFor="menu" onClick={onToggleBtn} className={(btnClass)?'hamburger-btn open':'hamburger-btn'}>
                <span/>
                <span/>
                <span/>
            </label>
            <input type="checkbox" name="menu" hidden/>

            <div className="about">
                <div className="flex column">
                <h1 className="name">Almog Balila</h1>
                <h1 className="name2">Almog</h1>
                <h1 className="name2">Balila</h1>

                </div>
                <p>Full Stack Developer</p>
            </div>

           </header>
           <div className={(!menuOpen&&btnClass)?'bgc':''} onClick={onToggleMenuOpen}>
            <ul className={(menuOpen)?'main-nav':'main-nav show'}>

                <li><a href="#about"><PersonIcon/> About</a> </li>      
                <li><a href="#skills"> <TrendingUpIcon className="experience"/> Experience</a></li>      
                <li><a href="#projects"><WebIcon className="proj"/> Projects</a></li>      
                <li><a href="#skills"><BarChartIcon className="skills"/> Skills</a></li>
                <li><a href="#education"><SchoolIcon className="education-icon"/> Education</a></li>
                <li><a href="#contact"><EmailIcon className="contact"/> Contact</a></li>
            </ul>
            </div>
        </nav>;
}