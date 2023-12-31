import type { ImagesResults } from "@/models/Images";
import { ImagesPhotosSchema } from "@/models/Images";
import env from "./env";

export default async function fetchImages(
  url: string
): Promise<ImagesResults | undefined> {
  try {
    const response = await fetch(url, {
      headers: { Authorization: env.PEXELS_API_KEY },
    });

    if (!response.ok) {
      throw new Error("FETCH FAILED!\n");
    }

    const imagesResults: ImagesResults = await response.json();

    // parses data to conform to the zod schema
    const parsedData = ImagesPhotosSchema.parse(imagesResults);

    if (parsedData.total_results === 0) {
      return undefined;
    }

    return parsedData;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.stack);
    }
  }
}
