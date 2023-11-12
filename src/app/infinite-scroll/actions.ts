"use server";
import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";

export async function getImages(url: string) {
  const images: ImagesResults | undefined = await fetchImages(url);
  return images;
}
