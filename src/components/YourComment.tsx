import "../Css/aside.css";

const YourComment = () => {
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className=" w-12/12 rounded-lg p-4 mx-auto" onSubmit={handelSubmit}>
      <div className="w-full flex items-center gap-2 p-2 border_color_left">
        <h1 className="text-white font-bold text-xl capitalize">
          YOUR COMMENT
        </h1>
      </div>
      <div className="px-2 mb-2 mt-2 flex w-full">
        <textarea
          placeholder="comment"
          className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-28 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
          defaultValue={""}
        />
      </div>
      <div className="flex justify-start px-4 w-10/12">
        <input
          type="submit"
          className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
          defaultValue="Comment"
        />
      </div>
    </form>
  );
};

export default YourComment;
