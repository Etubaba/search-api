import React, { useState } from 'react'
import style from "../styles/Result.module.css";

const ProductToggle = ()  => {
      const [active, setActive] = useState("trendy");
  return (
        <div className={style.product_toggle}>
        <div onClick={()=>setActive('trendy')}>
          <p
            className={
              active === "trendy" ? style.toggle_active : style.products_toggle
            }
          >
            Trendy foods
          </p>

          {active === "trendy" && <span className={style.border}></span>}
        </div>
        <div onClick={()=>setActive('bread')}>
          {" "}
          <p
            className={
              active === "bread" ? style.toggle_active : style.products_toggle
            }
          >
            Bread
          </p>
          {active === "bread" && <span className={style.border}></span>}
        </div>
        <div onClick={()=>setActive('milk')}>
          {" "}
          <p
            className={
              active === "milk" ? style.toggle_active : style.products_toggle
            }
          >
            Milk
          </p>
          {active === "milk" && <span className={style.border}></span>}
        </div>
        <div onClick={()=>setActive('egg')}>
          {" "}
          <p
            className={
              active === "egg" ? style.toggle_active : style.products_toggle
            }
          >
            Egg
          </p>
          {active === "egg" && <span className={style.border}></span>}
        </div>
      </div>
  )
}

export default ProductToggle