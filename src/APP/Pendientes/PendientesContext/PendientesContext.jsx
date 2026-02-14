import React from "react";
import { UseLocalStorage } from "./UseLocalStorage";

const PendientesContext = React.createContext();

function PendientesProvider({ children }) {
  const {
    item: Pendientes,
    saveItem: SavePendientes,
    loading,
    error,
  } = UseLocalStorage("Pendientes", []);

  const [SearchValue, SetSearchValue] = React.useState("");
  const [OpenModal, SetOpenModal] = React.useState(false);

  const CompletedPendientes = (Pendientes || []).filter(
    (pendiente) => !!pendiente.completed,
  ).length;

  const PendientesTotal = (Pendientes || []).length;

  const AddPendientes = (text) => {
    const NewPendiente = [...Pendientes];
    NewPendiente.push({
      text,
      completed: false,
    });
    SavePendientes(NewPendiente);
  };

  const DeletePendientes = (text) => {
    const Pendiente = [...Pendientes];
    const Resultado = Pendiente.findIndex(
      (Pendientes) => Pendientes.text === text,
    );
    Pendiente.splice(Resultado, 1);
    SavePendientes(Pendiente);
  };

  const SearchedPendientes = (Pendientes || []).filter((pendiente) => {
    const PendienteText = (pendiente.text || "").toLowerCase();
    const SearchText = (SearchValue || "").toLowerCase();
    return PendienteText.includes(SearchText);
  });

  const CompletePendientes = (text) => {
    const Pendiente = [...Pendientes];
    const Resultado = Pendiente.findIndex(
      (Pendientes) => Pendientes.text === text,
    );
    Pendiente[Resultado].completed = true;
    SavePendientes(Pendiente);
  };

  return (
    <PendientesContext.Provider
      value={{
        loading,
        error,
        CompletedPendientes,
        PendientesTotal,
        SearchValue,
        SetSearchValue,
        SearchedPendientes,
        AddPendientes,
        CompletePendientes,
        DeletePendientes,
        OpenModal,
        SetOpenModal,
      }}
    >
      {children}
    </PendientesContext.Provider>
  );
}

export { PendientesContext, PendientesProvider };
