import React from "react";

function Price({ price, currency_id }: { price: number; currency_id: string }) {
  return (
    <span className="font-bold">
      {Number(price).toLocaleString("es-AR", {
        style: "currency",
        currency: currency_id,
      })}
    </span>
  );
}

export default Price;
