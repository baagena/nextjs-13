"use client";
import React from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Dashboard = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log(data);
  return <div>Dashboard</div>;
};

export default Dashboard;
