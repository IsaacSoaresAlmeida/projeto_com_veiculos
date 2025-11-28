import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useVehicles } from '../hooks/useVehiclesContext';
import { Vehicle } from '../services/VehiclesService';

export default function EditarVeiculo(){
  const { id } = useParams();
  const navigate = useNavigate();
  const { vehicles, updateVehicle } = useVehicles();
  const [form, setForm] = useState({modelo:'', placa:'', ano:'', capacidade:''});

  useEffect(() => {
    const v = vehicles.find((x:any) => x.id === id);
    if (v) setForm({modelo:v.modelo, placa:v.placa, ano:v.ano, capacidade:v.capacidade});
  }, [id, vehicles]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){ setForm({...form, [e.target.name]: e.target.value}); }

  function salvar(){
    const updated: Vehicle = { id: id || '', ...form };
    updateVehicle(updated);
    alert('Atualizado!');
    navigate('/meus-veiculos');
  }

  return (
    <div style={{padding:20}}>
      <h1>Editar Veículo</h1>
      <input name='modelo' value={form.modelo} onChange={handleChange} placeholder='Modelo' /><br/>
      <input name='placa' value={form.placa} onChange={handleChange} placeholder='Placa' /><br/>
      <input name='ano' value={form.ano} onChange={handleChange} placeholder='Ano' /><br/>
      <input name='capacidade' value={form.capacidade} onChange={handleChange} placeholder='Capacidade' /><br/>
      <button onClick={salvar}>Salvar</button>
    </div>
  );
}
