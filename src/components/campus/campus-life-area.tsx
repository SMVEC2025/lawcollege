'use client';
import Image from 'next/image';
import { Swiper,SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import { DownArrowThree, NextArrowFour, PrevArrowFour } from '../svg';
import thumb_2 from  '@/assets/img/campus/marque2.png';
import thumb_3 from  '@/assets/img/campus/marque3.png';
import thumb_4 from  '@/assets/img/campus/marque4.png';
import thumb_5 from  '@/assets/img/campus/marque5.png';
import thumb_6 from  '@/assets/img/campus/marque6.png';
import thumb_7 from  '@/assets/img/campus/marque7.png';
import thumb_8 from  '@/assets/img/campus/marque8.png';

const slider_options:SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".tp-campus-next",
        prevEl: ".tp-campus-prev",
    },
    breakpoints: {
        '1200': {
            spaceBetween: 130,
        },
        '768': {
            spaceBetween: 80,
        },
        '400': {
            spaceBetween: 50,
        },
    },
};

const campus_images = [ thumb_2, thumb_3, thumb_4, thumb_5, thumb_6, thumb_7, thumb_8];

export default function CampusLifeArea() {
  return (
    <section className="tp-campus-life-area p-relative grey-bg pb-210">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tp-campus-life-title-wrap text-center wow fadeInUp" data-wow-delay=".3s">
                     <div className="tp-campus-choose-btn">
                        <p>LIFE ON CAMPUS</p>
                        <a href="#down2"><span>
                          <DownArrowThree />
                        </span></a>
                     </div>
                     <h3 className="tp-campus-life-title">Together, we grow in mind, body, spirit <br/>
                        and character.</h3>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-fluid gx-0 fix">
            <div className="row justify-content-center gx-0">
               <div className="col-lg-12">
                  <div id="down2" className="tp-campus-life-slider p-relative">

                     <Swiper {...slider_options} modules={[Navigation]} className='tp-campus-life-active'>
                           {campus_images.map((image, index) => (
                              <SwiperSlide key={index}>
                                 <div className="tp-campus-life-thumb text-center">
                                    <Image src={image} alt="thumb-img" style={{height:'auto'}}/>
                                 </div>
                              </SwiperSlide>
                           ))}
                     </Swiper>

                  </div>
               </div>
            </div>
         </div>
         <div className="tp-campus-life-arrow">
            <div className="tp-campus-prev pointer">
               <span>
                  <PrevArrowFour/>
               </span>
            </div>
            <div className="tp-campus-next pointer">
               <span>
                  <NextArrowFour/>
               </span>
            </div>
         </div>
      </section>
  )
}
