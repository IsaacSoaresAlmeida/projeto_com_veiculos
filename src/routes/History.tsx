import React from 'react'

export default function History(){
  const list = JSON.parse(localStorage.getItem('freteja_requests')||'[]')
  return (
    <>
      <div className="card"><h2>Histórico</h2></div>
      {list.length===0 && <div className="card">Nenhuma solicitação.</div>}
      {list.map((r:any,idx:number)=>(
        <div key={idx} className="card">
          <strong>{r.from} → {r.to}</strong>
          <div className="small">{r.desc}</div>
        </div>
      ))}
    </>
  )
}