import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import Form from '../../../components/formAdmission/Form'
export const metadata: Metadata = {
  title: "University Application Form - Acadia",
};

export default function UniversityApplicationFormPage() {
  return (
    <main>
      <BreadcrumbTwo title="Enquiry Form" subtitle='enquiry Form'/>
       <div className="af_main" style={{backgroundColor:"#eeeff3`"}}>
        <Form/>
       </div>
    </main>
  );
}
