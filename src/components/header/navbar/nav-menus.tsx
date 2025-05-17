import React from "react";
import Link from "next/link";
import { menu_data_2 } from "@/data/menu-data";
import NavPagesDropdown from "./dropdown/nav-pages-dropdown";
import NavHomeDropdown from "./dropdown/nav-home-dropdown";
import NavSmMegaMenus from "./dropdown/nav-sm-mega-menus";

// prop type 
type IProps = {
  sm_mega_title?: string;
}

export default function NavMenus({sm_mega_title}: IProps) {
  return (
    <nav className="tp-main-menu-content">
      <ul>
       {menu_data_2.map((e,i)=>(
        <li>{e.title}</li>
       ))}
      </ul>
    </nav>
  );
}
