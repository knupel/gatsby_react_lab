
import React, {FC} from "react";
import Layout from "../../../components/struct/layout";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"
 

import { Button } from "../../../components/shadcn/button";
import {  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, 
          DropdownMenuShortcut, DropdownMenuGroup, 
          DropdownMenuItem, DropdownMenuSeparator } from "../../../components/shadcn/dropdown";
interface DropdownProps {
  title: string,

}
const Dropdown: FC<DropdownProps> = ({title}) => {
  return <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild><Button variant="outline">{title}</Button></DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator/>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </>
}

const Dropdowns = () => {
  return (
    <div>
      <Layout title="Menu déroulant de ShadCN"></Layout>
      {/* <h1>Hello world!</h1>
      <h1 className="text-rouge underline ">
        Hello world!
      </h1> */}
      {/* <div className="h-56 grid grid-cols-3 gap-4 content-between ...">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
      </div> */}
      <div className="content-between">
        <Dropdown title="Sésame"/>
        <Dropdown title="ouvre"/>
        <Dropdown title="toi"/>
      </div>
    </div>
  )
}

export default Dropdowns;
