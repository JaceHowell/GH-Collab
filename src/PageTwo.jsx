export default function PageTwo() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      <div className="bg-blue-950 rounded max-w-4xl mx-auto mt-10">
        <h2 className="text-white text-center p-7">How likely are you to recommend FrontendPro to someone you know?</h2>
          <div className="p-2 flex justify-around">
          {nums.map((num) => {
            return (
              <button className="p-2 m-4 bg-slate-700 text-white rounded min-w-11">{num}</button>
            )
          })}
          </div>
      </div>
    </>
  );
}
