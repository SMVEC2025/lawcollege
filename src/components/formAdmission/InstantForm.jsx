'use client';

import { useContext } from "react"
import { IoMdClose } from "react-icons/io";
import Form from "./Form";
import { GlobalContext } from '@/context/global-context';

function InstantForm() {
  const context = useContext(GlobalContext);

  // Always check for null if context default is null
  if (!context) return null;

  const {
    formOpen,
    setFormOpen
  } = context;
  return (
    <>
    {formOpen?(
        <div className="if_main">
        <div className="close-btn" onClick={()=>setFormOpen(false)}><IoMdClose/></div>
       <div className="if_maincontainer">
        <Form/>
       </div>
    </div>
    ):null}
    </>
  )
}

export default InstantForm