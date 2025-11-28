import React, { useState } from "react";
import { useVehicles } from "../hooks/useVehiclesContext";
import { Vehicle } from "../services/VehiclesService";

export default function CadastroVeiculo() {
  const { addVehicle } = useVehicles();
  const [form, setForm] = useState({ modelo: "", placa: "", ano: "", capacidade: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function salvar() {
    const v: Vehicle = { id: crypto.randomUUID(), ...form };
    addVehicle(v);
    alert("Veículo cadastrado!");
    window.location.href = "/meus-veiculos";
  }

  return (
    <div style={{ 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f5f6fa"
    }}>
      <div style={{
        width: "350px",
        padding: "25px",
        borderRadius: "12px",
        background: "white",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
          Cadastro de Veículo
        </h2>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ fontWeight: "bold", color: "#444" }}>Modelo</label>
          <input 
            name="modelo"
            value={form.modelo}
            onChange={handleChange}
            placeholder="Ex: Mercedes Actros"
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ fontWeight: "bold", color: "#444" }}>Placa</label>
          <input 
            name="placa"
            value={form.placa}
            onChange={handleChange}
            placeholder="Ex: ABC-1234"
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ fontWeight: "bold", color: "#444" }}>Ano</label>
          <input 
            name="ano"
            value={form.ano}
            onChange={handleChange}
            placeholder="Ex: 2020"
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ fontWeight: "bold", color: "#444" }}>Capacidade</label>
          <input 
            name="capacidade"
            value={form.capacidade}
            onChange={handleChange}
            placeholder="Ex: 30 toneladas"
            style={inputStyle}
          />
        </div>

        <button
          onClick={salvar}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            background: "#0066ff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "0.3s"
          }}
          onMouseOver={(e) => e.currentTarget.style.background = "#0052cc"}
          onMouseOut={(e) => e.currentTarget.style.background = "#0066ff"}
        >
          Salvar
        </button>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "14px",
  marginTop: "4px"
};
