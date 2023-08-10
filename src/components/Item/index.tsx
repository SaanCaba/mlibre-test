import { Item } from "@/models/items";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  item: Item;
}

function Item({ item }: Props) {
  return (
    <Link key={item.id} href={`/items/${item.id}`}>
      <div className="flex gap-5">
        <div>
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={90}
            height={90}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">
            {Number(item.price).toLocaleString("es-AR", {
              style: "currency",
              currency: item.currency_id,
            })}
          </span>
          <p>{item.title}</p>
        </div>
        <span className="ml-auto opacity-50 capitalize text-sm pr-[15px]">
          <i>{item.address.city_name}</i>
        </span>
      </div>
    </Link>
  );
}

export default Item;
