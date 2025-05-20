import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/img/logo/logo-black.png';
import { BehanceSvg, CloseThreeSvg, DribbleSvg, InstagramSvg, YoutubeTwoSvg } from "@/components/svg";
import OffcanvasMenuTwo from "./offcanvas-menu-2";


type IProps = {
   openOffCanvas: boolean;
   onHandleOffCanvas: () => void;
   offcanvas_cls?: string;
   offcanvas_menu_2?: boolean;
}
export default function OffcanvasArea({openOffCanvas,onHandleOffCanvas,offcanvas_cls}:IProps) {
   return (
      <>
         <div className={`offcanvas__area ${offcanvas_cls} ${openOffCanvas ? 'offcanvas-opened' : ''}`}>
            <div className="offcanvas__wrapper">
               <div className="offcanvas__close">
                  <button onClick={onHandleOffCanvas} className="offcanvas__close-btn offcanvas-close-btn">
                     <CloseThreeSvg />
                  </button>
               </div>
               <div className="offcanvas__content">
                  <div className="offcanvas__top mb-90 d-flex justify-content-between align-items-center">
                     <div className="offcanvas__logo tp-header-logo">
                        <Link href="/">
                           <Image src={logo} alt="logo" style={{ height: 'auto' }} />
                        </Link>
                     </div>
                  </div>
                  <div className="offcanvas-main">
                     <div className="offcanvas-content">
                        <h3 className="offcanvas-title">Menu</h3>
                     </div>
                     
                     {/* mobile menu */}
                     {/* mobile menu */}
<OffcanvasMenuTwo />
                    
                     <div className="offcanvas-contact">
                        <h3 className="offcanvas-title sm">Information</h3>
                        <ul>
                           <li><a href="tel:1245654">+ 4 20 7700 1007</a></li>
                           <li><a href="mailto:hello@acadia.com">hello@acadia.com</a></li>
                           <li><a href="#">Avenue de Roma 158b, Lisboa</a></li>
                        </ul>
                     </div>
                     <div className="offcanvas-social">
                        <h3 className="offcanvas-title sm">Follow Us</h3>
                        <ul>
                           <li>
                              <a href="#">
                                 <InstagramSvg />
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <DribbleSvg />
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <BehanceSvg />
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <YoutubeTwoSvg />
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Body Overlay */}
         <div onClick={onHandleOffCanvas} className={`body-overlay ${openOffCanvas ? 'opened' : ''}`}/>
         {/* Body Overlay */}
      </>
   )
}
