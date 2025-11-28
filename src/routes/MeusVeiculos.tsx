import React from 'react';
import { useVehicles } from '../hooks/useVehiclesContext';

export default function MeusVeiculos(){
  const { vehicles, deleteVehicle } = useVehicles();

  return (
    <div style={{padding:20}}>
      <h1>Meus Veículos</h1>
      {vehicles.length === 0 && <p>Nenhum veículo cadastrado.</p>}
      {vehicles.map(v => (
        <div key={v.id} style={{border:'1px solid #ddd', padding:12, marginBottom:8}}>
          <strong>{v.modelo}</strong> <br/>
          Placa: {v.placa} <br/>
          Ano: {v.ano} <br/>
          Capacidade: {v.capacidade} <br/>
          <div style={{marginTop:8}}>
            <button onClick={() => window.location.href = `/editar-veiculo/${v.id}`} style={{marginRight:8}}>Editar</button>
            <button onClick={() => { if(confirm('Excluir veículo?')) deleteVehicle(v.id); }} style={{background:'#e74c3c', color:'#fff'}}>Excluir</button>
          </div>
        </div>
      ))}
    </div>
  );
}
