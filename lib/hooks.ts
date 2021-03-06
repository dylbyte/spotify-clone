import { Playlist } from "@prisma/client";
import useSWR from "swr";
import fetcher from "./fetcher";

export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);
  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const usePlaylist = () => {
  const { data, error } = useSWR("/playlists", fetcher);
  return {
    playlists: (data as Playlist[]) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
