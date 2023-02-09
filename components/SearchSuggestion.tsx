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

const Suggetions = () => {
  const searchContent = useSelector((state: RootState) => state.search.search);

  const router = useRouter();

  const recentlySearch =
    typeof window !== "undefined"
      ? localStorage.getItem("history")
        ? JSON.parse(localStorage.getItem("history") || "")
        : []
      : [];

  const { fetchData, loading } = useFetch(`api/suggestion`, searchContent);

  const suggestions: apiData[] = fetchData.suggestions;

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
              <p onClick={() => handleSuggestionClicked(item.text)}>
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
              <p>{item}</p>
              <Image className="dropdown-icon" alt="" src={CloseIcon} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Suggetions;
