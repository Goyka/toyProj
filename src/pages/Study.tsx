import { Link } from "react-router-dom";

const Study = () => {
  const token = sessionStorage.getItem("adminKey");

  return (
    <div className="h-[100vh] grid-2 flex justify-around">
      <div className="bg-transparent text-slate-800 rounded-2xl rounded-l-none w-[9vw] mx-2 p-7 flex-col text-left text-[19px] font-semibold max-tablet:text-[19px] max-tablet:w-[10vw] max-mobile:text-[13px] max-mobile:w-[13vw] max-mobile:p-1">
        <div>
          <Link to={"/project"}>project</Link>
        </div>
        <div>
          <a href="https://www.notion.so/goyaresume/707d9a851a7f4666a1815e8ee0e016f5">
            resume
          </a>
        </div>
        <Link to={"/study"}>study</Link>
        {!token ? (
          <></>
        ) : (
          <div>
            <Link to={"/post"}>
              <span className="font-semibold text-xl">⚑</span>
            </Link>
          </div>
        )}
      </div>
      <div className="bg-slate-50 rounded-xl w-[88vw] h-[87vh] flex-col overflow-y-auto text-center p-3 mt-2 max-mobile:mr-2 max-mobile:w-[78vw]">
        Study
      </div>
    </div>
  );
};

export default Study;
