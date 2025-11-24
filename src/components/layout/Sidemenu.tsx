import { Inbox, MessagesSquare, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { NavLink, useLocation } from "react-router-dom";

const Sidemenu = () => {
  const location = useLocation();

  const items = [
    { title: "Users", url: "/users", icon: Users },
    { title: "Transactions", url: "/transactions", icon: Inbox },
    { title: "Templates", url: "/templates", icon: MessagesSquare },
  ];

  return (
    <Sidebar collapsible="icon" className=" text-white">
      {/* HEADER */}
      <SidebarHeader className="bg-gray-900 h-16 flex items-center justify-center text-xl font-bold border-b border-gray-700">
        ADMIN
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent className="bg-gray-900 px-2 py-4">
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => {
              const isActive: boolean = location.pathname === item.url;

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`flex h-10 items-center gap-3 px-3 py-2 rounded-md transition ${
                      isActive
                        ? "bg-gray-700 text-white"
                        : "text-gray-300 hover:bg-gray-400"
                    }  `}
                  >
                    <NavLink to={item.url}>
                      <item.icon />
                      <span className="text-md font-semibold">
                        {item.title}
                      </span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="bg-gray-900 h-16 flex  justify-center border-t border-gray-700 text-sm">
        <div className="flex space-x-2 items-center">
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/121786743?s=400&u=74e56152e1aae0ebb94cce9a2d9a748f7f998d30&v=4"
              alt="avatar-img"
            />
          </Avatar>
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs">Shubham Raut</span>
            <span className="text-gray-400 text-xs">
              shubham@dreamkasper.com
            </span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default Sidemenu;
