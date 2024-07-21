import { Feature } from "@/types/feature";
import Image from "next/image";


const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
    <Image
      src={`/images/products/7.1.webp`} // Use template literal for clarity
      width={100}
      height={100}
      alt={`Product Image for Rings}`} // Dynamic alt text
      className="w-40 h-40 object-cover"
    />    
  ),
    title: "Hermosos aretes colgantes",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image
      src={`/images/products/67.1.webp`} // Use template literal for clarity
      width={100}
      height={100}
      alt={`Product Image for Rings}`} // Dynamic alt text
      className="w-40 h-40 object-cover"
    />    
    ),
    title: "Diseños exclusivos",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image
      src={`/images/products/33.1.webp`} // Use template literal for clarity
      width={100}
      height={100}
      alt={`Product Image for Rings}`} // Dynamic alt text
      className="w-40 h-40 object-cover"
    />    
    ),
    title: "Aretes minimimalistas",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image
      src={`/images/products/77.1.webp`} // Use template literal for clarity
      width={100}
      height={100}
      alt={`Product Image for Rings}`} // Dynamic alt text
      className="w-40 h-40 object-cover"
    />    
    ),
    title: "Tu mano se verá hermosa",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image
      src={`/images/products/87.1.webp`} // Use template literal for clarity
      width={100}
      height={100}
      alt={`Product Image for Rings}`} // Dynamic alt text
      className="w-40 h-40 object-cover"
    />    
    ),
    title: "Estilizadas cadenas",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image
      src={`/images/products/27.1.webp`} // Use template literal for clarity
      width={100}
      height={100}
      alt={`Product Image for Rings}`} // Dynamic alt text
      className="w-40 h-40 object-cover"
    />    
    ),
    title: "Hermosos anillos",
    paragraph:
      "",
  },
];
export default featuresData;
