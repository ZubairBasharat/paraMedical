import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { DynamicIcon } from "lucide-react/dynamic";
import { Separator } from "../ui/separator";

// Menu items.
const items = [
  {
    title: "Home Health Care Services",
    url: "#",
    items: [
      { title: "Help at home", url: "#" },
      { title: "Nursing at home", url: "#" },
      { title: "Respite care & caregiver relief", url: "#" },
      { title: "Live-in care", url: "#" },
      { title: "Specialized care", url: "#" },
      { title: "Caregiver packages", url: "#" },
    ],
  },
  {
    title: "Company",
    url: "#",
    items: [
      { title: "About ParaMed", url: "#" },
      { title: "Workplace Health and Wellness", url: "#" },
      { title: "Blog", url: "#" },
      { title: "Patient Bill of Rights", url: "#" },
    ],
  },
  { title: "Careers", url: "#" },
  { title: "Share your feedback", url: "#" },
];

export default function AppSidebar() {
  return (
    <Sidebar
      side="right"
      variant="floating"
      collapsible="offcanvas"
      className="z-30"
    >
      {/* HEADER */}
      <SidebarHeader className="my-8">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-28 lg:size-40 items-center justify-center rounded-lg">
                  <img
                    src="/paramed_logo.png"
                    alt="Paramed"
                    className="size-40 object-contain"
                  />
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {/* Parent link */}
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="text-custom-blue font-semibold w-full block p-2 rounded-md hover:bg-custom-light-blue transition-colors"
                    >
                      {item.title}
                    </a>
                  </SidebarMenuButton>

                  {/* Sub-links */}
                  {item.items && (
                    <SidebarMenu className="pl-4 mt-1">
                      {item.items.map((subItem) => (
                        <SidebarMenuItem key={subItem.title}>
                          <SidebarMenuButton asChild>
                            <a
                              href={subItem.url}
                              className="text-custom-blue w-full block p-2 rounded-md hover:bg-custom-light-blue transition-colors text-sm"
                            >
                              {subItem.title}
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter>
        <Separator className="bg-accent h-px" />
        <div className="w-full p-2 hover:bg-custom-light-blue rounded-md transition-colors">
          <a
            href="#"
            className="w-full flex flex-row items-center gap-4 text-custom-blue font-semibold text-sm md:text-base"
          >
            <DynamicIcon name="log-in" size={18} />
            <span>Login</span>
          </a>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
