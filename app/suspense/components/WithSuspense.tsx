import { fetchData1, fetchData2 } from "@/app/apis/test";
import React, { Suspense } from "react";

// wrapPromise 함수
const wrapPromise = <T,>(promise: Promise<T>) => {
  let status = "pending";
  let result: T;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    },
  };
};

const resource1 = wrapPromise(fetchData1());
const resource2 = wrapPromise(fetchData2());

// 각 데이터 컴포넌트
const FirstComponent: React.FC = () => {
  const data = resource1.read(); // 첫 번째 데이터
  return <div>{data}</div>;
};

const SecondComponent: React.FC = () => {
  const data = resource2.read(); // 두 번째 데이터
  return <div>{data}</div>;
};

export const WithSuspense: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading First Component...</div>}>
        <FirstComponent />
      </Suspense>
      <Suspense fallback={<div>Loading Second Component...</div>}>
        <SecondComponent />
      </Suspense>
    </div>
  );
};
