import { useQuery } from "@tanstack/react-query";
import { QUERY_GET_GUILD } from "constraint";
import { apiGetGuild } from "../services";

export function useGetGuild(payload) {
  const parser = new DOMParser();
  async function queryFn() {
    return await apiGetGuild(payload).then((res) => {
    //   const doc = parser.parseFromString(res.data);
    //   const bodyContent = doc.querySelector("body").innerHTML;
    //   console.log("content", bodyContent);
      console.log("response ", res);
      return res;
    });
  }

  return useQuery({
    queryKey: [QUERY_GET_GUILD],
    queryFn,
  });
}
