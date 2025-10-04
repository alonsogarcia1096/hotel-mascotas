"use client"

import { useState } from "react"
import { supabase } from "../../lib/supabaseClient"

export default function Mascotas() {
  const [nombre, setNombre] = useState("")
  const [fecha, setFecha] = useState("")
  const [propietarioId, setPropietarioId] = useState("")
  const [mensaje, setMensaje] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    if (!nombre.trim() || !fecha.trim() || !propietarioId.trim()) {
      setMensaje("❌ Debes completar todos los campos")
      return
    }

    const { error } = await supabase
      .from("mascotas")
      .insert([{ nombre, fecha_nacimiento: fecha, propietario_id: propietarioId }])

    if (error) {
      setMensaje("❌ Error: " + error.message)
    } else {
      setMensaje("✅ Mascota agregada")
      setNombre("")
      setFecha("")
      setPropietarioId("")
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🐶 Mascotas</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre de la mascota"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        /><br/>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        /><br/>
        <input
          placeholder="ID del propietario"
          value={propietarioId}
          onChange={(e) => setPropietarioId(e.target.value)}
        /><br/>
        <button type="submit">Guardar</button>
      </form>
      <p>{mensaje}</p>
    </div>
  )
}
