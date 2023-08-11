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
    <header className="h-16 px-[150px] bg-yellow-200 flex items-center">
      <form
        onSubmit={(e) => onSubmit(e)}
        className="m-auto flex gap-3 max-w-screen-xl flex-1"
      >
        <input
          ref={inputRef}
          className="h-8 rounded-sm flex-1 px-4 focus:outline-none"
          type="text"
          placeholder="Producto..."
          required
        />
        <button
          className="px-4 py-2 h-8 rounded-full transition-all duration-700 ease-in hover:bg-zinc-300"
          type="submit"
        >
          <AiOutlineSearch size={20} />
        </button>
      </form>
    </header>
  );
}

export default NavBar;
