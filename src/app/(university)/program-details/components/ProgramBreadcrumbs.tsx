import Link from "next/link";
import { HomeSvg } from "@/components/svg";
import { IProgramDT } from "@/types/program-d-t";

type IProps = {
  event:IProgramDT
}

export default function ProgramB({event}:IProps) {
  return (
    <section
      className="tp-event-details-breadcrumb-bg pb-110 p-relative z-index-1 fix"
      data-background="assets/img/event/event/event-details-bg.jpg"
      style={{ backgroundImage: "url(/assets/img/event/event/event-details-bg.jpg)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="tp-breadcrumb__list tp-event-details-breadcrumb-list pb-120">
              <span>
                <Link href="/">
                  <HomeSvg />
                </Link>
              </span>
            </div>
            <div className="tp-event-details-breadcrumb-content">
              <span className="tp-event-details-breadcrumb-subtitle">
                Program
              </span>
              <h4 className="tp-event-details-breadcrumb-title">
                {event.title}
              </h4>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
