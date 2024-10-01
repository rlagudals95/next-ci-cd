export const fetchData1 = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from first resource");
    }, 2000); // 2초 후 데이터 반환
  });
};

export const fetchData2 = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from second resource");
    }, 4000); // 4초 후 데이터 반환
  });
};
