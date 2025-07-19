import React from "react";

interface IProps {
  params: Promise<{
    productId: string;
  }>;

  //   searchParams: string;
  // searchParams: Record<string, string | string[]>;
}
const DynamicProductPage = async ({ params }: IProps) => {
  const { productId } = await params;

  console.log("Products id: ", productId);
  return (
    <div>
      <h1>Dynamic Product Page: {productId} </h1>
      {/* <h1>Dynamic Product Page: {searchParams?.category} </h1> */}
    </div>
  );
};

export default DynamicProductPage;
