import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'
import RequestForm from './routes/RequestForm'
import DriverProfile from './routes/DriverProfile'
import History from './routes/History'
import DriverDashboard from './routes/DriverDashboard'
import MeusFretes from './routes/MeusFretes'
import MeusVeiculos from './routes/MeusVeiculos'
import EditarVeiculo from './routes/EditarVeiculo'
import CadastroVeiculo from './routes/CadastroVeiculo'

export default function App(){
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<Layout><DriverDashboard/></Layout>} />
import MeusFretes from \'./routes/MeusFretes\'
      <Route path="/perfil" element={<Layout><DriverProfile/></Layout>} />
      <Route path="/historico" element={<Layout><History/></Layout>} />
      <Route path="/fretes" element={<Layout><Home/></Layout>} />
      <Route path="/pedido" element={<Layout><RequestForm/></Layout>} />
          <Route path="/meus-fretes" element={<Layout><MeusFretes/></Layout>} />
          <Route path="/cadastro-veiculo" element={<Layout><CadastroVeiculo/></Layout>} />
          <Route path="/meus-veiculos" element={<Layout><MeusVeiculos/></Layout>} />
      <Route path="/editar-veiculo/:id" element={<Layout><EditarVeiculo/></Layout>} />
    </Routes>
  )
}