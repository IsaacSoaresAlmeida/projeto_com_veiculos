import { useLocalStorage } from "./useLocalStorage";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { VehiclesService, Vehicle } from "../services/VehiclesService";

interface VehiclesContextType {
  vehicles: Vehicle[];
  addVehicle: (v: Vehicle) => void;
  updateVehicle: (v: Vehicle) => void;
  deleteVehicle: (id: string) => void;
}

const VehiclesContext = createContext<VehiclesContextType | undefined>(undefined);

export const VehiclesProvider = ({ children }: { children: ReactNode }) => {
  const [vehicles, setVehicles] = useLocalStorage<Vehicle[]>("vehicles", []);

  function addVehicle(v: Vehicle) {
    setVehicles([...vehicles, v]);
  }

  function updateVehicle(v: Vehicle) {
    setVehicles(vehicles.map(item => item.id === v.id ? v : item));
  }

  function deleteVehicle(id: string) {
    setVehicles(vehicles.filter(item => item.id !== id));
  }

  return (
    <VehiclesContext.Provider value={{ vehicles, addVehicle, updateVehicle, deleteVehicle }}>
      {children}
    </VehiclesContext.Provider>
  );
};


export function useVehicles() {
  const context = useContext(VehiclesContext);
  if (!context) {
    throw new Error("useVehicles must be used within VehiclesProvider");
  }
  return context;
}
