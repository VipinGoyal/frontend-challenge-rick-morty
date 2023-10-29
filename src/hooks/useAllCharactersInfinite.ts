"use client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useEffect, useState } from "react";
import { ALL_CHARACTERS } from "@/graphql/queries";
import { ICharacterDetail } from "@/components/CharacterDetails/types";

const useAllCharactersInfinite = () => {
  let { data, loading, fetchMore } = useQuery(ALL_CHARACTERS, {
    variables: { page: 1, filter: {} },
  });
  const [hasNextPage, setHasNextPage] = useState(true);
  const [nextPage, setNextPage] = useState(1);
  const [allCharacters, setallCharacters] = useState<ICharacterDetail[]>([]);

  useEffect(() => {
    if (data) {
      const { info, results } = data.characters;
      if (results.length && info.next) {
        setNextPage(info.next);
        setallCharacters((prevAllCharacters) => [
          ...prevAllCharacters,
          ...results,
        ]);
      } else if (!info.next) {
        setHasNextPage(false);
      }
    }
  }, [data]);

  const onLoadMore = async () => {
    await fetchMore({
      variables: { page: nextPage, filter: {} },
      updateQuery: (_, { fetchMoreResult }) => {
        return fetchMoreResult;
      },
    });
  };

  const [infiniteSrollRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore,
    disabled: !hasNextPage,
  });

  return {
    allCharacters,
    infiniteSrollRef,
    hasNextPage,
    loading,
  };
};

export default useAllCharactersInfinite;
