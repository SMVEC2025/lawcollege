import SocialLinks from '@/components/social/social-links';
import { CalenderTwoSvg, ClockSvgThree,LocationThree, MinusSvg, Ongoing, PlusTwoSvg } from '@/components/svg';
import { IEventDT } from '@/types/event-d-t';

export default function EventBox({event}:any) {
  return (
    <div className="tp-event-details-box">
        <div className="tp-event-details-details">
            <h4 className="tp-event-details-box-title">Event Detail</h4>
            <div className="tp-event-details-list d-flex align-items-center justify-content-between">
                <h5><span>
                <CalenderTwoSvg/>
                    </span> Date</h5>
                <span>{event?.acf?.date}</span>
            </div>
            
            <div className="tp-event-details-list d-flex align-items-center justify-content-between">
                <h5><span><LocationThree/></span> Location</h5>
                <span>{event?.acf?.location}</span>
            </div>
        </div>
        <div className="tp-event-details-ticket">
           
            
            <div className="tp-event-details-btn mb-30">
                <a className="tp-btn-inner w-100 text-center" href="#">Share This Event</a>
            </div>
            <div className="tp-event-details-social text-center">
                <SocialLinks/>
            </div>
        </div>
    </div>
  )
}
