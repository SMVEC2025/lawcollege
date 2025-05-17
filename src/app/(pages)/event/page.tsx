"use client"
import React, { useContext } from "react";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import EventAreaTwo from "@/components/event/event-area-two";
import { GlobalContext } from "@/context/global-context";


export default function EventPage() {
 const context = useContext(GlobalContext);

  // Always check for null if context default is null
  if (!context) return null;

  const {
    events
  } = context;

 
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Events"
        subtitle="Events"
      
      />
      {/* breadcrumb area end */}

      {/* event area start */}
      <EventAreaTwo events={events}/>
      {/* event area end */}
    </main>
  );
}
