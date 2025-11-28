
import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import MapSimulator from "../components/MapSimulator";


export default function Home(){
  return (
    <>
      <div className="card" style={{display:'flex',gap:12,alignItems:'center'}}>
        <div style={{flex:1}}>
          <h2 style={{margin:0}}>Encontre Motoristas</h2>
          <div className="small">Busque por rotas e veja motoristas disponíveis.</div>
        </div>
        <div style={{width:320}}>
          <input placeholder="Local de coleta" />
          <input placeholder="Local de entrega" style={{marginTop:8}}/>
          <div style={{display:'flex',justifyContent:'flex-end',marginTop:8}}>
            <button className="btn primary">Buscar</button>
          </div>
        </div>
      </div>

      <MapSimulator />
    </>
  )
}