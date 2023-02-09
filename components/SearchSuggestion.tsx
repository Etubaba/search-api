import { RootState } from "@/features/store";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "../styles/Suggest.module.css";
import SearchIcon from "../public/icons/Search.svg";
import CloseIcon from "../public/icons/Close.svg";
import useFetch from "@/hooks/useFetch";
import { BASE_URL } from "@/constant";
import { apiData } from "@/interface";
import { useRouter } from "next/router";
import useKeyPress from "@/hooks/userKeyPress";

const Suggetions = () => {
  const searchContent = useSelector((state: RootState) => state.search.search);
  const router = useRouter();

  const { fetchData, loading } = useFetch(`api/suggestion`, searchContent);

  const suggestions: apiData[] = fetchData.suggestions;

  //logic for arrow selection
  const [selectedIdx, setSelectedidx] = useState(0);

  const arrowUpPressed = useKeyPress("ArrowUp");
  const arrowDownPressed = useKeyPress("ArrowDown");

  useEffect(() => {
    if (arrowUpPressed) {
      const holder =
        selectedIdx !== 0 ? selectedIdx - 1 : suggestions.length - 1;
      setSelectedidx(holder);
      console.log("arrowUpPressed");
    }
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowDownPressed) {
      const holder =
        selectedIdx !== suggestions.length - 1 ? selectedIdx + 1 : 0;
      setSelectedidx(holder);
      console.log("arrowDownPressed");
    }
  }, [arrowDownPressed]);

  const recentlySearch =
    typeof window !== "undefined"
      ? localStorage.getItem("history")
        ? JSON.parse(localStorage.getItem("history") || "")
        : []
      : [];

  //refresh fetching
  const refreshData = () => {
    router.replace(router.asPath);
  };

  //clear recentSearch
  const clearStorage = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
      refreshData();
    }
  };

  //handle suggestion click

  const handleSuggestionClicked = (params: string) => {
    router.push({
      pathname: "/results",
      query: params,
    });
  };

  return (
    <div className={style.suggestion_container}>
      <div className={style.suggest}>
        <p>{searchContent === "" ? "Recent searches" : "Popular searches"}</p>
        {searchContent === "" && <p onClick={clearStorage}> Clear all</p>}
      </div>

      <span className={style.divider}></span>

      {searchContent !== "" ? (
        <>
          {suggestions.map((item, idx) => (
            <div key={idx} className={style.suggestion_items}>
              <p
                className={
                  idx === selectedIdx
                    ? style.suggestion_active
                    : style.suggestion_item
                }
                role="button"
                aria-pressed={idx === selectedIdx}
                tabIndex={0}
                onClick={() => handleSuggestionClicked(item.text)}
                onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                  if (e.key === "Enter") {
                    handleSuggestionClicked(item.text);
                  }
                }}
              >
                {item.text}
              </p>
              <Image className="dropdown-icon" alt="" src={SearchIcon} />
            </div>
          ))}
        </>
      ) : (
        <>
          {recentlySearch.map((item: string, idx: number) => (
            <div
              onClick={() => handleSuggestionClicked(item)}
              key={idx}
              className={style.suggestion_items}
            >
              <p
                className={
                  idx === selectedIdx
                    ? style.suggestion_active
                    : style.suggestion_item
                }
                role="button"
                aria-pressed={idx === selectedIdx}
                tabIndex={0}
                // onClick={() => handleSuggestionClicked(item)}
                onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                  if (e.key === "Enter") {
                    handleSuggestionClicked(item);
                  }
                }}
              >
                {item}
              </p>
              <Image className="dropdown-icon" alt="" src={CloseIcon} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Suggetions;
