import Image from "next/image";
import { PlusThreeSvg } from "@/components/svg";
import details_overlay_img from "@/assets/img/event/event/event-details-overlay.png";
import { IProgramDT } from "@/types/program-d-t";
import ProgramBox from "./Program-box";

type IProps = {
    event: IProgramDT
}

export default function ProgramDetailsArea({ event }: IProps) {
    return (
        <section className="tp-event-details-area pt-80 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="tp-event-details-wrapper">
                            <div className="tp-event-details-about">
                                <h3 className="tp-event-details-title">{event.title}</h3>
                                <p>{event.longDesc}</p>
                                <button className="tp-event-details-about-more">
                                    <span><PlusThreeSvg /></span> Show more
                                </button>
                                <div className="tp-event-details-about-overlay">
                                    <Image src={details_overlay_img} alt="details-overlay" style={{ height: "auto" }} />
                                </div>
                            </div>
                            <div className="tp-event-details-cover">
                                <h3 className="tp-event-details-title">Career Opportunities</h3>
                                <ul>
                                    {event?.career?.map((careerItem, index) => (
                                        <li key={index}>{careerItem}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <ProgramBox event={event}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
