export default function PageOne() {
  return (
    <>
      <div className="flex justify-center w-screen h-screen bg-indigo-500">
        <div className="flex flex-col w-2/5 h-3/4 p-20 mt-20 bg-white rounded">
          <section className="p-5 p-5 pr-5 items-center text-center">
            <p className="p-5 text-3xl"> Send me a message</p>
            <p className="">
              Feel free to get in touch with me with anything related to
              CODINGSPACE or you can just say hi. I will get back to you as soon
              as I can.
            </p>
          </section>
          <form className="flex flex-col items-center p-5 text-center">
            <input className="p-2 mb-5" placeholder="Full Name"></input>
            <input className="p-2 mb-5" placeholder="Email Address"></input>
            <input className="p-2 mb-5" placeholder="Subject"></input>
            <input className="p-2 mb-5" placeholder="Message"></input>
            <button className="w-3/4 p-5" placeholder="Send" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
