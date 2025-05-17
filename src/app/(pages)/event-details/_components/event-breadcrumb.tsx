
import Timer from "@/components/timer";
import { IEventDT } from "@/types/event-d-t";

type IProps = {
  event:IEventDT
}

export default function EventBreadcrumb({event}:IProps) {
  return (
    <section
      className="tp-event-details-breadcrumb-bg pb-110 p-relative z-index-1 fix"
      data-background="assets/img/event/event/event-details-bg.jpg"
      style={{ backgroundImage: `url(${event?.acf.image})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="tp-breadcrumb__list tp-event-details-breadcrumb-list pb-120">
            
            
            </div>
            <div className="tp-event-details-breadcrumb-content">
              <span className="tp-event-details-breadcrumb-subtitle">
                Event
              </span>
              <h4 className="tp-event-details-breadcrumb-title">
             {event?.acf?.title}
             

              </h4>
              <div className="tp-event-details-countdown">
                <div className="tp-event-details-countdown-inner">
                  <Timer expiryTimestamp={new Date(`${new Date(`${event?.acf?.date}`.split('/').reverse().join('-')).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })} 10:20:22`)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
