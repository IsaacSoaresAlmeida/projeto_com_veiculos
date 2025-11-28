import React,{useState} from 'react'

export default function DriverDashboard(){
  const [jobs,setJobs]=useState([
    {id:1,title:'Mudança apartamento',earn:150,from:'Rua A',to:'Av. B',status:'pending'},
    {id:2,title:'Entrega rápida',earn:80,from:'Depósito X',to:'Loja Y',status:'completed'}
  ])

  const accept=(id:number)=> alert('Trabalho aceito! (simulação)')

  return (
    <div>
      <div className="card" style={{display:'flex',gap:16,alignItems:'center',justifyContent:'space-between'}}>
        <div>
          <h2 style={{margin:0}}>Painel do Motorista</h2>
          <div className="small">Resumo rápido das suas métricas</div>
        </div>
        <div style={{display:'flex',gap:12}}>
          <div className="card" style={{minWidth:140,textAlign:'center'}}>
            <div className="small">KM percorridos</div>
            <div style={{fontWeight:800,fontSize:20}}>4.512 km</div>
          </div>
          <div className="card" style={{minWidth:140,textAlign:'center'}}>
            <div className="small">Ganhos mês</div>
            <div style={{fontWeight:800,fontSize:20}}>R$ 8.420</div>
          </div>
        </div>
      </div>

      <h3 style={{marginTop:18}}>Fretes Disponíveis</h3>
      <div className="container-grid" style={{marginTop:10}}>
        {jobs.map(j=>(
          <div key={j.id} className="card">
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <div>
                <strong>{j.title}</strong>
                <div className="small">{j.from} → {j.to}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontWeight:800}}>R$ {j.earn}</div>
                <div className="small">Distância 12 km</div>
              </div>
            </div>

            <div style={{display:'flex',justifyContent:'space-between',marginTop:12}}>
              <button className="btn primary" onClick={()=>accept(j.id)}>Aceitar</button>
              <button className="btn" onClick={()=>alert('Detalhes')}>Ver detalhes</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}