import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'
import AppThemeProvider from './theme'
import { VehiclesProvider } from './hooks/useVehiclesContext'
import { AuthProvider } from './contexts/AuthContext';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <AuthProvider>
        <VehiclesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </VehiclesProvider>
      </AuthProvider>
    </AppThemeProvider>
  </React.StrictMode>
)
