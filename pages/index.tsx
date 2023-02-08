import SearchInput from "../components/SearchInput";
import Image from "next/image";
import MenuIcon from "../public/icons/Menu.svg";
import style from "../styles/Result.module.css";
import { useState } from "react";
import ProductToggle from "../components/ProductToggle";

export default function Home(): JSX.Element {
  const [active, setActive] = useState("trendy");
  return (
    <div className={style.page_1}>
      <div className={style.header}>
        <Image className="menu-icon" alt="" src={MenuIcon} />
        <SearchInput />
      </div>

      <h1 className={style.title}>Find your favorite products now.</h1>

      <ProductToggle/>
    </div>
  );
}
