import { useQuery } from "@tanstack/react-query";
import { api, type ProductsListResponse } from "@shared/routes";

export function useProducts() {
  return useQuery({
    queryKey: [api.products.list.path],
    queryFn: async () => {
      const res = await fetch(api.products.list.path, { credentials: "include" });
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      // Ensure runtime validation of API response
      return api.products.list.responses[200].parse(data);
    },
  });
}
