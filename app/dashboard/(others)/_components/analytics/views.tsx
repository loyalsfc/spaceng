"use client";
import React from "react";

import {useGetViews} from "@/api/views/get-views";
import Loader from "@/components/loader/loader";

function Views() {
  const {data, isPending} = useGetViews();

  if (isPending) {
    return (
      <div className="py-10 grid place-content-center">
        <Loader />
      </div>
    );
  }

  return (
    <ul className="p-3 space-y-1.5 rounded-xl text-sm 2xl:text-base border border-grey-300/10 bg-grey-300/5">
      <li className="flex justify-between">
        <span>Total Views</span>
        <span>{data?.data.recentCount.toLocaleString()}</span>
      </li>
      <li className="flex justify-between">
        <span>Monthly Change</span>
        <span>+{data?.data.percentageChange ? Math.ceil(data?.data.percentageChange) : 0}%</span>
      </li>
      <li className="flex justify-between">
        <span>Top-Performing period</span>
        <span>
          {new Date(data?.data.topDay).toLocaleDateString("en", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </span>
      </li>
    </ul>
  );
}

export default Views;
