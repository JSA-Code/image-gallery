"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();
  const routeType = useRef<string | undefined>();

  useEffect(() => {
    const last = pathname.split("/").pop();
    if (last === "pagination" || last === "infinite-scroll") {
      routeType.current = last;
    }
  }, [pathname]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) router.push(`/results/${routeType.current}/${search}`);
    setSearch("");
  };

  return (
    <form
      className="flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="bg-slate-50 p-2 w-[260px] sm:w-80 text-xl rounded-xl text-slate-900"
      />
    </form>
  );
}
