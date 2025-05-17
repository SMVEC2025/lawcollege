'use client';
import { wowAnimation } from "@/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import GlobalContextProvider from "./global-context-provider";
import axios from "axios";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


type IProps = {
  children: React.ReactNode;
};

export default function MainProvider({ children }: IProps) {
  const pathname = usePathname();
  useEffect(() => {
    wowAnimation();
  }, [pathname])
    const [formOpen,setFormOpen] = useState(false)
    const [events,setEvents]= useState([])
    const [loader,setLoader]=useState(false)

    
   useEffect(() => {
     // Replace with your endpoint; consider adding `id` in _fields for React keys
     axios
       .get('https://cms.smvhospital.com/wp-json/wp/v2/agrinewsevents?_fields=acf')
       .then((response) => {
         setEvents(response.data);
       })
       .catch(() => {
            
       })
       .finally(() => {
         setLoader(false);
       });
   }, []);
  return <GlobalContextProvider
    
      >
    {children}
    </GlobalContextProvider>;
}
