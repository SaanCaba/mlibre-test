import { API_ITEM_URL } from "@/constants";
import { Item } from "@/models/items";
import { GetServerSideProps } from "next";
import React from "react";

interface Props {
  item: Item;
}

function ItemPage({ item }: Props) {
  return <section className="bg-white text-black">{item.title}</section>;
}

export default ItemPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await fetch(`${API_ITEM_URL}${params?.id}`);
  const item = (await response.json()) as Item;

  return {
    props: {
      item,
    },
  };
};
