import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import SearchIcon from "../public/icons/Search.svg";
import { AppDispatch, RootState } from "../features/store";
import { useDispatch } from "react-redux";
import { handleSearch, handleSearchingState } from "../features/searchSlice";
import { NextRouter, useRouter } from "next/router";

const SearchInput = (): JSX.Element => {
  const searchContent = useSelector((state: RootState) => state.search.search);
  const is_searching: boolean = useSelector(
    (state: RootState) => state.search.is_searching
  );
  const dispatch: AppDispatch = useDispatch();
  const router: NextRouter = useRouter();

  const handleRecentSearch = () => {
    if (searchContent === "") return;

    //check for window object
    if (typeof window !== "undefined") {
      if (
        localStorage.getItem("history") !== null &&
        localStorage.getItem("history") !== undefined
      ) {
        const prevHistory = JSON.parse(localStorage.getItem("history") || "");

        const updatedHistory = [...prevHistory, searchContent];

        localStorage.setItem("history", JSON.stringify(updatedHistory));
      } else {
        localStorage.setItem("history", JSON.stringify([searchContent]));
      }
    }
  };

  const handleSearchContent = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.key === "Enter") {
      router.push({
        pathname: "/results",
        query: searchContent,
      });
    }
  };

  return (
    <div
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) =>
        handleSearchContent(e)
      }
      className={!is_searching ? "search" : "searching"}
    >
      <Image className="search-icon" alt="" src={SearchIcon} />
      <input
        onFocus={() => dispatch(handleSearchingState(true))}
        onBlur={handleRecentSearch}
        value={searchContent}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          dispatch(handleSearch(e.currentTarget.value))
        }
        type={"text"}
      />
    </div>
  );
};

export default SearchInput;
