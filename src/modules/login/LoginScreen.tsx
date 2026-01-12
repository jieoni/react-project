import { useState } from "react";
import { NaverLogo } from "./component/NaverLogo";
import "./css/style.css";

/* 이 부분이 modules 아래에 있는 이유는 
   우리가 네이버를 똑같이 만든다고 치면 
   modules/login은 네이버 여러 기능 중 login에 관련된 기능을 만드는 폴더야

   그리고 LoginScreen은 로그인 화면이고 
   지금은 LoginScreen이 App.tsx에 들어있지만 다음엔 얘를 라우팅해서 
   네이버 메인에서 로그인 화면으로 이동할 수 있게 해볼거야 

   login/component 폴더는 로그인 화면중에 필요한 모든 코드를 이 파일에 적으면 
   너무 길어지니까 로그인 로고나 부분부분을 컴포넌트 폴더에 나눠서 넣을거야 

   login/css는 login에서 사용되는 css들을 모아둔 파일이야

   지금 중요한건 아래 변수 선언을 typeScript로 해뒀는데 이렇게 선언해주는게 익숙해져야하고 
   useState는 [value, setValue]로 구성되는데 
   value는 화면에서 사용할 변수로 setValue는 value를 변경하는 함수인데
   여기서 value를 state 변수라고 해 
   state가 변경되면 화면이 업데이트 된다는걸 알아야해 (일반 변수는 변경된다고 업데이트가 안 됨)
*/

export const LoginScreen = () => {
  // === === === typeScript 예시 === === ===
  // === === === typeScript 예시 === === ===

  // 1. 숫자는 :number
  const age: number = 25;

  // 2. 글자(문자열)는 :string
  const myName: string = "서리";

  // 3. 참/거짓은 :boolean
  const isLoggedIn: boolean = true;

  // ❌ 에러 예시: 숫자로 정해놓고 글자 넣으면 빨간줄 뜸!
  const wrong: number = "이거 안됨";

  // 숫자로만 된 배열
  const scoreList: number[] = [100, 90, 85];

  // 글자로만 된 배열
  const todoList: string[] = ["가나다라", "마바사아"];

  // ❌ 에러 예시: 숫자 배열에 글자 넣으면 빨간줄 뜸!
  scoreList.push("백점");

  // (숫자 2개 받아서) : (숫자를 뱉어내는) 함수
  const add = (a: number, b: number): number => {
    return a + b;
  };

  // 아무것도 반환하지 않을 땐 :void (로그 찍을 때 등)
  const printLog = (msg: string): void => {
    console.log(msg);
  };

  // 1. objcet는 이런식으로 interface를 만들어서
  interface User {
    name: string;
    age: number;
    isAdmin: boolean;
  }

  // 2. 이런식으로 사용
  const member: User = {
    name: "서리",
    age: 1,
    isAdmin: false,
  };

  // === === === typeScript 예시끝 === === ===
  // === === === typeScript 예시끝 === === ===

  /* tab을 관리하기 위한 state
     setActiveTab를 호출해서 activeTab가 변경되면 
     react가 화면을 변경된 값으로 업데이트 해줌 */
  const [activeTab, setActiveTab] = useState(0);

  return (
    // css는 css폴더 style.css에 있음
    // css는 그냥 가볍게 보고 넘어가도 될거같아. 하다보면 외워지니까
    // css 전문으로 해주는 회사가 많기도 하고
    <div className="login-wrap">
      {/* 로고 영역 (NaverLogo에 알트 좌클릭하면 이 파일로 이동가능) */}
      <NaverLogo />

      {/* 로그인 박스 영역 */}
      <div className="login-box">
        {/* 탭 헤더 */}
        <ul className="tab-menu">
          {/* 첫 번째 탭: ID 0 */}
          <li
            // activeTab가 지금 선택된 탭인데 선택된 탭이랑 아닌 탭이랑 스타일을 다르게 넣음
            className={`tab-item ${activeTab === 0 ? "active" : ""}`}
            // 버튼 클릭하면 activeTab가 변경돼서 화면이 새로 그려지면서(랜더링) 선택된 탭 디자인이 바껴
            onClick={() => setActiveTab(0)}
          >
            <span className="tab-label">ID/전화번호</span>
          </li>

          {/* 두 번째 탭: ID 1 */}
          <li
            className={`tab-item ${activeTab === 1 ? "active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            <span className="tab-label">일회용 번호</span>
          </li>

          {/* 세 번째 탭: ID 2 */}
          <li
            className={`tab-item ${activeTab === 2 ? "active" : ""}`}
            onClick={() => setActiveTab(2)}
          >
            <span className="tab-label">QR코드</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
