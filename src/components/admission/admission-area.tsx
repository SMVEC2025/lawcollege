import Image from "next/image";
import overview_img_1 from "@/assets/img/course/images2.jpg";
import overview_img_2 from "@/assets/img/hero/hero-bg-2.jpg";
import { RightArrowSeven } from "../svg";
import Link from "next/link";

export default function AdmissionArea() {
  return (
    <section className="tp-admission-overview-area grey-bg pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="tp-admission-overview-heading wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h3 className="tp-admission-overview-title">Choose SMVEC</h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="tp-admission-overview-wrapper wow fadeInUp"
              data-wow-delay=".5s"
            >
              <p style={{marginBottom:"10px"}}>
                Choosing the right law college sets the foundation for your entire legal career — and SMVEC College of Law stands out as a premier institution committed to academic excellence, practical learning, and ethical leadership.
              </p>
              <p> Hands-On Legal Training</p>
              <ul>
                <li>Moot court competitions</li>
                <li>Legal aid clinics</li>
                <li>Internships with law firms, courts, and NGOs</li>
              </ul>
              <div className="tp-admission-overview-btn mt-50">
                <Link className="tp-btn" href="/university-financial">
                  Apply Now
                  <span>
                    <RightArrowSeven />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AdmissionCtaArea() {
  return (
    <section className="tp-admission-cta-area grey-bg pb-160">
      <div className="container">
        <div className="tp-admission-cta-box">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="tp-admission-cta-heading wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h3 className="tp-admission-cta-title">
                  Start your journey toward a successful legal career with SMVEC College of Law.
                </h3>
                <p>
                 Don’t know how to apply? We’ve made it simple for you!
                </p>
                <div className="tp-admission-cta-btn">
                  <Link className="tp-btn" href="/university-tuition-fees">
                   How To Apply
                    <span>
                      <RightArrowSeven />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="tp-admission-cta-thumb wow fadeInUp"
                data-wow-delay=".5s"
              >
                <Image
                  src={overview_img_1}
                  alt="overview-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AdmissionApplyArea() {
  return (
    <section className="tp-admission-apply-area grey-bg pt-40 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="tp-admission-apply-thumb p-relative wow fadeInUp"
              data-wow-delay=".3s"
            >
              <Image
                src={overview_img_2}
                alt="overview-img"
                className='thumbimage'
                style={{ height: "auto" }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="tp-admission-apply-heading wow fadeInUp"
              data-wow-delay=".5s"
            >
              <h3 className="tp-admission-apply-title">Apply for {new Date().getFullYear()}</h3>
              <p>
               Take the first step toward a successful legal career at SMVEC College of Law.
Join a dynamic learning environment that shapes future legal professionals with knowledge, ethics, and real-world experience.
              </p>
              <div className="tp-admission-apply-btn">
                <Link className="tp-btn" href="/university-apply">
                  Apply now
                  <span>
                    <RightArrowSeven />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
