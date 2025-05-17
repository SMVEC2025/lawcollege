"use client"
import EventBreadcrumb from "../_components/event-breadcrumb";
import EventDetailsArea from "../_components/event-details-area";
import { GlobalContext } from "@/context/global-context";
import { useContext } from "react";

type Props = {
  params: { id: string };
};

export default function EventDetailsPage({ params }: Props) {
  const context = useContext(GlobalContext);
  if (!context) return null;

  const { events } = context;
  const title = decodeURIComponent(params.id);

  const event = events?.find((item) => item.acf.title === title);

  
    return (
    <main>
      {event ? (
        <>
          {/* breadcrumb area start */}
          <EventBreadcrumb event={event} />
          {/* breadcrumb area end */}

          {/* event details area start */}
          <EventDetailsArea event={event} />
          {/* event details area end */}
        </>
      ) : (
        <div className="text-center mt-100 mb-80">
          No Event found with id: {params.id}
        </div>
      )}
    </main>
  );
}
