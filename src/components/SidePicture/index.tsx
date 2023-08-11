import Image from "next/image";
import React, { useState } from "react";

interface Props {
  picture: string;
  title: string;
  setCurrentPicture: (val: string) => void;
}

function SidePicture({ picture, title, setCurrentPicture }: Props) {
  const [onHover, setOnHover] = useState(false);

  const handleHover = () => {
    setOnHover(true);
    setCurrentPicture(picture);
  };

  return (
    <div
      key={picture}
      onMouseEnter={handleHover}
      onMouseLeave={() => setOnHover(false)}
      className={`${
        onHover ? "border-[2px] border-blue-400" : "border-[1px] border-black"
      } rounded-sm max-w-[50px] max-h-[50px]`}
    >
      <Image
        src={picture}
        alt={title}
        width={50}
        height={50}
        className="h-full w-full object-contain"
      />
    </div>
  );
}

export default SidePicture;
