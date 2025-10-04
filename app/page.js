"use client"
import Link from "next/link"

export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🏨 Hotel de Mascotas</h1>
      <p>Sistema de gestión</p>
      <ul>
        <li><Link href="/propietarios">📋 Propietarios</Link></li>
        <li><Link href="/mascotas">🐶 Mascotas</Link></li>
        <li><Link href="/vacunas">💉 Vacunas</Link></li>
      </ul>
    </div>
  )
}
