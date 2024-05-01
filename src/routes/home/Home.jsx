import React from 'react'

import './home.css'
import businnes from '../../assets/businnes.jpg'
import tecnology from '../../assets/tecnology.jpg'
import programming from '../../assets/programming.jpg'

import Slider from './Corousel'

export const Home = () => {
    return (
        <>
            <section className='section-container'>
                <article className='article'>
                    <div className='image-article'>
                        <img className='businnes' src={ businnes } alt="article-image" />
                    </div>
                    <div className='description-article'>
                        <h2 className='title-article'>Que ofrece?</h2>
                        <p className='subtitle'>
                            DevCat te ofrece los mejores servicios en 
                            cuanto a desarrollo de software se refiere,
                            especialmente si se trata de sitios web o aplicaciones
                            moviles, ya sea que cuentes con una empresa que quieras
                            mostrar en internet o que tengas una idea que quieras 
                            desarrollar, DevCat te la hace realidad.
                        </p>
                    </div>
                </article>

                <article className='article'>
                    <div className='image-article'>
                        <img className='businnes' src={ tecnology } alt="article-image" />
                    </div>
                    <div className='description-article'>
                        <h2 className='title-article'>Tecnologías con las que trabaja</h2>
                        <p className='subtitle'>
                            DevCat está constantemente actualizando su stack de 
                            tecnologias, para ofrecerte el mejor servicio porsible,
                            Siendo totalmente autodidacta y tener la capacidad de 
                            adaptar las nuevas mejoras y tecnologias más avanzadas
                            a sus proyectos.
                        </p>
                    </div>
                </article>

                <article className='article'>
                    <div className='image-article'>
                        <img className='businnes' src={ programming } alt="article-image" />
                    </div>
                    <div className='description-article'>
                        <h2 className='title-article'>Que hace DevCat?</h2>
                        <p className='subtitle'>
                            DevCat está altamente preparado para abordar cualquier tipo
                            de proyecto, ya sea un sitio web totalmente básico, hasta un
                            software mas avanzado, aplicaciones moviles, chatbots para tu
                            negocio, ecommerce, etc.
                        </p>
                    </div>
                </article>

                <div className='works'>
                    <h1 className='works-title'>Algunos de los trabajos de DevCat</h1>
                    <div className='work-wrap'>
                        <Slider />
                    </div>
                </div>
            </section>
        </>
    )
}