import React,{useState} from 'react'

export default function RequestForm(){
  const [from,setFrom]=useState('')
  const [to,setTo]=useState('')
  const [desc,setDesc]=useState('')

  const submit=(e:any)=>{
    e.preventDefault()
    const req={from,to,desc,date:new Date().toISOString()}
    const store=JSON.parse(localStorage.getItem('freteja_requests')||'[]')
    store.push(req)
    localStorage.setItem('freteja_requests', JSON.stringify(store))
    alert('Solicitação enviada!')
  }

  return (
    <div style={{maxWidth:720}}>
      <div className="card">
        <h2>Solicitar Serviço</h2>
        <form onSubmit={submit} style={{display:'grid',gap:8}}>
          <input placeholder="Local de coleta" value={from} onChange={e=>setFrom(e.target.value)}/>
          <input placeholder="Local de entrega" value={to} onChange={e=>setTo(e.target.value)} />
          <textarea placeholder="Descrição" value={desc} onChange={e=>setDesc(e.target.value)} />
          <div style={{display:'flex',justifyContent:'flex-end'}}>
            <button className="btn primary" type="submit">Enviar Solicitação</button>
          </div>
        </form>
      </div>
    </div>
  )
}