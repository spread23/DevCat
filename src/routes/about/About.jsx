import React from 'react'

import './about.css'
import aboutMe from '../../assets/aboutMe.jpg'
import tec from '../../assets/tec.jpg'
import software from '../../assets/software.jpg'
import games from '../../assets/games.jpg'

export const About = () => {
    return (
        <>
            <div className='about-container'>
                <div className='about-info'>
                    <div className='about-image'>
                        <img className='aboutMe' src={ aboutMe } alt="about-me" />
                    </div>
                    <div className='info'>
                        <h3 className='title-about'>Acerca de mi</h3>
                        <h5 className='description-about'>Soy desarrollador de software, tanto 
                            back-end como front-end, apasionado por 
                            la tecnologia y el conocimiento, aquí te 
                            comparto algunas de las tecnologías con las
                            que trabajo y algunos de mis trabajos. 
                        </h5>
                        <p></p>
                    </div>
                </div>
                <div className='tecs'>
                    <h2 className='title-tec'>Front-end</h2>
                    <img className='image-tec' src={ tec } alt="image-tec" />
                    <p className='description-tec'>
                        Para el front-end, suelo utilizar una tecnología bastante
                        útil, que es REACT JS, nos permite desarrollar sitios web
                        reactivos, las famosas SPA, donde la experiencia de usuario
                        es bastante agradable sin necesidad de recargar la página.
                    </p>
                </div>

                <div className='tecs-back'>
                    <h2 className='title-tec'>Back-end</h2>
                    <img className='image-tec' src={ software } alt="image-tec" />
                    <p className='description-tec'>
                        Para el back-end trabajo con dos tecnologías especificas,
                        que son: Express js y nest js, son dos tecnologías que utilizan
                        Node.js para correr aplicaciones del lado del back, se usan
                        para crear software totalmente escalable y que pueda tener una 
                        respuesta bastante rapida.
                    </p>
                </div>

                <div className='tecs'>
                    <h2 className='title-tec'>Video games</h2>
                    <img className='image-tec' src={ games } alt="image-tec" />
                    <p className='description-tec'>
                        Siempre me ha gustado y llamado la atención el 
                        desarrollo de videojuego, lo he hecho de manera
                        totalmente autodidacta utilizando una tecnología
                        llamada PYGAME, que usa el lenguaje de programación 
                        python.
                    </p>
                </div>
            </div>
        </>
    )
}