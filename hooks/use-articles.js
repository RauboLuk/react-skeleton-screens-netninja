import useSWR from "swr";

import fetch from "../libs/fetch";

function useArticles() {
  return useSWR("https://jsonplaceholder.typicode.com/posts", fetch);
}

export default useArticles;
