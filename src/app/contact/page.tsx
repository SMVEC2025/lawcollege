import { Metadata } from "next";
import ContactArea from "@/components/contact/contact-area";
import ContactInfoArea from "@/components/contact/contact-info-area";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";

export const metadata: Metadata = {
    title: "Contact - Acadia",
};

export default function ContactPage() {
    return (
        <main>

            {/* contact area start */}
            {/* contact area end */}
            <BreadcrumbTwo subtitle="contact us" title="contact us"/>
            <ContactArea />

            {/* contact info area start */}
            <ContactInfoArea />
            {/* contact info area end */}

            {/* map area start */}
            <div className="tp-map-area">
                <div className="tp-contact-map-content">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.8617268671014!2d79.63524319999999!3d11.914709799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a535942a5917ebb%3A0xfbd2ce40cafa758d!2sSri%20Manakula%20Vinayagar%20Centre%20Of%20legal%20Education!5e0!3m2!1sen!2sin!4v1747454604199!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            {/* map area end */}
        </main>
    );
}
