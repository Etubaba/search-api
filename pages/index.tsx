import SearchInput from "../components/SearchInput";
import Image from "next/image";
import MenuIcon from "../public/icons/Menu.svg";
import style from "../styles/Result.module.css";
import { useState } from "react";
import ProductToggle from "../components/ProductToggle";
import ProductComponent from "../components/ProductComponent";
import { useSelector } from "react-redux";
import { RootState } from "@/features/store";
import Suggetions from "@/components/SearchSuggestion";

export default function Home(): JSX.Element {
  const searchContent: string = useSelector(
    (state: RootState) => state.search.search
  );
  const is_searching: boolean = useSelector(
    (state: RootState) => state.search.is_searching
  );
  return (
    <div className={is_searching ? style.page_container:style.page_1}>
      <div className={style.header}>
        {!is_searching && <Image className="menu-icon" alt="" src={MenuIcon} />}
        <SearchInput />
      </div>
      {is_searching ? (
        <Suggetions />
      ) : (
        <div>
          <h1 className={style.title}>Find your favorite products now.</h1>
          <div>
            <ProductToggle />
          </div>

          <div>
            <ProductComponent />
          </div>
        </div>
      )}
    </div>
  );
}
