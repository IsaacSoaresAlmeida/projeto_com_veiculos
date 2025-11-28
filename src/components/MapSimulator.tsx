
import React, {useEffect, useState} from 'react'

export default function MapSimulator({start='Coleta',end='Entrega'}){
  const [pos,setPos]=useState(0)

  useEffect(()=>{
    const t=setInterval(()=> setPos(p=> Math.min(100,p+10)), 1000)
    return ()=>clearInterval(t)
  },[])

  return (
    <div className="card">
      <div style={{fontSize:14,fontWeight:700}}>Rastreamento (Simulação)</div>
      <div className="small">{start} → {end}</div>

      <div style={{height:12,background:'#e6eefc',borderRadius:6,marginTop:8}}>
        <div style={{
          height:'100%',
          width:pos+'%',
          background:'linear-gradient(90deg,var(--blue),var(--orange))',
          borderRadius:6
        }}/>
      </div>

      <div className="small" style={{marginTop:8}}>{pos}%</div>
    </div>
  )
}
