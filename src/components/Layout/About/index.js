    import { useEffect, useState } from 'react'
    import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    } from '@fortawesome/free-brands-svg-icons'
    import Loader from 'react-loaders'
    import AnimateLetters from '../AnimateLetters'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import './index.scss'

    const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
            <h1>
                <AnimateLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
                />
            </h1>
            <p>
            Hardworking programmer seeking experience and internships for Summer 2023. 
            Enthusiastic and passionate about designing websites and applications. 
            Always seeking new ways to innovate for the future.
            </p>
            <p align="LEFT">
            I am currently in my fourth year of attending Rutgers University Pursuing a major in Computer Science and Economics. 
            </p>
            <p>
            Outside of school I like to participate in extracurricular activities in subjects related to programming, finance, and economics.  Outside of my profession my hobbies consist of anime, basketball, fashion, gaming, learning, and traveling.
            </p>
            </div>

            <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                </div>
                <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
            </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
    }

    export default About