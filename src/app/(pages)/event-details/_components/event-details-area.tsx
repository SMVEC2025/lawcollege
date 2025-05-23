import Image from "next/image";
import EventBox from "./event-box";
import { IEventDT } from "@/types/event-d-t";

type IProps = {
  event:IEventDT
}

export default function EventDetailsArea({event}:IProps) {
  return (
    <section className="tp-event-details-area pt-80 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="tp-event-details-wrapper">
              <div className="tp-event-details-about">
                <h3 className="tp-event-details-title">{event?.acf?.title}</h3>
               <p>{event?.acf?.description}</p>
               
               
              </div>
              
              <div className="tp-event-details-teaser">
                <Image className="event-image" src={event.acf.image} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <EventBox event={event} />
          </div>
        </div>
        
      </div>
    </section>
  )
}
