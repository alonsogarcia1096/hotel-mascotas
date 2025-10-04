"use client"

import { useState } from "react"
import { supabase } from "../../lib/supabaseClient"

export default function Vacunas() {
  const [mascotaId, setMascotaId] = useState("")
  const [nombre, setNombre] = useState("")
  const [fecha, setFecha] = useState("")
  const [mensaje, setMensaje] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    if (!mascotaId.trim() || !nombre.trim() || !fecha.trim()) {
      setMensaje("❌ Debes completar todos los campos")
      return
    }

    const { error } = await supabase
      .from("vacunas")
      .insert([{ mascota_id: mascotaId, nombre, fecha }])

    if (error) {
      setMensaje("❌ Error: " + error.message)
    } else {
      setMensaje("✅ Vacuna registrada")
      setMascotaId("")
      setNombre("")
      setFecha("")
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>💉 Vacunas</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="ID de la mascota"
          value={mascotaId}
          onChange={(e) => setMascotaId(e.target.value)}
        /><br/>
        <input
          placeholder="Nombre de la vacuna"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        /><br/>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        /><br/>
        <button type="submit">Guardar</button>
      </form>
      <p>{mensaje}</p>
    </div>
  )
}
