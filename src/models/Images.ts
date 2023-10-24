import { z } from "zod";

// schemas used by zod to parse (validation else throw ZodError) and type for TS
const ImageSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
  total_results: z.number(),
});

const PhotoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  src: z.object({
    large: z.string(),
  }),
  alt: z.string(),
  blurredDataUrl: z.string().optional(),
});

// exporting schema from both Image and Photo
export const ImagesPhotosSchema = ImageSchema.extend({
  photos: z.array(PhotoSchema),
});

// why do we need to export these types? For TS, DRY
// Why do we need to use infer? What is infer? To extract the inferred type
// Why do we not export ImageSchema? Not required
export type Photo = z.infer<typeof PhotoSchema>;
export type ImagesResults = z.infer<typeof ImagesPhotosSchema>;
