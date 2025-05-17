import { DownArrowThree } from "../svg";

export default function CampusChooseAreaFour() {
  return (
    <section className="tp-campus-choose-area pt-120 pb-90 grey-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-campus-choose-wrapper text-center">
              <div className="tp-campus-choose-btn">
                <p>History of SMVEC</p>
                <a href="#down">
                  <span>
                    <DownArrowThree />
                  </span>
                </a>
              </div>
              <div className="tp-campus-choose-content mb-10">
                <h2 className="tp-campus-choose-title">
                 Sri Manakula Vinayagar Engineering College (SMVEC), located in Puducherry, India, was established in 1999 by the Sri Manakula Vinayaga Educational Trust under the leadership of its founder, N. Kesavan. The college was founded with the objective of providing quality technical education to the rural sectors of society.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
