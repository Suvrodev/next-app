import Image from "next/image";
import React from "react";

import mine from "@/assets/all.jpg";
import reduxImage from "@/assets/Redux.webp";

const GalleryPage = () => {
  const imageLink =
    "https://i.ibb.co/cSjhqMrx/understanding-redux-tutorial-examples.jpg";
  return (
    <div>
      <h1 className="text-4xl text-center underline  underline-offset-8 decoration-blue-500 mb-10">
        Gallery Page
      </h1>
      <div className="flex gap-x-10">
        {/* <div>
          <h1 className="text-4xl text-center">Regular Image Tag</h1>
          <img src={imageLink} alt="" className="w-[450px] mx-auto" />
        </div> */}

        <div>
          <h1 className="text-4xl text-center">Next JS Image Tag</h1>
          <Image
            src={imageLink}
            alt="Redux"
            width={450}
            height={450}
            className="mx-auto"
            loading="lazy"
          />
        </div>
        <div className="">
          <h1 className="text-4xl text-center">Asset (JPG)</h1>
          {/* <Image
            src={mine}
            alt="Mine"
            width={450}
            height={250}
            className="object-contain "
            loading="lazy"
          /> */}
          <div className="relative w-[450px] h-[450px]">
            <Image
              src={mine}
              alt="Mine"
              fill
              className="object-cover rounded"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 450px"
            />
          </div>
        </div>
        <div className="">
          <h1 className="text-4xl text-center">Asset (Webp)</h1>
          <Image
            src={reduxImage}
            alt="Redux"
            width={450}
            height={450}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
