import LogoTitle from '../../../assets/images/logo-j.png';
import { Link } from 'react-router-dom';
import AnimateLetters from '../AnimateLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterrClass] = useState('text-animate')
    const nameArray = ['o', 'b', 'a', 'n', ' ', 'S', 'i', 'n', 'g', 'h',]
    const jobArray =['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.',]

    
    return (
        <>
            <div className= "container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={letterClass}>i,</span>
                    <br />
                    <span className={letterClass}>I</span>
                    <span className={letterClass}>'m</span>
                    <img src={LogoTitle} alt= "developer" />
                    <AnimateLetters letterClass={letterClass}
                    strArray= {nameArray}
                    idx={15} />
                    <br />
                    <AnimateLetters letterClass={letterClass}
                    strArray= {jobArray}
                    idx={22} />
                    </h1>
                    <h2>Fullstack Developer</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Home