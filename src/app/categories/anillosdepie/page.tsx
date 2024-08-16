"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Papa from 'papaparse';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Paper } from "@mui/material";
import { Metadata } from "next";

const Anillosdepie = () => {
  const [parsedCsvData, setParsedCsvData] = useState([]);
  useEffect(() => {
    async function getData() {
        const response = await fetch("products/anillosdepie.csv");
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
  return (
    <>
      <Breadcrumb
        pageName="Anillos de Pie"
        description="Añade un toque de elegancia a tus pies con nuestros anillos diseñados cuidadosamente."
      />
<div className="Archive flex justify-center">
            <table className="ArchiveTable">
            <thead>
                <tr>
                  <th className="px-4 py-3 text-center font-medium text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    Imagen
                  </th>
{/*                  <th className="px-4 py-3 text-center font-medium text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    Código
                  </th>
*/}                  <th className="px-4 py-3 text-center font-medium text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
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
                        src={`/images/products/anillosdepie/${parsedData.imagen}.1.webp`} // Use template literal for clarity
                        width={100}
                        height={100}
                        alt={`Product Image for ${parsedData.item}`} // Dynamic alt text
                        className="w-40 h-40 object-cover"
                      />
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600 dark:text-white text-center">{parsedData.codigo}</td>
{/*                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600 text-center">{parsedData.articulo}</td> */}
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600 dark:text-white text-center">{parsedData.descripcion}</td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600 dark:text-white text-center">{parsedData.precio}</td>
                  </tr>
                ))}
          </tbody>
            </table>
  </div>
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

export default Anillosdepie;
