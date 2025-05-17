import Image from 'next/image';
import { RightArrow, ShapeLine } from '../svg';

// images
import thumb_1 from '@/assets/img/hero/hero-bg-1.webp';
import shape_1 from '@/assets/img/about/about-shape-1.jpg';
import shape_2 from '@/assets/img/about/about-shape-2.jpg';
import icon_1 from '@/assets/img/icon/about/about-icon-1.svg';
import icon_2 from '@/assets/img/icon/about/about-icon-2.svg';
import pilller from '@/assets/img/shape/tes-shape.png';
import { CSSProperties } from 'react';
import CounterItem from '../counter/counter-item';
import Link from 'next/link';

// list data 
const about_lists = [
    {
        id: 1,
        icon: icon_1,
        title: 'Building Trust',
        subtitle: 'We are committed to <br/> building trust'
    },
    {
        id: 2,
        icon: icon_2,
        title: 'Trusted by Students',
        subtitle: 'Most trusted <br/> by students'
    }
];

const imgStyle:CSSProperties = {
    height:'auto',
    borderRadius:"10px"
}

export default function AboutOne() {
  return (
    <section className="about-area tp-about-bg grey-bg pt-105">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="tp-about-wrap mb-60 wow fadeInLeft" data-wow-delay=".3s">
                    <div className="tp-about-thumb-wrapper">
                        <div className="tp-about-thumb-1">
                            <Image  src={thumb_1} alt="about-thumb" style={imgStyle}/>
                        </div>
                     
                    </div>
                    <div className="tp-about-shape">
                        <div className="tp-about-shape-1">
                            <Image src={shape_1} alt="shape"/>
                        </div>
                        <div className="tp-about-shape-2">
                            <Image src={shape_2} alt="shape"/>
                        </div>
                    </div>
                    <div className="tp-about-exprience">
                        <div className="tp-about-exprience-text d-flex">
                            <h3 className="tp-about-exprience-count">
                                <CounterItem min={0} max={25}/>
                            </h3>
                            <p>Years of <br/> Experience</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="tp-about-wrapper mb-60 wow fadeInRight" data-wow-delay=".3s">
                    <div className="tp-section mb-40">
                        <h5 className="tp-section-subtitle">About SMVEC</h5>
                        <h3 className="tp-section-title mb-30">Upholding Justice,<br/>  Shaping 
                            <span> Tomorrow <ShapeLine/> </span>
                        </h3>
                        <p>SMVEC's College of Law is dedicated to empowering the next generation of legal minds through quality education, research, and advocacy. We nurture future leaders in law with strong ethical values, practical skills, and a deep understanding of justice and societal impact.</p>
                    </div>
                    <div className="tp-about-list">
                        {about_lists.map((list) => (
                        <div key={list.id} className="tp-about-list-item d-flex align-items-center mb-35">
                            <div className="tp-about-list-icon">
                                <span>
                                    <Image src={list.icon} alt="about-icon"/>
                                </span>
                            </div>
                            <div className="tp-about-list-content">
                                <h5 className="tp-about-list-title">{list.title}</h5>
                                <p dangerouslySetInnerHTML={{__html: list.subtitle}}></p>
                            </div>
                        </div>
                        ))}
                        <div className="tp-about-btn pt-10">
                            <Link className="tp-btn tp-btn-sm" href="/university-apply">More about us
                                <span>
                                <RightArrow/>
                             </span>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='leftpiller'>
        <Image  src={pilller} alt="about-icon"/>
            </div>
            <div className='rightpiller'>
        <Image  src={pilller} alt="about-icon"/>
            </div>
        </div>
    </section>
  )
}
