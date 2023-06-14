import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Side from "./components/Side";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      <Side />
      <Footer />
    </>
  );
}

export default App;
