"use client"

import { useState } from "react"
import { supabase } from "../../lib/supabaseClient"

export default function Propietarios() {
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [mensaje, setMensaje] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    if (!nombre.trim() || !telefono.trim()) {
      setMensaje("❌ Debes completar todos los campos")
      return
    }

    const { error } = await supabase
      .from("propietarios")
      .insert([{ nombre, telefono }])

    if (error) {
      setMensaje("❌ Error: " + error.message)
    } else {
      setMensaje("✅ Propietario agregado")
      setNombre("")
      setTelefono("")
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📋 Propietarios</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        /><br/>
        <input
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        /><br/>
        <button type="submit">Guardar</button>
      </form>
      <p>{mensaje}</p>
    </div>
  )
}
