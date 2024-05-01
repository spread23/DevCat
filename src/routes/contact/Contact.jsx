import React from 'react'

import './contact.css'

export const Contact = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className='contact-container'>
                <div className='form-contact'>
                    <form onSubmit={handleOnSubmit} className='form'>
                        <div className='form-group'>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" name='name' placeholder='Nombre...' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="lastname">Apellido</label>
                            <input type="text" name='lastname' placeholder='Apellido...' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="description">Motivo de contacto</label>
                            <textarea type="text" name='description' placeholder='Motivo...' />
                        </div>
                        <button className='btn-contact'>Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}