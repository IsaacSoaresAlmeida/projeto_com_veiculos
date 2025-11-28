
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  const logged = !!localStorage.getItem('freteja_user')

  return (
    <header className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div className="brand">FreteJá</div>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/request">Solicitar</Link>
          <Link to="/history">Histórico</Link>
          <Link to="/dashboard">Painel</Link>
          {logged ? <Link to="/login" onClick={()=>localStorage.removeItem('freteja_user')}>Sair</Link> 
                  : <Link to="/login">Entrar</Link>}
        </nav>
      </div>
    </header>
  )
}
