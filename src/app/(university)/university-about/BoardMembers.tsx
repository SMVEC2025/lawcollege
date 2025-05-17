import React from 'react'
import Image from "next/image";
import chairman from '@/assets/img/board/chairman.png'
import secratary from '@/assets/img/board/secratary.png'
import treasurer from '@/assets/img/board/treasurer.png'
function BoardMembers() {
  return (
    <div className='bm_main'>
      <div className='assets'>
        {/* <Image src="/assets/img/medalasset.png" alt="" /> */}
      </div>
      {/* <div className='asset2'>
            <img src="/assets/img/mainentranceoutline2.png" alt="" />
        </div> */}
      <div className="section-title color-red text-center">

        <h2 className="header" data-wow-delay=".3s">
          Board of Trustees and Management
        </h2>
        <p className="courses-sub-text mt-3 wow fadeInUp" data-wow-delay=".5s">  Guided by visionary leadership, our Board of Trustees and Management ensure the college's commitment to excellence and integrity.
        </p>
      </div>


      <div className='bm_chairman'>
        <Image src={chairman} alt="" />
        <div className='content'>
          <h2>Shri.M.Dhanasekaran</h2>
          <h4>Founder, Chairman and Managing Director</h4>
          <p>Sri Manakula Vinayagar Educational Trust was established to provide quality education in diverse fields, including technical, medical, and allied sciences, with a special emphasis on supporting disadvantaged members of society. The Trust operates several esteemed institutions across the Union Territory of Puducherry, including engineering, medical, nursing, and polytechnic colleges, along with a charitable hospital that offers free medical care to those in need.
          </p>
          <p>Among these institutions, the Sri Manakula Vinayagar College of Agricultural Sciences (SMVCAS) stands out as a premier center for higher education. SMVCAS is dedicated to offering quality education to students from all walks of life. The institution is an autonomous body affiliated with Pondicherry University and offers various undergraduate, postgraduate, and research programs in the field of Agricultural Sciences, aimed at addressing global food security, sustainability, and rural development.</p>

        </div>
      </div>
      <div className='bm_chairman'>
        <Image src={secratary} alt="" />
        <div className='content'>
          <h2>Dr.K.Narayanasamy
          </h2>
          <h4>Secretary</h4>
          <p>Sri Manakula Vinayaga Educational Trust stands as a beacon of excellence in fostering future innovators and leaders. Since its establishment in 1998, the institution has reached remarkable milestones, including academic brilliance, exceptional placement records, and commendable achievements in sports and co-curricular activities. The Sri Manakula Vinayagar College of Agricultural Sciences (SMVCAS) embodies the Trust’s vision of providing a holistic and enriching learning environment for its students.
          </p>
          <p>At SMVCAS, the faculty comprises highly qualified and experienced professionals dedicated to nurturing talent and transforming ordinary minds into extraordinary individuals. With a focus on academic rigor, innovation, and personal growth, the institution ensures that its students are well-prepared to meet the challenges of a rapidly evolving world.</p>
        </div>
      </div>
      <div className='bm_chairman'>
        <Image src={treasurer} alt="" />
        <div className='content'>
          <h2>D. Rajarajan Dhanasekaran                </h2>
          <h4>Treasurer</h4>
          <p>As the Treasurer of Sri Manakula Vinayaga Educational Trust, it is my privilege to extend a warm welcome to all. The Sri Manakula Vinayagar College of Agricultural Sciences (SMVCAS) stands as a beacon of knowledge, committed to fostering academic excellence and holistic personal development. Rooted in a legacy of innovation and dedication, our institution strives to provide students with exceptional opportunities for growth and success in the ever-evolving field of agricultural sciences.
          </p>
          <p>Our strengths lie in a blend of modern infrastructure, a highly qualified and dedicated faculty, an outstanding placement record, and an eco-friendly, clean campus. We take pride in offering personalized mentoring within a disciplined and nurturing environment that emphasizes ethical and value-based education, while preparing students to contribute meaningfully to sustainable agriculture and rural development.</p>

        </div>
      </div>
    </div>
  )
}

export default BoardMembers