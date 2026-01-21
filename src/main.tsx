import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";
import Sidebar from "./components/partials/Sidebar";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider defaultOpen={false}>
      <Sidebar />
      <SidebarInset className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow bg-white">
          <App />
        </main>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  </StrictMode>
);
