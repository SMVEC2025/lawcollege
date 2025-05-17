import SocialLinks from '@/components/social/social-links';
import { CalenderTwoSvg, ClockSvgThree,LocationThree, MinusSvg, Ongoing, PlusTwoSvg } from '@/components/svg';
import { IProgramDT } from '@/types/program-d-t';

type IProps = {
  event:IProgramDT
}
export default function ProgramBox({event}:IProps) {
  return (
    <div className="tp-event-details-box">
        <div className="tp-event-details-details">
            <h4 className="tp-event-details-box-title">Program Detail</h4>
                <div className="tp-event-details-list d-flex align-items-center justify-content-between">
                <p>{event.description}</p>
            </div>
            <div className="tp-event-details-list d-flex align-items-center justify-content-between">
                <h5><span>
                <CalenderTwoSvg/>
                    </span> Application</h5>
                <span>{new Date().getFullYear()}</span>
            </div>
            <div className="tp-event-details-list d-flex align-items-center justify-content-between">
                <h5><span><ClockSvgThree/></span> Year</h5>
                <span>{event.years == 'five'?"5":"3"} Years</span>
            </div>
         
         
        </div>
        <div className="tp-event-details-ticket">
            <h4 className="tp-event-details-box-title">Start apply today</h4>
           
           
            <div className="tp-event-details-btn mb-30">
                <a className="tp-btn-inner w-100 text-center" href="#">Apply Now</a>
            </div>
            <div className="tp-event-details-social text-center">
                <SocialLinks/>
            </div>
        </div>
    </div>
  )
}
