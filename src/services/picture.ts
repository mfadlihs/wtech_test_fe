import ApiService, { ApiResponse } from "@/lib/axios";

export type Picture = {
  id: string;
  name: string;
  url: string;
};

class PictureApiService {
  private api = new ApiService();

  async getPictures(): Promise<ApiResponse<Picture[]> | null> {
    const res = await this.api.get<ApiResponse<Picture[]>>("/api/images");
    return res.data ?? null;
  }

  async getPictureById(id: string): Promise<ApiResponse<Picture> | null> {
    const res = await this.api.get<ApiResponse<Picture>>(`/api/images/${id}`);
    return res.data ?? null;
  }
}

export default new PictureApiService();
