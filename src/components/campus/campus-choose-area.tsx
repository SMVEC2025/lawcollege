import Link from "next/link";
import { DownArrowThree } from "../svg";

export default function CampusChooseArea() {
  return (
    <section className="tp-campus-choose-area pt-120 pb-30 grey-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-campus-choose-wrapper text-center">
              <div
                className="tp-campus-choose-btn admission wow fadeInUp"
                data-wow-delay=".3s"
              >
                <p>Admission 2025</p>
                <Link href="#down">
                  <span>
                    <DownArrowThree />
                  </span>
                </Link>
                <div
                  className="tp-campus-choose-content mb-10 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <h2 className="tp-campus-choose-title fs-50">
                    Shape your future in law with a rigorous academic environment, distinguished faculty, and real-world legal exposure at SMVEC college of law. We are now accepting applications for the academic year 2025. Whether you&apos;re aspiring to become a legal practitioner, judge, or policy expert, our programs are designed to empower you with the knowledge, skills, and ethics needed for a successful legal career.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
