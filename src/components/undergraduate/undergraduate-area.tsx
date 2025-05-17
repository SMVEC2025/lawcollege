import Link from "next/link";
import { MajorPrograms, MinorsPrograms, RightArrowSeven } from "../svg";
import { university_classic_program_data } from "@/data/program-data";
import { FaChevronRight } from "react-icons/fa6";


export default function UndergraduateArea() {
  const files = [
    {
      title: "Scheme of study - 5 years",
      file: "/assets/documents/Five_Year_Scheme_of_Study_First_Year.pdf"
    },
    {
      title: "Scheme of study - 3 years",
      file: "/assets/documents/Three_Year_Scheme_of_Study_First_Year.pdf"
    },
    {
      title: "Syllabus - 5 years",
      file: "/assets/documents/Five_Year_Syllabus_First_Year.pdf"

    },
    {
      title: "Syllabus - 3 years",
      file: "/assets/documents/Three_Year_Syllabus_First_Year.pdf"

    },
    {
      title: "Regulations - 3 years",
      file: "/assets/documents/Regulations_Three_Years.pdf"
    },
    {
      title: "Regulations - 5 years",
      file: "/assets/documents/Regulations_Final _Five_Years.pdf"
    }
  ]
  return (
    <section className="tp-undergraduate-area grey-bg pb-85">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-undergraduate-program-box pb-85">
              <div
                className="tp-undergraduate-program-heading"
                style={{ backgroundImage: "url(/assets/img/history/undergraduate/heading-bg.png)" }}
              >
                <h4 className="tp-undergraduate-program-title">
                  <span>
                    <MajorPrograms />
                  </span>{" "}
                  Our Programs
                </h4>
              </div>
              <div className="tp-undergraduate-program-content">
                <div className="row">
                  {university_classic_program_data.map((p) => (
                    <div key={p.id} >
                      <Link href={`/program-details/${p.id}`}>
                        <div className="tp-undergraduate-program-list">
                          <div className="divone">
                            <img src={p.img} alt="" />
                          </div>
                          <div className="divtwo">
                            <h4>{p.title}</h4>
                            <p>{p.years == 'five' ? "5" : "3"} Years</p>

                            <p>{p.description}</p>
                          </div>
                          <div className="right-btn">
                            <button><FaChevronRight /></button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tp-undergraduate-program-box pb-85">
              <div
                className="tp-undergraduate-program-heading"
                style={{ backgroundImage: "url(/assets/img/history/undergraduate/heading-bg.png)" }}
              >
                <h4 className="tp-undergraduate-program-title">
                  <span>
                    <MajorPrograms />
                  </span>{" "}
                 Program Structure
                </h4>
              </div>
              <div className="tp-undergraduate-program-content">
                <div className="row">
                  {files.map((p, index) => (
                    <div key={index} >
                      <Link target="_blank" href={`${p.file}`}>
                        <div className="document-program">

                          <div className="divtwo">
                            <h4>{p.title}</h4>
                          </div>
                          <div className="right-btn">
                            <button><FaChevronRight /></button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
