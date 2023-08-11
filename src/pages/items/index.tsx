import Item from "@/components/Item";
import { API_SEARCH_URL } from "@/constants";
import { Item as ItemType } from "@/models/items";
import { GetServerSideProps } from "next";

interface Props {
  items: ItemType[];
}

function ItemsPage({ items }: Props) {
  if (items.length === 0) {
    return (
      <h1 className="text-center pt-5 text-3xl">
        No se encotraron productos para tu búsqueda!
      </h1>
    );
  }
  return (
    <section>
      <article className="grid bg-white gap-5">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </article>
    </section>
  );
}

export default ItemsPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await fetch(`${API_SEARCH_URL}${query.search}&limit=4`);
  const { results: items } = (await response.json()) as { results: Item[] };

  return {
    props: {
      items,
    },
  };
};
