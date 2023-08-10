import Price from "@/Helpers/Price";
import { API_ITEM_URL } from "@/constants";
import { Description, Item } from "@/models/items";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React, { useMemo } from "react";

interface Props {
  item: Item;
  description: string;
}

function ItemPage({ item, description }: Props) {
  const picture = useMemo(() => {
    return item.pictures.map((picture) => {
      return picture.url;
    });
  }, []);
  console.log(picture);
  return (
    <section className="bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-black">
      <article>
        <Image
          src={picture[0]}
          alt={item.title}
          width={240}
          height={240}
          className="object-contain m-auto"
        />
        <div className="p-3">
          <Price price={item.price} currency_id={item.currency_id} />
          <h1 className="text-2xl pb-3">{item.title}</h1>
          <hr className="border border-[0.4] border-black" />
          <p className="pt-3 opacity-50">{description}</p>
        </div>
      </article>
    </section>
  );
}

export default ItemPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const responseItemProm = fetch(`${API_ITEM_URL}${params?.id}`).then(
    (res) => res.json() as unknown as Item
  );
  const responseDescriptionProm = fetch(
    `${API_ITEM_URL}${params?.id}/description`
  ).then((res) => res.json() as unknown as Description);

  const [item, { plain_text }] = await Promise.all([
    responseItemProm,
    responseDescriptionProm,
  ]);

  return {
    props: {
      item,
      description: plain_text,
    },
  };
};
