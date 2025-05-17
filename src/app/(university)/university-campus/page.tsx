import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import CampusChooseAreaTwo from "@/components/campus/campus-choose-area-2";
import CampusStudentArea from "@/components/campus/campus-student-area";
import CampusVideoArea from "@/components/campus/campus-video-area";
import CampusLifeArea from "@/components/campus/campus-life-area";
import Facilities from "./component/Facilities";

export const metadata: Metadata = {
  title: "University Campus - Acadia",
};

export default function UniversityCampusPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo title="Campus Life" subtitle="Campus Life" />
      {/* breadcrumb area end */}

      {/* campus choose area start */}
      <CampusChooseAreaTwo />
      {/* campus choose area end */}

      {/* counter area start */}
      <Facilities/>
      {/* counter area end */}

      {/* campus student area start */}
      <CampusStudentArea/>
      {/* campus student area end */}

      {/* campus activity area start */}
      {/* <CampusActivityArea/> */}
      {/* campus activity area end */}

      {/* campus video area start */}
      <CampusVideoArea/>
      {/* campus video area end */}

      {/* campus life area start */}
      <CampusLifeArea/>
      {/* campus life area end */}
    </main>
  );
}
