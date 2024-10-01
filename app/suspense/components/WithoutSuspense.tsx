"use client";
import { fetchData1, fetchData2 } from "@/app/apis/test";
import React, { useEffect, useState } from "react";

export const WithoutSuspense: React.FC = () => {
  const [data1, setData1] = useState<string | null>(null);
  const [data2, setData2] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res1 = await fetchData1();
      const res2 = await fetchData2();
      setData1(res1);
      setData2(res2);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading both components...</div>;
  }

  return (
    <div>
      <div>{data1}</div>
      <div>{data2}</div>
    </div>
  );
};
