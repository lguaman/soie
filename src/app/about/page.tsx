import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

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
        pageName="Acerca"
        description="Gracias por ser parte de nuestra comunidad, donde nos encanta complementar tu belleza, con piezas que expresan tu personalidad. 
Nuestras colecciones están diseñadas para llevar tu estilo a otro nivel.
En Soie Styling, te ofrecemos una experiencia de compra única:
Atención al cliente personalizada: Te ayudaremos a encontrar la pieza perfecta 
Envíos nacionales: Disfruta de nuestras joyas sin importar dónde te encuentres.
Diseños exclusivos y en tendencia: Piezas únicas que se adaptan a todos los estilos.
"
      />
    </>
  );
};

export default AboutPage;
