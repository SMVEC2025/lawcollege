"use client";
import { GlobalContext } from "@/context/global-context";
import { IAnnouncementDT } from "@/types/announcement-d-t";
import { IEventDT } from "@/types/event-d-t";
import axios from "axios";
import React, { useEffect, useState } from "react";

type IPropType = {
  children: React.ReactNode;
};

export default function GlobalContextProvider({ children }: IPropType) {
  const [showAnnounceDetailsModal, setShowAnnounceDetailsModal] = useState(false);
  const [showAnnounceAddEditModal, setShowAnnounceAddEditModal] = useState(false);
  const [announceEditMode, setAnnounceEditMode] = useState<IAnnouncementDT | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [events, setEvents] = useState<IEventDT[]>([]); 
  const [loader, setLoader] = useState(false);
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
  function handleAnnounceDetailsModal() {
    setShowAnnounceDetailsModal((prev) => !prev);
  }

  function handleAnnounceAddEditModal(edit?: IAnnouncementDT) {
    setAnnounceEditMode(edit || null);
    setShowAnnounceAddEditModal((prev) => !prev);
  }

  return (
    <GlobalContext.Provider
      value={{
        announceEditMode,
        handleAnnounceAddEditModal,
        handleAnnounceDetailsModal,
        showAnnounceAddEditModal,
        showAnnounceDetailsModal,
        formOpen,
        setFormOpen,
        events,
        setEvents,
        loader,
        setLoader,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
