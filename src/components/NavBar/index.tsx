import { useRouter } from "next/router";
import React, { useRef } from "react";

import { AiOutlineSearch } from "react-icons/ai";

function NavBar() {
  const router = useRouter();
  const inputRef = useRef<null | HTMLInputElement>(null);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: "items",
      query: {
        search: inputRef.current?.value,
      },
    });
  };
  return (
    <header className="h-16 px-4 bg-yellow-200 flex">
      <form
        onSubmit={(e) => onSubmit(e)}
        className="m-auto flex gap-3 max-w-screen-xl w-80"
      >
        <input
          ref={inputRef}
          className="h-8 rounded-sm flex-1 px-4 focus:outline-none"
          type="text"
          placeholder="Producto..."
        />
        <button
          className="px-4 py-2 h-8 rounded-full transition-all duration-700 ease-in hover:bg-zinc-300"
          type="submit"
        >
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}

export default NavBar;
