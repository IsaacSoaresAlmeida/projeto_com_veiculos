import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const nav = useNavigate()
  const submit=(e:any)=>{
    e.preventDefault()
    nav('/login')
    alert('Conta criada (simulação)')
  }

  return (
    <div style={{maxWidth:520,margin:'40px auto'}}>
      <div className="card">
        <h2>Registrar-se</h2>
        <form onSubmit={submit} style={{display:'grid',gap:8,marginTop:8}}>
          <input placeholder="Nome completo" />
          <input placeholder="E-mail" />
          <input placeholder="Senha" type="password" />
          <div style={{display:'flex',justifyContent:'flex-end'}}>
            <button className="btn primary">Criar Conta</button>
          </div>
        </form>
      </div>
    </div>
  )
}