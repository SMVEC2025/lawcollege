import React from "react";
import { menu_data_2 } from "@/data/menu-data";

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
