import Link from "next/link";

type Props = {
  term: string;
  page: string | undefined;
  prevPage: string | null;
  nextPage: string | null;
};

export default function Footer({ term, page, prevPage, nextPage }: Props) {
  if (!prevPage && !nextPage) {
    return;
  }

  const pageNums: number[] = [];

  if (prevPage && nextPage) {
    for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
      pageNums.push(i);
    }
  }

  const nextPageArea = nextPage ? (
    <Link
      href={`/results/pagination/${term}/${nextPage}`}
      className={!prevPage ? "mx-auto" : ""}
    >
      {!prevPage ? "more" : null} &gt;
    </Link>
  ) : null;

  const prevPageArea = prevPage ? (
    <>
      <Link
        href={`/results/pagination/${term}/${prevPage}`}
        className={!nextPage ? "mx-auto" : ""}
      >
        &lt; {!nextPage ? "back" : null}
      </Link>

      {pageNums.map((num, i) =>
        page && num === parseInt(page) ? (
          <span key={i}>{num}</span>
        ) : (
          <Link
            key={i}
            href={`/results/pagination/${term}/${num}`}
            className="underline"
          >
            {num}
          </Link>
        )
      )}
    </>
  ) : null;

  return (
    <footer className="flex flex-row justify-between items-center px-2 py-4 font-bold text-xl xl:text-lg w-60 mx-auto">
      {prevPageArea}
      {nextPageArea}
    </footer>
  );
}
