import React from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";

const SingleBrand = ({ brand, style }: { brand: Brand, style: React.CSSProperties }) => {
  const { image, name } = brand;

  return (
    <p
      className="animate_top max-w-full relative block h-20 w-[160px]"
      style={style}
    >
      <Image
        className="transition-all duration-300 dark:hidden"
        src={image}
        alt={name}
        fill
      />
    </p>
  );
};

export default SingleBrand;
