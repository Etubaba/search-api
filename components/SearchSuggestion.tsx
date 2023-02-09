import { RootState } from "@/features/store";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "../styles/Suggest.module.css";
import SearchIcon from "../public/icons/Search.svg";
import CloseIcon from "../public/icons/Close.svg";
import useFetch from "@/hooks/useFetch";
import { BASE_URL } from "@/api";
import { apiData } from "@/interface";

const Suggetions = () => {
  const searchContent = useSelector((state: RootState) => state.search.search);

  const recentlySearch =
    typeof window !== "undefined"
      ? localStorage.getItem("history")
        ? JSON.parse(localStorage.getItem("history") || "")
        : []
      : [];

  const { fetchData, loading } = useFetch(`api/suggestion`, searchContent);

  const suggestions: apiData[] = fetchData.suggestions;

  const clearStorage = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
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
              <p>{item.text}</p>
              <Image className="dropdown-icon" alt="" src={CloseIcon} />
            </div>
          ))}
        </>
      ) : (
        <>
          {recentlySearch.map((item: string, idx: number) => (
            <div key={idx} className={style.suggestion_items}>
              <p>{item}</p>
              <Image className="dropdown-icon" alt="" src={SearchIcon} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Suggetions;
