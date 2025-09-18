"use client";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import pictureService, { Picture } from "@/services/picture";

export const usePictures = (
  options?: Omit<
    UseQueryOptions<Picture[], Error, Picture[], ["pictures"]>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery<Picture[], Error, Picture[], ["pictures"]>({
    queryKey: ["pictures"],
    queryFn: async () => {
      const res = await pictureService.getPictures();
      if (res.status >= 200 && res.status < 300 && res.data) return res.data;
      throw new Error(res.message);
    },
    ...options,
  });
};

export const usePictureDetail = (
  id: string | undefined,
  options?: Omit<
    UseQueryOptions<Picture, Error, Picture, ["pictures", string]>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery<Picture, Error, Picture, ["pictures", string]>({
    queryKey: ["pictures", String(id)],
    enabled: Boolean(id) && (options?.enabled ?? true),
    queryFn: async () => {
      if (!id) throw new Error("Missing picture id");
      const res = await pictureService.getPictureById(id);
      if (res.status >= 200 && res.status < 300 && res.data) return res.data;
      throw new Error(res.message);
    },
    ...options,
  });
};

export default { usePictures, usePictureDetail };
