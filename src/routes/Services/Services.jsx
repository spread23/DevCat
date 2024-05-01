import React from 'react'

import './services.css'
import cea from '../../assets/cea.jpg'
import ott from '../../assets/ott.jpg'
import eil from '../../assets/eil.jpg'
import chatbot from '../../assets/chatbot.jpg'

export const Services = () => {
    return (
        <>
            <section className='service-container'>
                <h1>Proyectos</h1>
                <article className='service'>
                    <div className='service-info'>
                        <h3 className='service-title'>Cea los profesionales</h3>
                        <img className='image-service' src={ cea } alt="service-image" />
                        <p className='description-service'>
                            Este pryecto es un sitio web totalmente informativo,
                            con varias secciones donde se muestra la informacion de la 
                            empresa, cuenta con una seccion donde las personas pueden
                            calificar los servicios de la misma, y el sitio puede administrar
                            estas calificaciones o algun tipo de queja o reclamo y darle solución.
                            Las tecnologias que se usaron fueron: React js, Node js, Express js, MongoDb.
                        </p>
                    </div>
                </article>

                <article className='service-white'>
                    <div className='service-info'>
                        <h3 className='service-title'>Ofrece tu talento</h3>
                        <img className='image-service' src={ ott } alt="service-image" />
                        <p className='description-service'>
                            Este pryecto es una aplicación web, que cuenta con 
                            varias secciones, tanto como login, como chatbot,
                            es una plataforma para encontrar empleo ya sea que estes en 
                            busqueda de uno, o para encontrar trabajadores ya sea que necesites uno.
                            Las tecnologias que se usaron fueron: React js, Node js, Express js, MongoDb.

                        </p>
                    </div>
                </article>

                <article className='service'>
                    <div className='service-info'>
                        <h3 className='service-title'>Eil Colombia</h3>
                        <img className='image-service' src={ eil } alt="service-image" />
                        <p className='description-service'>
                            Este pryecto es un sitio web totalmente informativo, cuenta con
                            varias secciones en las cuales se encuentra la muestra de productos
                            y sus respestivas descripciones, también cuenta con una parate totalmente
                            administrativa donde se pueden crear, eliminar, obtener o actualizar productos.
                            Las tecnologias que se usaron fueron: React js, Node js, Express js, MongoDb.
                        </p>
                    </div>
                </article>

                <article className='service-white'>
                    <div className='service-info'>
                        <h3 className='service-title'>Chatbot para recursos humanos</h3>
                        <img className='image-service' src={ chatbot } alt="service-image" />
                        <p className='description-service'>
                            Este chatbot esta creado para responder preguntas relacionadas
                            con recursos humanos, cuenta con un fine-tuning con mas de 100 preguntas
                            sobre recursos humanos, utiliza la pai de OpenAi.
                            Las tecnologias que se usaron fueron: React js, Node js, Express js, MongoDb
                            y socket.io.
                        </p>
                    </div>
                </article>
            </section>
        </>
    )
}