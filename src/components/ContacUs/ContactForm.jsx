import React from 'react'

const ContactForm = () => {
  return (
    <form>
        <h1>CONTACTENOS</h1>
        <input type='text' name='name' id="" placeholder='Ingresar nombre completo'/>
        <input type='email' name='email' id="" placeholder='ejemplo@gmail.com'/>
        <input type='phone' name='phone' id="" placeholder='+54'/>
        <textarea name="message" id=''cols="30" rows="10" placeholder='Escribir consulta'/>
        <button type="submit">Enviar</button>
    </form>
  )
}

export default ContactForm