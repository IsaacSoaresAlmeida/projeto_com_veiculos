import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const nav = useNavigate()
  const submit=(e:any)=>{
    e.preventDefault()
    localStorage.setItem('freteja_user', JSON.stringify({name:'Usuario'}))
    nav('/')
  }

  return (
    <div style={{maxWidth:480,margin:'40px auto'}}>
      <div className="card">
        <h2>Entrar</h2>
        <form onSubmit={submit} style={{display:'grid',gap:8,marginTop:8}}>
          <input placeholder="E-mail ou usuário" />
          <input placeholder="Senha" type="password" />
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <button className="btn primary">Entrar</button>
            <a href="/register">Criar conta</a>
          </div>
        </form>
      </div>
    </div>
  )
}