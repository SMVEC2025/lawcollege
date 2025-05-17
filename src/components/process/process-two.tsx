import Link from "next/link";

const applicationProcess = [
    {
      step: 1,
      title: "Complete Application Form",
      description: `Please fill out the complete application form with accurate details to ensure a smooth admission process.
Make sure to provide all necessary documents and information as requested.`,
      linkText: "Application Form",
      linkHref: "/university-application-form"
    },
    {
      step: 2,
      title: "Confirmation of Application",
      description: `Admissions requirements vary by program. Please consult the <a href="#"> Office </a> to verify which information is required to complete the application.`,
    },
    {
      step: 3,
      title: "Application Review",
      description: `We review your application to confirm you meet our requirements. If so, you will 
      then be asked to complete an interview as part of the review process.`
    },

    {
      step: 4,
      title: "Payment of Fees",
      description: `At the end of the application, you will be required to pay the registration fee  before continuing to the next step.`
    }
  ];
  

export default function ProcessTwo() {
  return (
    <section className="tp-apply-process-area grey-bg pb-60">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div id="down" className="tp-apply-process-wrapper">
            <h3 className="tp-apply-process-title">The Application Process</h3>

            {applicationProcess.map((step, index) => (
              <div key={index} className="tp-apply-process-box">
                <h4 className="tp-apply-process-subtitle">
                  <span>{step.step}</span>{step.title}
                </h4>
                <p dangerouslySetInnerHTML={{ __html: step.description }}></p>

                {step.linkText && step.linkHref && (
                  <Link className="tp-btn mt-30" href={step.linkHref}>
                    {step.linkText}
                  </Link>
                )}
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
