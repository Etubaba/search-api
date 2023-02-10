import { useRouter } from "next/router";
import React from "react";
import style from "../styles/No_result.module.css";

const NoResult = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className={style.container}>
      <h1>Sorry, No Results Found</h1>
      <p>
        We couldn't find any results matching your search criteria. Please try
        again with different keywords or modify your search criteria.
      </p>
      <a onClick={() => router.push("/")}>Go Back to Homepage</a>
    </div>
  );
};

export default NoResult;
