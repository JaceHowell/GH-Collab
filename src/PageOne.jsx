export default function PageOne() {
  return (
    <>
      <div className="flex justify-center">
        <center className="flex flex-col w-3/4 p-20">
          <section className="p-5">
            <p className="p-5"> Send me a message</p>
            <p>
              Feel free to get in touch with me with anything related to
              CODINGSPACE or you can just say hi. I will get back to you as soon
              as I can.
            </p>
          </section>
          <form className="flex flex-col items-center p-5 text-center">
            <input className="p-5" placeholder="Full Name"></input>
            <input className="p-5" placeholder="Email Address"></input>
            <input className="p-5" placeholder="Subject"></input>
            <input className="p-5" placeholder="Message"></input>
            <button placeholder="Send" type="submit">
              Send
            </button>
          </form>
        </center>
      </div>
    </>
  );
}
