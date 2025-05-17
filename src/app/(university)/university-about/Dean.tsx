import React from 'react'
import Image from 'next/image'
import vincent from "@/assets/img/board/Vincent.jpg"
function Dean() {
    return (
        <div className='dm_main'>
            <div className='dm_title'>
                <div className="section-title color-red text-center">

                    <h2 className="header" data-wow-delay=".3s">
                        Our Dean
                    </h2>
                    <p className="courses-sub-text mt-3 wow fadeInUp" data-wow-delay=".5s"> Leading the way in cultivating knowledge, innovation, and sustainable agriculture.</p>
                </div>
            </div>
            <div className='dm_content'>
                <div>
                    <Image src={vincent} alt="" />
                </div>
                <div>
                    <h3> Dr. G. MOHAMED YASSIN</h3>
                    <p>As Dean, it is my privilege to lead a department that plays such a vital role in shaping the future of food security, sustainable farming, and rural development. Agriculture today is more than just cultivation—it is a science, a technology, and a commitment to feeding the world responsibly. Our department is dedicated to providing students with a strong academic foundation, practical exposure, and innovative research opportunities to help them grow into capable, ethical, and forward-thinking agricultural professionals.

                        We believe in nurturing minds that will not only understand the soil but also care for the environment, uplift rural communities, and embrace agri-entrepreneurship. Through a blend of classroom learning, field-based training, and community outreach, our students are prepared to meet modern agricultural challenges with confidence. I warmly welcome you to be part of this mission and explore the many opportunities our department has to offer.</p>
                </div>
            </div>
        </div>
    )
}

export default Dean