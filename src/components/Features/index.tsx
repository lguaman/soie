import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Nuestros Productos"
            paragraph={`
              - Ear Cuffs: Adornos para la oreja sin necesidad de perforaciones.
              - Body Chains: Cadenas corporales que añaden un toque de estilo a tu outfit.
              - Pulseras: Desde estilos minimalistas hasta diseños más elaborados.
              - Aretes: Variedad de estilos que van desde lo clásico hasta lo contemporáneo.
              - Tobilleras: Detalles delicados y modernos.
              - Anillos de Uñas: Una tendencia audaz y moderna.
              - Anillos de Pie: Añade un toque de elegancia a tus pies.
              - Cadenas de Cabeza: Accesorios únicos, perfectos para eventos especiales.
              - Cadenas de Vientre: Realza tu figura con nuestras cadenas de vientre.
              - Cadenas de Espalda: Diseños sofisticados que añaden un toque de glamour a tu espalda.
              - Piercings: Variedad de delicados piercings que marcan tu estilo.
              - Soportes de Celulares de Diseño: Eleva tu estilo incluso en tu celular.
              `}

            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
