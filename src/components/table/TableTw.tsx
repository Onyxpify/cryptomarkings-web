import React from "react";

interface p {
  data: any;
  unit?: any;
}

const TableTw = ({ data,unit }: p) => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-mainText uppercase bg-white dark:bg-gray-700 dark:text-gray-400 border-b dark:border-gray-700">
            <tr>
              {data
                .filter((each: any,) => each.id <= 1)
                .map((each: any) => (
                  <>
                    {each.cols.map((each: any, i: number) => (
                      <th key={i} scope="col" className="px-6 py-4 font-lato font-bold leading-5 text-mainText text-[18px] ">
                        {each}
                      </th>
                    ))}
                  </>
                ))}
            </tr>
          </thead>
          <tbody>
            {data
              .filter((each: any,) => each.id > 1)
              .map((each: any) => (
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 ">
                <>
                  {each.cols.map((text: any, i: number) => (
                      <td key={i} className="px-6 py-4 font-lato font-bold leading-5 text-bodyText text-[18px] ">
                        { i==1? unit?unit:'': ''}{text}
                      </td>
                  ))}
                </>
                    </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(TableTw);
