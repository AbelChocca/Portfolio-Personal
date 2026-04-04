import React, { useState } from 'react'
import AnimatedDiv from './AnimatedDiv'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const [form, setForm] = useState({ name: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const mailtoLink = `mailto:abelchocca1010@gmail.com?subject=Contacto Portafolio de ${form.name}&body=${encodeURIComponent(form.message)}`
    window.location.href = mailtoLink
  }

  return (
    <AnimatedDiv>
      <div id="contactos" className="flex flex-col justify-center items-center mt-10 mb-20">
        <h1 className="font-mono text-2xl mb-6">Contacto</h1>

        <div className="flex gap-6 mb-8">
          <a href="https://www.linkedin.com/in/abel-chocca-060a31379/" target="_blank">
            <FaLinkedin size={40} className="hover:text-blue-600 transition-colors" />
          </a>
          <a href="https://github.com/AbelChocca" target="_blank">
            <FaGithub size={40} className="hover:text-gray-800 transition-colors" />
          </a>
          <FaEnvelope size={40} className="hover:text-red-600 cursor-pointer transition-colors" onClick={handleSubmit} />
        </div>

        {/* Formulario opcional */}
        <div className="flex flex-col gap-4 w-full max-w-md">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={form.name}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            value={form.message}
            onChange={handleChange}
            className="p-2 border rounded h-24"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
          >
            Enviar
          </button>
        </div>
      </div>
    </AnimatedDiv>
  )
}

export default Contact