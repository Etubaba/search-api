import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { getAllProducts } from "@/services/api";
import MenuIcon from "../public/icons/Menu.svg";
import ProductComponent from "@/components/ProductComponent";
import style from "../styles/Result.module.css";
import CloseIcon from "../public/icons/Close.svg";
import { IDataProps } from "@/interface";
import Image from "next/image";
import SearchInput from "@/components/SearchInput";
import { AppDispatch, RootState } from "@/features/store";
import { useDispatch, useSelector } from "react-redux";
import { NextRouter, useRouter } from "next/router";
import { handleSearch, handleSearchingState } from "../features/searchSlice";

const Results: React.FC<IDataProps> = ({ data }) => {
  const router: NextRouter = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const is_searching: boolean = useSelector(
    (state: RootState) => state.search.is_searching
  );

  const handleReturnHome = () => {
    router.push("/");
    dispatch(handleSearch(""));
    dispatch(handleSearchingState(false));
  };
  return (
    <div className={style.result_container}>
      <Head>
        <title>Results</title>
      </Head>
      <div className={style.goback}>
        <Image
          onClick={handleReturnHome}
          className="menu-icon"
          alt=""
          src={CloseIcon}
        />
      </div>

      <div className={style.header}>
        {!is_searching && <Image className="menu-icon" alt="" src={MenuIcon} />}
        <SearchInput />
      </div>

      <main style={{ padding: "0 1rem" }}>
        <div className="product_container">
          {data.map((product) => (
            <ProductComponent key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Results;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query) return { props: { result: [] } };
  try {
    const url = Object.keys(query)[0];
    const data = await getAllProducts(url);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        result: [],
        searchSuggestion: [],
      },
    };
  }
};
