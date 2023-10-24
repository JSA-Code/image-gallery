import Gallery from "@/components/Gallery";

type Props = {
  params: {
    pars: (string | undefined)[];
  };
};

export function generateMetadata({ params: { pars } }: any) {
  // console.log(`PARAMS META: ${JSON.stringify(myParams)}`);
  const term = pars?.[0] ?? "curated";
  const page = pars?.[1] ?? "1";
  // console.log(`item: ${page}`);

  return {
    title: `Results for ${term} - Page ${page}`,
  };
}

export default function searchResults({ params: { pars } }: Props) {
  // console.log(`PARAMS PAGE: ${myParams}`);
  const term = pars?.[0] ?? "curated";
  const page = pars?.[1] ?? "1";

  return <Gallery term={term} page={page} />;
}
