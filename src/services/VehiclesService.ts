export interface Vehicle {
  id: string;
  modelo: string;
  placa: string;
  ano: string;
  capacidade: string;
}

const STORAGE_KEY = "vehicles";

export const VehiclesService = {
  getAll(): Vehicle[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  save(vehicle: Vehicle) {
    const list = VehiclesService.getAll();
    list.push(vehicle);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  },

  update(vehicle: Vehicle) {
    const list = VehiclesService.getAll();
    const index = list.findIndex((v: any) => v.id === vehicle.id);
    if (index >= 0) {
      list[index] = vehicle;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }
  },

  delete(id: string) {
    const list = VehiclesService.getAll().filter((v: any) => v.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }
};
