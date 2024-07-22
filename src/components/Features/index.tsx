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
            title="Nuestros  Productos"
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
