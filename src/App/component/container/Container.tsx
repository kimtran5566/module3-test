// import React from 'react'

// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../typescript/hook";
// import Skeleton from "react-loading-skeleton";
import { addProduct } from "../shoppingcart/ShoppingCartSlice";
import { useGetDataContainerQuery } from "./fetchDataProduct";
import { incrementByAmount } from "./counter/counterSlice";
import {
  // fetchProductList,
  loadProductList,
  updateProductList,
} from "./counter/fetchProductList";
// import { useGetDataContainerQuery } from "./fetchDataProduct";
// import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../typescript/hook";

const Container = () => {
  let dispatch = useAppDispatch();

  //  useEffect(() => {
  //  	dispatch(fetchProductList());
  //  }, []);
  const { data, isLoading } = useGetDataContainerQuery(23);
console.log(data)
  return (
    <div className="grid grid-flow-row grid-cols-6 gap-x-2 gap-y-4 w-[1200px] mx-auto">
      {/* {isLoading && (
				<Fragment>
					<Skeleton></Skeleton>
				</Fragment>
			)} */}
      {data?.map((book) => (
        <div
          key={book.id}
          className="p-2 bg-orange-400 relative flex flex-col space-y-3 items-center rounded-lg"
        >
          <div>
            <img
              src={book.thumbnail}
              alt="image-product"
              className="rounded-md"
            />
          </div>
          <div className="text-red-500 px-2 py-1 rounded-md bg-white  flex justify-evenly space-x-3">
            <span>${book.createdAt}</span>
            <span>${book.name}</span>
            <span>${book.expiredAt}</span>
            <span>${book.description}</span>
            <span>${book.author}</span>
            <span>Total: {book.quantity}</span>
          </div>
        
        </div>
      ))}
    </div>
  );
};

export default Container;
