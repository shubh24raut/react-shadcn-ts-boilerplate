import { Outlet } from "react-router-dom";
import Sidemenu from "./components/layout/Sidemenu";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <div className="flex w-full h-screen ">
      <SidebarProvider>
        <Sidemenu />
        <div className=" w-full">
          <Outlet />
        </div>
      </SidebarProvider>
    </div>
  );
}

export default App;
