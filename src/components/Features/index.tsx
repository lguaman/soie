"use client"
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Papa from 'papaparse';
import { Divider } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Card } from '@mui/material'
import ContactPage from "@/app/contact/page";
import Contact from "../Contact";
import Link from "next/link";


const Features =  () => {
  const [parsedCsvData, setParsedCsvData] = useState([]);
  useEffect(() => {
      async function getData() {
          const response = await fetch("products/list.csv");
          const reader = response.body.getReader();
          const result = await reader.read(); // raw array
          const decoder = new TextDecoder("utf-8");
          const csv = decoder.decode(result.value); // the csv text
          const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
          const rows = results.data; // array of objects
          setParsedCsvData(rows);
      }
      getData();
  }, []);  

  var items = [
    {    
        name: "Cadena de Mano Styling",
        description: "¡Probablemente lo mas hermoso que has visto!",
        image: "/images/products/1.1.webp"
    },
    {
        name: "Cadena de Espalda",
        description: "Exclusivo diseño!",
        image: "/images/products/2.1.webp"
    },
    {
      name: "Cadena de Pecho",
      description: "Hermosos colores y estilos",
      image: "/images/products/3.1.webp"
  },
  {
      name: "Cadena de Torso",
      description: "¡Hermosos colores y único estilo!",
      image: "/images/products/4.1.webp"
  }

  ]

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Explore Nuestra Exclusiva Colección"
            paragraph={""}
            center
          />

        <center>
        <div style={{"paddingTop": "50px", width: "60%"}}>
          <Carousel>
            {items.map( (item, i) => <Item key={i} item={item} /> )}
        </Carousel>
         </div>
         </center>
          <div className="container" style={{"paddingTop": "50px"}}>
          <SectionTitle
            title="Nuestras Categorias"
            paragraph={""}
            center
          />
          </div>

<div className="flex flex-wrap justify-center gap-4 dark:text-white/70">
          <div className="card glass w-96">
              <figure>
            <Image
              src="/images/products/30.1.webp"
              alt="Joyas!" 
              width={200}
              height={200}
              />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ear Cuffs</h2>
            <p>Adornos para la oreja sin necesidad de perforaciones. Diseños modernos e innovadores que complementan cualquier look.
            </p>
            <div className="card-actions justify-end">
              <Link href="/categories/earcuffs" className="btn btn-primary">Ver</Link>
            </div>
          </div>
        </div>
        <div className="card glass w-96">
              <figure>
            <Image
              src="/images/products/87.1.webp"
              alt="Joyas!" 
              width={200}
              height={200}
              />
          </figure>
          <div className="card-body dark:text-white/70">
            <h2 className="card-title">Body Chains</h2>
            <p className="dark:text-white/70">Cadenas corporales que añaden un toque de estilo a tu outfit, perfectas para ocasiones especiales, la playa, o un estilo diario aesthetik.
            </p>
            <div className="card-actions justify-end">
            <Link href="/categories/bodychains" className="btn btn-primary">Ver</Link>
            </div>
          </div>
        </div>
        <div className="card glass w-96">
              <figure>
            <Image
              src="/images/products/69.1.webp"
              alt="Joyas!" 
              width={200}
              height={200}
              />
          </figure>
          <div className="card-body dark:text-white/70">
            <h2 className="card-title dark:text-white/70">Pulseras</h2>
            <p className="dark:text-white/70">Desde estilos minimalistas hasta diseños más elaborados, nuestras pulseras están hechas para destacar.
            </p>
            <div className="card-actions justify-end">
            <Link href="/categories/pulseras" className="btn btn-primary">Ver</Link>
            </div>
          </div>
        </div>
        <div className="card glass w-96">
              <figure>
            <Image
              src="/images/products/29.1.webp"
              alt="Joyas!" 
              width={200}
              height={200}
              />
          </figure>
          <div className="card-body">
            <h2 className="card-title dark:text-white/70">Aretes</h2>
            <p className="dark:text-white/70">Variedad de estilos que van desde lo clásico hasta lo contemporáneo, ideales para tu día a día.
            </p>
            <div className="card-actions justify-end">
            <Link href="/categories/aretes" className="btn btn-primary">Ver</Link>
            </div>
          </div>
        </div>
        <div className="card glass w-96">
              <figure>
            <Image
              src="/images/products/9.1.webp"
              alt="Joyas!" 
              width={200}
              height={200}
              />
          </figure>
          <div className="card-body dark:text-white/70">
            <h2 className="card-title">Tobilleras</h2>
            <p>Detalles delicados y modernos, perfectos para el verano y para añadir un toque especial a tu estilo.
            </p>
            <div className="card-actions justify-end">
            <Link href="/categories/tobilleras" className="btn btn-primary">Ver</Link>
            </div>
          </div>
        </div>
        <div className="card glass w-96">
              <figure>
            <Image
              src="/images/products/45.1.webp"
              alt="Joyas!" 
              width={200}
              height={200}
              />
          </figure>
          <div className="card-body dark:text-white/70">
            <h2 className="card-title">Anillos de Uñas</h2>
            <p>Una tendencia audaz y moderna que realza tus uñas con originalidad.
            </p>
            <div className="card-actions justify-end">
            <Link href="/categories/anillosdeunas" className="btn btn-primary">Ver</Link>
            </div>
          </div>
        </div>
        <div className="card glass w-96">
              <figure>
            <Image
              src="/images/products/23.1.webp"
              alt="Joyas!" 
              width={200}
              height={200}
              />
          </figure>
          <div className="card-body dark:text-white/70">
            <h2 className="card-title">Anillos de Pie</h2>
            <p>Añade un toque de elegancia a tus pies con nuestros anillos diseñados cuidadosamente.
            </p>
            <div className="card-actions justify-end">
            <Link href="/categories/anillosdepie" className="btn btn-primary">Ver</Link>
            </div>
          </div>
        </div>
        <div className="card glass w-96">
              <figure>
            <Image
              src="/images/products/16.1.webp"
              alt="Joyas!" 
              width={200}
              height={200}
              />
          </figure>
          <div className="card-body dark:text-white/70">
            <h2 className="card-title">Cadenas de Cabeza</h2>
            <p>Accesorios únicos, perfectos para eventos especiales con un estilo romántico y elegante.
            </p>
            <div className="card-actions justify-end">
            <Link href="/categories/cadenasdecabeza" className="btn btn-primary">Ver</Link>
            </div>
          </div>
        </div>
        <div className="card glass w-96">
              <figure>
            <Image
              src="/images/products/1.1.webp"
              alt="Joyas!" 
              width={200}
              height={200}
              />
          </figure>
          <div className="card-body dark:text-white/70">
            <h2 className="card-title">Cadenas de Vientre</h2>
            <p> Realza tu figura con nuestras cadenas de vientre, ideales para lucir con tus crop tops o en la playa.</p>
            <div className="card-actions justify-end">
            <Link href="/categories/cadenasdevientre" className="btn btn-primary">Ver</Link>
            </div>
          </div>
        </div>
        <div className="card glass w-96">
              <figure>
            <Image
              src="/images/products/70.1.webp"
              alt="Joyas!" 
              width={200}
              height={200}
              />
          </figure>
          <div className="card-body dark:text-white/70">
            <h2 className="card-title">Cadenas de Espalda</h2>
            <p>Diseños sofisticados que añaden un toque de glamour a tu espalda, perfectos para vestidos con escote trasero.
            </p>
            <div className="card-actions justify-end">
            <Link href="/categories/cadenasdeespalda" className="btn btn-primary">Ver</Link>
            </div>
          </div>
        </div>
        <div className="card glass w-96">
              <figure>
            <Image
              src="/images/products/43.1.webp"
              alt="Joyas!" 
              width={200}
              height={200}
              />
          </figure>
          <div className="card-body dark:text-white/70">
            <h2 className="card-title">Piercings</h2>
            <p>Variedad de delicados piercings que marcan tu estilo.
            </p>
            <div className="card-actions justify-end">
            <Link href="/categories/piercings" className="btn btn-primary">Ver</Link>
            </div>
          </div>
        </div>
        <div className="card glass w-96">
              <figure>
            <Image
              src="/images/products/13.1.webp"
              alt="Joyas!" 
              width={200}
              height={200}
              />
          </figure>
          <div className="card-body dark:text-white/70">
            <h2 className="card-title">Soportes de Celulares de Diseño</h2>
            <p>Eleva tu estilo incluso en tu celular, combina la funcionalidad de nuestros soportes con los diseños más kiut.
            </p>
            <div className="card-actions justify-end">
            <Link href="/categories/soportedecelulares" className="btn btn-primary">Ver</Link>
            </div>
          </div>
        </div>
</div>

<div className="container" style={{"paddingTop": "50px"}}>
          <SectionTitle
            title="Todos Nuestros  Productos"
            paragraph={""}
            center
          />
</div>
<div className="Archive">
            <table className="ArchiveTable">
            <thead>
                <tr>
                  <th className="px-4 py-3 text-center font-medium text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    Imagen
                  </th>
                  <th className="px-4 py-3 text-center font-medium text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    Producto
                  </th>
                  <th className="px-4 py-3 text-center font-medium text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    Descripción
                  </th>
                  <th className="px-4 py-3 text-center font-medium text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    Precio
                  </th>
                </tr>
              </thead>

              <tbody>
  {parsedCsvData &&
    parsedCsvData.map((parsedData, index) => (
      <tr key={index}>
        <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
          <Image
            src={`/images/products/${parsedData.item}.1.webp`} // Use template literal for clarity
            width={100}
            height={100}
            alt={`Product Image for ${parsedData.item}`} // Dynamic alt text
            className="w-40 h-40 object-cover"
          />
        </td>
        <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600 text-center">{parsedData.articulo}</td>
        <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600 text-center">{parsedData.descripcion}</td>
        <td>{parsedData.precio}</td>
      </tr>
    ))}
</tbody>
            </table>
  </div>
</div>
</section>
    </>
  );
};

function Item(props)
{
    return (
        <Paper className="Item" elevation={4} square={false}>
            <h2>{props.item.name}</h2>
            <h3>{props.item.description}</h3>
            <Image
              src={props.item.image} // Use template literal for clarity
              width={100}
              height={100}
              alt={`Product Image for Rings}`} // Dynamic alt text
              className="w-80 h-80 object-cover"
            />    

            <Button className="CheckButton">
                Soie
            </Button>
        </Paper>
    )
}

export default Features;
