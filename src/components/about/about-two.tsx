import Image from "next/image";
import mainimg from  "@/assets/img/images/studentscort.png"


type IProps = {
   spacing?:string;
};

export default function AboutTwo({spacing='pt-115 pb-90'}:IProps) {
  return (
    <section className={`about-area ${spacing} grey-bg `}>
                     <Image className="mainimage" src={mainimg} alt="thumb-img" style={{height:'auto'}}/>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="tp-about-4-wrapper mb-75 wow fadeInUp" data-wow-delay=".3s">
                     <h2 className="tp-about-4-headerone">Empowering Legal Minds for Justice, Equity, and Social Change</h2>
                     <h2 className="tp-about-4-head">Sri Manakula Vinayaga Educational Trust established the Sri Manakula Vinayagar College of Law with the vision of delivering quality and affordable legal education to aspiring law professionals. Affiliated with Pondicherry University and recognized by the Bar Council of India, the college offers undergraduate, postgraduate, and research programs in legal studies. The campus is equipped with state-of-the-art infrastructure, including Wi-Fi, a comprehensive law library, digital classrooms, moot court halls, and seminar facilities. Students enjoy excellent support services such as hostel accommodations, 24/7 security, purified drinking water, and on-campus ATM access. Accredited by reputed agencies, the college maintains high academic standards and prepares students for successful legal careers. Our graduates have excelled in academics, secured placements in renowned law firms, judicial services, and corporates, and actively contribute to legal reforms and social justice initiatives.

</h2>
                     {/* <div className="tp-about-4-btn wow fadeInUp" data-wow-delay=".5s">
                        <div className="tp-about-4-video">
                           <VideoProvider>
                              <span>
                                 <VideoPlayerSvg/>
                              </span>
                           </VideoProvider>
                           <span>Play Video</span>
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>
            
         </div>
      </section>
  )
}
