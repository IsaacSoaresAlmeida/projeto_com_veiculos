import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { palette } from '../theme';
import { Button } from '@mui/material';

export default function Layout({children}:{children?:React.ReactNode}){
  return (
    <div style={{display:'flex', minHeight:'100vh', backgroundColor: 'var(--bg)'}}>
      <aside style={{
        width:260,
        padding:20,
        backgroundColor:'#fff',
        borderRight:'1px solid rgba(0,0,0,0.04)',
        boxShadow:'0 2px 8px rgba(3,10,18,0.04)'
      }}>
        <div style={{fontSize:22, fontWeight:700, color:palette.navy, marginBottom:18}}>FreteJá</div>
        <nav style={{display:'flex',flexDirection:'column', gap:12}}>
          <Link to="/" className="nav-link">Dashboard</Link>
          <Link to="/fretes" className="nav-link">Fretes Disponíveis</Link>
          <Link to="/meus-fretes" className="nav-link">Meus Fretes</Link>
          <Link to="/meus-veiculos" className="nav-link">Meus Veículos</Link>
          <Link to="/cadastro-veiculo" className="nav-link">Cadastro Veículo</Link>
          <Link to="/perfil" className="nav-link">Perfil</Link>
          <Link to="/suporte" className="nav-link">Suporte</Link>
        </nav>
        <div style={{marginTop:20}}>
          <Button variant="contained" color="primary" size="small" style={{borderRadius:12}}>Publicar Frete</Button>
        </div>
      </aside>

      <div style={{flex:1, display:'flex', flexDirection:'column'}}>
        <header style={{height:64, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 20px', background:'#fff', borderBottom:'1px solid var(--glass)'}}>
          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <button className="hamburger" aria-label="abrir menu">☰</button>
            <div style={{fontWeight:700, color:palette.grayDark}}>Bem-vindo, Motorista</div>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <div className="status-dot online" title="online"></div>
            <div className="avatar" />
          </div>
        </header>

        <main style={{padding:20}}>
          {children}
        </main>
      </div>
    </div>
  );
}