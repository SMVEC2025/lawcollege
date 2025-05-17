'use client';
import { IAnnouncementDT } from "@/types/announcement-d-t";
import { IEventDT } from "@/types/event-d-t";
import React from "react";

type InitialContext = {
    announceEditMode: IAnnouncementDT | null;
    showAnnounceDetailsModal:boolean;
    showAnnounceAddEditModal:boolean;
    handleAnnounceDetailsModal(): void;
    handleAnnounceAddEditModal(edit?: IAnnouncementDT): void;
  formOpen: boolean;
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  events: IEventDT[];
  setEvents: React.Dispatch<React.SetStateAction<IEventDT[]>>;
  loader: boolean;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = React.createContext<InitialContext | null>(null)