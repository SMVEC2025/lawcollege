"use client"

import Link from "next/link";
import Image from "next/image";
import { RightArrow, RightArrowThree } from "../svg";
import shape_line from "@/assets/img/unlerline/event-1-svg-1.svg";
import HoverImgItem from "./hover-img-item";
import { GlobalContext } from "@/context/global-context";
import { useContext } from "react";

export default function EventArea() {
   const context = useContext(GlobalContext);

  // Always check for null if context default is null
  if (!context) return null;

  const {
    events
  } = context;

 
  return (
    <section className="event-area grey-bg pt-85 pb-110">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-5 col-md-8">
            <div
              className="tp-event-section mb-60 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="tp-section">
                <h3 className="tp-section-2-title">
                  Recent & Upcoming {" "}
                  <span>
                    Events{" "}
                    <Image
                      className="tp-underline-shape-3 wow bounceIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".4s"
                      src={shape_line}
                      alt="shape-line"
                    />
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-md-4">
            <div className="tp-event-btn text-md-end mb-70">
              <Link className="tp-btn" href="/event">
                See More Events
                <span>
                  <RightArrow />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="tp-event-wrap wow fadeInUp" data-wow-delay=".3s">
          {events?.map((item,index) => (
            <div key={index} className="tp-event-item">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <div className="tp-event-list">
                    <h4 className="tp-event-list-count">{item?.acf?.date.split('/')[0]}</h4>
                    <span>
                      {item?.acf?.date.split('/')[1]}, {item?.acf?.date.split('/')[2]}
                    </span>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="tp-event-content">
                    <h3 className="tp-event-title">
                      <HoverImgItem img={item?.acf?.image} title={item?.acf?.title} />
                    </h3>
                    <div className="tp-event-info">
                      <span>
                        <i className="fa-sharp fa-light fa-location-dot"></i>
                        {item?.acf?.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-1">
                  <div className="tp-event-arrow text-lg-end">
                    <Link href={`/event-details/${item?.acf?.title}`}>
                      <span>
                        <RightArrowThree />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
