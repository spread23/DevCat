import React from 'react'

import './home.css'
import businnes from '../../assets/businnes.jpg'

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
            </section>
        </>
    )
}