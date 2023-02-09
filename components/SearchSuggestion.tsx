import { RootState } from "@/features/store";
import React from "react";
import { useSelector } from "react-redux";
import style from "../styles/Suggest.module.css";

const Suggetions = () => {
  const searchContent = useSelector((state: RootState) => state.search.search);
  return (
    <div className={style.suggestion_container}>
       <div className={style.suggest}>
        <p>{searchContent === "" ? "Recent searches" : "Popular searches"}</p>
        {searchContent === "" && <p> Clear all</p>}
      </div>
      <hr/>




    </div>
  );
};

export default Suggetions;
