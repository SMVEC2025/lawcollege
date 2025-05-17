import Image from "next/image";
import { kids_event_data } from "@/data/event-data";
import location_svg from "@/assets/img/icon/location.svg";
import Link from "next/link";

export default function EventAreaTwo({events}:any) {
 
  return (
    <section className="event-area pt-90 pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
           
          </div>
        </div>
        <div className="row">
          {events.map((item:any, i:any) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div
                className="tp-event-3-item mb-30 wow fadeInUp"
                data-wow-delay={`.${i + 1}s`}
              >
                <div className="tp-event-3-thumb">
                  <Link href={`/event-details/${item?.acf?.title}`}>
                    <Image
                     
                      src={item?.acf?.image}
                      alt={item?.acf?.title}
                      width={322}
                      height={229}
                      style={{ height: "auto" }}
                    />
                  </Link>
                  <div className="tp-event-3-date">
                    <span>{item?.acf?.date.split('/')[0]}</span>
                    <p>{item?.acf?.date.split('/')[1]}</p>
                  </div>
                </div>
                <div className="tp-event-3-content">
                  <h3 className="tp-event-3-title">
                    <Link href={`/event-details/${item.id}`}>{item?.acf?.title}</Link>
                  </h3>
                  <span>
                    <Image src={location_svg} alt="location" /> {item?.acf?.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
