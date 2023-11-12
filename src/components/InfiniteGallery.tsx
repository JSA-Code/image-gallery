import { getImages } from "../app/infinite-scroll/actions";
import type { ImagesResults } from "@/models/Images";
import addBlurredDataUrls from "@/lib/getBase64";
import InfiniteScrollImages from "./InfiniteScrollImages";

type Props = { term?: string };

export default async function InfiniteGallery({ term = "curated" }: Props) {
  const url =
    term === "curated"
      ? `https://api.pexels.com/v1/curated`
      : `https://api.pexels.com/v1/search?query=${term}`;
  const images: ImagesResults | undefined = await getImages(url);

  if (!images || images.per_page === 0) {
    return <h2 className="m-4 text-2xl font-bold">No images found.</h2>;
  }

  const photosWithBlur = await addBlurredDataUrls(images);

  return (
    <>
      <InfiniteScrollImages initialPhotos={photosWithBlur} term={term} />
    </>
  );
}
