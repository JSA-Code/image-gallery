import Gallery from "@/components/Gallery";

type Props = {
  params: {
    myParams: (string | undefined)[];
  };
};

export function generateMetadata({ params: { myParams } }: any) {
  // console.log(`PARAMS META: ${JSON.stringify(myParams)}`);
  const term = myParams?.[0] ?? "curated";
  const page = myParams?.[1] ?? "1";
  // console.log(`item: ${page}`);

  return {
    title: `Results for ${term} - Page ${page}`,
  };
}

export default function searchResults({ params: { myParams } }: Props) {
  // console.log(`PARAMS PAGE: ${myParams}`);
  const term = myParams?.[0] ?? "curated";
  const page = myParams?.[1] ?? "1";

  return <Gallery term={term} page={page} />;
}
