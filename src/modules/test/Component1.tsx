import { log } from "console";
import { useEffect, useState } from "react";

export const Tag = () => {
  return <div>NAVER</div>;
};

export const Box = () => {
  // 구조 분해 할당
//   const aaa: number = 1;
//   var bbb: string = "1";
//   const ccc: { a: number; b: number } = { a: 1, b: 2 };
//   const zzz = (a: number) => {};

  const [tabNumber, setTabNumber] = useState(1);
  // 변수 인데
  return (
    <div>
      <div style={{ display: "flex", gap: 10 }}>
        <TouchItem title="id/전화번호" setTabNumber={() => setTabNumber(1)} />
        <TouchItem title="222" setTabNumber={() => setTabNumber(2)} />
        <TouchItem title="333" setTabNumber={() => setTabNumber(3)} />
      </div>
      <Content number={tabNumber} />
    </div>
  );
};
// id/전화번호

const TouchItem = ({
  title,
  setTabNumber,
}: {
  title: string;
  setTabNumber: () => void;
}) => {
  return (
    <div
      onClick={() => {
        setTabNumber();
      }}
    >
      {title}
    </div>
  );
};


// 2가지

/*

1. git add 
2. git commit 
3. push 

*/

const Content = ({ number }: { number: number }) => {
  if (number === 1) {
    return <div>1번탭입니다</div>;
  }
  if (number === 2) {
    return <div>2번탭입니다</div>;
  }
  if (number === 3) {
    return <div>3번탭입니다</div>;
  }
  return <div>aaa</div>
};
