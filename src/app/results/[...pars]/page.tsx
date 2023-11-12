import Gallery from "@/components/Gallery";
import InfiniteGallery from "@/components/InfiniteGallery";

type Props = {
  params: {
    pars: (string | undefined)[];
  };
};

export function generateMetadata({ params: { pars } }: Props) {
  const term = pars?.[1] ?? "curated";
  const page = pars?.[2] ?? "1";

  return {
    title: `Results for ${term} - Page ${page}`,
  };
}

export default function searchResults({ params: { pars } }: Props) {
  const routeType = pars?.[0];
  const term = pars?.[1] ?? "curated";
  const page = pars?.[2] ?? "1";

  if (routeType === "pagination") {
    return <Gallery term={term} page={page} />;
  } else if (routeType === "infinite-scroll") {
    return <InfiniteGallery term={term} />;
  }
}
