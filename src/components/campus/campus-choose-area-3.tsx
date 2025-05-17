import Image from "next/image";
import mission_thumb_1 from "@/assets/img/our-mission/mission/mission-thumb-1.jpg";
import mission_thumb_2 from "@/assets/img/our-mission/mission/mission-thumb-2.jpg";
import mission_thumb_3 from "@/assets/img/our-mission/mission/mission-thumb-3.jpg";
import { DownArrowThree } from "../svg";


export default function CampusChooseAreaThree() {
  return (
    <section className="tp-campus-choose-area pt-120 pb-80 grey-bg">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tp-campus-choose-wrapper text-center">
                     <div className="tp-campus-choose-btn">
                        <p>Mission and values</p>
                        <div className="tp-campus-choose-content mb-10">
                           <h2 className="tp-campus-choose-title">The Ecadia University prepare you to <br/>
                              launch your career by providing a supportive, <br/>
                              creative, and professional.</h2>
                        </div>
                        <a href="#"><span>
                           <DownArrowThree/>
                        </span></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className="tp-mission-valus-thumb mb-30">
                     <Image className="text-center" src={mission_thumb_1} alt="mission-thumb" style={{height:'auto'}}/>
                     <div className="tp-mission-valus-content">
                        <h4 className="tp-mission-valus-title">Vision</h4>
                        <p>Inspiring and transforming lives in <br/>
                           a spiritually vital, caring school <br/>
                           community to serve God for <br/>
                           His glory.</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-md-6">
                  <div className="tp-mission-valus-thumb main pt-100 mb-30 pl-125">
                     <Image  src={mission_thumb_2} alt="mission-thumb" style={{height:'auto'}}/>
                     <div className="tp-mission-valus-content">
                        <h4 className="tp-mission-valus-title">Mission</h4>
                        <p>Acadia University transforms lives through <br/>
                           accessible, student-centered, quality <br/>
                           higher education.</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className="tp-mission-valus-thumb mb-30">
                     <Image className="text-center" src={mission_thumb_3} alt="mission-thumb" style={{height:'auto'}}/>
                     <div className="tp-mission-valus-content">
                        <h4 className="tp-mission-valus-title">Values</h4>
                        <p>Sri Manakula Vinayaga Educational Trust established the Sri Manakula Vinayagar College of Law with the vision of delivering quality and affordable legal education to aspiring law professionals. Affiliated with Pondicherry University and recognized by the Bar Council of India, the college offers undergraduate, postgraduate, and research programs in legal studies. The campus is equipped with state-of-the-art infrastructure, including Wi-Fi, a comprehensive law library, digital classrooms, moot court halls, and seminar facilities. Students enjoy excellent support services such as hostel accommodations, 24/7 security, purified drinking water, and on-campus ATM access. Accredited by reputed agencies, the college maintains high academic standards and prepares students for successful legal careers. Our graduates have excelled in academics, secured placements in renowned law firms, judicial services, and corporates, and actively contribute to legal reforms and social justice initiatives.

</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  )
}
