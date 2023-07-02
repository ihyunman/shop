import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Side from "./components/Side";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";
const queryClient = new QueryClient();

function App() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <Side />
      </QueryClientProvider>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
