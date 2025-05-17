import MainProvider from "@/components/provider/main-provider";
import BackToTop from "@/components/back-to-top";
import HeaderOne from "@/components/header/header-one";
import FooterOne from "@/components/footer/footer-one";
import InstantForm from '@/components/formAdmission/InstantForm'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
      {/* header area start */}
      <HeaderOne/>
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <FooterOne/>
      <InstantForm/>
      {/* footer area end */}

      {/* back to top */}
      <BackToTop/>
      {/* back to top */}
    </MainProvider>
  );
}
