import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Hero from "@/components/Hero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soie tu estilo",
  description: "Soie su estilo.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Servicios"
        description="En Soie Styling, nos comprometemos a ofrecerte una experiencia de compra única con:"
      />
      <AboutSectionTwo/>
    </>
  );
};

export default AboutPage;
