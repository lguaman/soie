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

const Piercings = () => {
  const [parsedCsvData, setParsedCsvData] = useState([]);
  const [showFullImage, setShowFullImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    async function getData() {
        const response = await fetch("products/piercings.csv");
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

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setShowFullImage(true);
  };

  const closeFullImage = () => {
    setShowFullImage(false);
  };

  return (
    <>
      <Breadcrumb
        pageName="Piercings"
        description="Variedad de delicados piercings que marcan tu estilo."
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
                  <th className="px-4 py-3 text-center font-medium text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    Producto
                  </th>
*/}                  <th className="px-4 py-3 text-center font-medium text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    Descripción
                  </th>
                  <th className="px-4 py-3 text-center font-medium text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    Precio
                  </th>
                </tr>
              </thead>
          <tbody className="dark:text-white dark:bg-black">
              {parsedCsvData &&
                parsedCsvData.map((parsedData, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                      <Image
                        src={`/images/products/piercings/${parsedData.imagen}.1.webp`} // Use template literal for clarity
                        width={100}
                        height={100}
                        alt={`Product Image for ${parsedData.item}`} // Dynamic alt text
                        className="w-40 h-40 object-cover cursor-pointer"
                        onClick={() => handleImageClick(`/images/products/piercings/${parsedData.imagen}.1.webp`)}
                      />
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600 text-center">{parsedData.codigo}</td>
                    </td>
{/*                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600 text-center">{parsedData.articulo}</td> */}
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-600 text-center">{parsedData.descripcion}</td>
                    <td>{parsedData.precio}</td>
                  </tr>
                ))}
          </tbody>
            </table>
  </div>
    {showFullImage && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <Image
            src={selectedImage}
            alt="Full Size Image"
            width={600}
            height={400}
            className="object-contain"
          />
          <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md" onClick={closeFullImage}>
            Cerrar
          </button>
        </div>
      </div>
    )}
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

export default Piercings;
