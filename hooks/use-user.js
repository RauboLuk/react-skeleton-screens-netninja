import useSWR from "swr";

import fetch from "../libs/fetch";

function useUser() {
  return useSWR("https://jsonplaceholder.typicode.com/users/1", fetch);
}

export default useUser;
