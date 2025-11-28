import React from 'react'

export default function DriverProfile(){
  return (
    <>
      <div className="card" style={{display:'flex',gap:16,alignItems:'center'}}>
        <div style={{width:96,height:96,borderRadius:16,background:'linear-gradient(135deg,var(--primary),var(--navy))'}}/>
        <div>
          <h2 style={{margin:0}}>João da Silva</h2>
          <div className="small">Rating: ★★★★☆</div>
          <div style={{marginTop:8}}>CNH: <strong>AB123456</strong></div>
        </div>
        <div style={{marginLeft:'auto'}}>
          <button className="btn">Editar Perfil</button>
        </div>
      </div>

      <div style={{marginTop:16}} className="card">
        <h3>Documentos</h3>
        <div className="small">CNH, ANTT e comprovantes carregados.</div>
      </div>
    </>
  )
}