
import React from 'react'

export default function ServiceCard({ title, desc, onClick }:{
    title:string, desc:string, onClick:()=>void
}){
  return (
    <div className="card">
      <div className="flex" style={{justifyContent:'space-between'}}>
        <div>
          <div style={{fontWeight:700}}>{title}</div>
          <div className="small">{desc}</div>
        </div>
        <button className="btn" onClick={onClick}>Ver</button>
      </div>
    </div>
  )
}
