"use client";
import { createClient } from "@/utils/supabase/client";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import React, { useEffect, useState } from "react";
import { SidebarMenuButton } from "./ui/sidebar";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { ChevronsUpDown } from "lucide-react";

const UserGreetText = () => {
  const [user, setUser] = useState(null);
  const supabase = createClient();
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      console.log(user);
    };
    fetchUser();
  }, []);
    if (user !== null) {
      return (
        <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
          <Avatar className="h-8 w-8 rounded-lg">
            {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{user.user_metadata.full_name}</span>
            <span className="truncate text-xs">{user.email}</span>
          </div>
          <ChevronsUpDown className="ml-auto size-4" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      );
    }
  return (
    <></>
  );
};

export default UserGreetText;