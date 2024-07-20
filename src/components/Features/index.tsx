import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = async () => {
  
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Nuestros Productos"
            paragraph={`
`}
            center
          />

{/*          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
*/}
          {/* Table Section */}
          <div className="mt-16">
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Explore Nuestra Colección
            </h2>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    Imagen
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    Producto
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    Descripción
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    Precio
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Add your product data here */}
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    <img src="/images/products/9.1.webp" alt="Ear Cuffs" className="w-40 h-40 object-cover" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Ear Cuffs
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Adornos para la oreja sin necesidad de perforaciones.
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    $15
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    <img src="/images/products/1.1.webp" alt="Body Chains" className="w-40 h-40 object-cover" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Body Chains
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Body Chains: Cadenas corporales que añaden un toque de estilo a tu outfit.
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    $15
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    <img src="/images/products/2.1.webp" alt="Pulseras" className="w-40 h-40 object-cover" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Pulseras
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Desde estilos minimalistas hasta diseños más elaborados.
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    $15
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    <img src="/images/products/3.1.webp" alt="Aretes" className="w-40 h-40 object-cover" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Aretes  
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Variedad de estilos que van desde lo clásico hasta lo contemporáneo.
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    $15
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    <img src="/images/products/4.1.webp" alt="Tobilleras" className="w-40 h-40 object-cover" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Tobilleras
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Detalles delicados y modernos.
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    $15
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    <img src="/images/products/5.1.webp" alt="Anillos de Uñas" className="w-40 h-40 object-cover" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Anillos de Uñas
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Una tendencia audaz y moderna.
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    $15
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    <img src="/images/products/6.1.webp" alt="Anillos de Pie" className="w-40 h-40 object-cover" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Anillos de Pie
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Añade un toque de elegancia a tus pies.
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    $15
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    <img src="/images/products/7.1.webp" alt="Cadenas de Cabeza" className="w-40 h-40 object-cover" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Cadenas de Cabeza
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Accesorios únicos, perfectos para eventos especiales.
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    $15
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    <img src="/images/products/8.1.webp" alt="Cadenas de Vientre" className="w-40 h-40 object-cover" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Cadenas de Vientre 
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Realza tu figura con nuestras cadenas de vientre.
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    $15
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    <img src="/images/products/9.1.webp" alt="Cadenas de Espalda" className="w-40 h-40 object-cover" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Cadenas de Espalda  
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Diseños sofisticados que añaden un toque de glamour a tu espalda.
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    $15
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    <img src="/images/products/10.1.webp" alt="Piercings" className="w-40 h-40 object-cover" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Piercings
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Variedad de delicados piercings que marcan tu estilo.
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    $15
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    <img src="/images/products/11.1.webp" alt="Soportes de Celulares de Diseño" className="w-40 h-40 object-cover" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Soportes de Celulares de Diseño 
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    Eleva tu estilo incluso en tu celular.
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    $15
                  </td>
                </tr>

                {/* Add more rows for other products */}
              </tbody>
            </table>
          </div>

{/*          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
*/}
        </div>
      </section>
    </>
  );
};

export default Features;
