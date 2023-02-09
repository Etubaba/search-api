import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { getAllProducts } from "@/services/api";
import MenuIcon from "../public/icons/Menu.svg";
import ProductComponent from "@/components/ProductComponent";
import style from "../styles/Result.module.css";
import { IDataProps } from "@/interface";
import Image from "next/image";
import SearchInput from "@/components/SearchInput";
import { RootState } from "@/features/store";
import { useSelector } from "react-redux";

const Results: React.FC<IDataProps> = ({ data }) => {
  const is_searching: boolean = useSelector(
    (state: RootState) => state.search.is_searching
  );
  return (
    <>
      <Head>
        <title>Results</title>
      </Head>

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
    </>
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
