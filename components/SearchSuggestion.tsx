import { RootState } from "@/features/store";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import style from "../styles/Suggest.module.css";
import SearchIcon from "../public/icons/Search.svg";
import CloseIcon from "../public/icons/Close.svg";

const Suggetions = () => {
  const searchContent = useSelector((state: RootState) => state.search.search);

  const recentlySearch =
    typeof window !== "undefined"
      ?localStorage.getItem('history')?
       JSON.parse(localStorage.getItem("history") || "")
      : []:[];

  return (
    <div className={style.suggestion_container}>
      <div className={style.suggest}>
        <p>{searchContent === "" ? "Recent searches" : "Popular searches"}</p>
        {searchContent === "" && <p> Clear all</p>}
      </div>

      <span className={style.divider}></span>

      {searchContent !== "" ? (
        <div className={style.suggestion_items}>
          <p>Coca</p>
          <Image className="dropdown-icon" alt="" src={CloseIcon} />
        </div>
      ) : (
        <>
        { recentlySearch.map((item:string,idx:number)=>(<div key={idx} className={style.suggestion_items}>
          <p>{item}</p>
          <Image className="dropdown-icon" alt="" src={SearchIcon} />
        </div>)
        )}
        </>
        
      )}
    </div>
  );
};

export default Suggetions;
