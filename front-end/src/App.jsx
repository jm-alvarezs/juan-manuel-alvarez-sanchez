import React from "react";
import { combineComponents } from "./context";
import { CatalogProductsProvider } from "./context/CatalogProductsContext";
import { AddressProvider } from "./context/AddressContext";
import { EnviaProvider } from "./context/EnviaContext";
import Home from "./Home";
import "./App.css";

const AppContextProvider = combineComponents([
  CatalogProductsProvider,
  AddressProvider,
  EnviaProvider,
]);

function App() {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
}

export default App;
