import { useQuery } from "@tanstack/react-query";
import { QUERY_GET_GUILD } from "constraint";
import { apiGetGuild } from "../services";

export function useGetGuild(payload) {
  async function queryFn() {
    return await apiGetGuild(payload).then((res) => {
      return res;
    });
  }

  return useQuery({
    queryKey: [QUERY_GET_GUILD],
    queryFn,
  });
}
