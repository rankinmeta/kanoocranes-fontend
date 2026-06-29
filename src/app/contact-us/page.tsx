import FormSection from "@/components/pages/contact-us/form-section";
import HeroSection from "@/components/pages/contact-us/hero-section";
import Section2 from "@/components/pages/contact-us/section2";
import FooterCTASection from "@/components/pages/home/footer-cta-section";
import { LogoMarquee } from "@/components/pages/home/logo-marquee";

const ContactUsPage = () => {
    return (
        <main>
            <HeroSection
                title="Contact Kanoo Cranes"
                description="Get a quote or schedule a consultation with our crane
                        specialists. Delivering structural strength and
                        technical expertise across the globe."
                button1={{
                    id: 1,
                    label: "Request a Quote",
                    href: "/",
                    isExternal: false,
                }}
                button2={{
                    id: 2,
                    label: "Talk to an Expert",
                    href: "/",
                    isExternal: false,
                }}
            />
            <Section2 />
            <FormSection />
            <LogoMarquee partners_section={
                {
                    id: 1,
                    logo: [
                        {
                            id: 1,
                            url: "http://localhost:3000/local/brand4.png",
                            alternativeText: "partner1",
                            documentId: "1",
                        },
                        {
                            id: 2,
                            url: "http://localhost:3000/local/brand2.png",
                            alternativeText: "partner2",
                            documentId: "2",
                        },
                        {
                            id: 3,
                            url: "http://localhost:3000/local/brand3.png",
                            alternativeText: "partner3",
                            documentId: "3",
                        }
                    ]
                }
            } />
            <FooterCTASection hide />
        </main>
    );
};

export default ContactUsPage;
