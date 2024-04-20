import { useEffect, useRef, useState } from "react";
import coba from "../assets/coba.jpg";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";

function Chatbot(chatactivate) {
  const [balasan, setbalasan] = useState([]);
  const lah = useRef([]);
  const but1 = useRef();
  const but2 = useRef();
  const but3 = useRef();
  const scrollauto = useRef(null);
  const [loading, setloading] = useState(true);
  const data = [
    {
      id: 1,
      text: "Hello!",
    },
    {
      id: 2,
      text: "Welcome to SimpleBot 😁",
    },
    {
      id: 3,
      text: "do you need any of the menus below?",
    },
  ];

  useEffect(() => {
    gsap
      .timeline({ paused: false })
      .from(lah[0], { y: 30, duration: 0.1, opacity: 0 })
      .from(lah[1], { y: 30, duration: 0.1, opacity: 0 })
      .from(lah[2], { y: 30, duration: 0.1, opacity: 0 })
      .from(but1.current, { y: 30, duration: 0.1, opacity: 0 })
      .from(but2.current, { y: 30, duration: 0.1, opacity: 0 })
      .from(but3.current, { y: 30, duration: 0.1, opacity: 0 })
      .to(lah[0], { y: 0, duration: 0.1, opacity: 1 })
      .to(lah[1], { y: 0, duration: 0.1, opacity: 1 })
      .to(lah[2], { y: 0, duration: 0.1, opacity: 1 })
      .to(but1.current, { y: 0, duration: 0.1, opacity: 1 })
      .to(but2.current, { y: 0, duration: 0.1, opacity: 1 })
      .to(but3.current, { y: 0, duration: 0.1, opacity: 1 });
    scrollauto.current?.scrollIntoView();
  }, [chatactivate]);

  useEffect(() => {
    const last = balasan.length - 1;
    AOS.init({
      once: false,
    });

    if (balasan[last]?.message.toLowerCase() === "interested") {
      const data = {
        type: "bot",
        message: "Thank you for being interested in me 🙌",
      };
      const data2 = { type: "bot", message: "e" };
      balasan.push(data);
      balasan.push(data2);
      scrollauto.current?.scrollIntoView();
    } else if (balasan[last]?.message.toLowerCase() === "contact?") {
      const data = { type: "bot", message: "Oh you want to know my contact? " };
      const data2 = { type: "user", message: "Instagram?" };
      const data3 = { type: "user", message: "Lindkedin?" };
      balasan.push(data);
      balasan.push(data2);
      balasan.push(data3);
      scrollauto.current?.scrollIntoView();
    } else if (balasan[last]?.message.toLowerCase() === "hello") {
      const data = { type: "bot", message: "Hello, Nice to Meet You 😁 " };
      const data2 = { type: "bot", message: "Hope you enjoy on my website 🛫" };
      balasan.push(data);
      balasan.push(data2);
      scrollauto.current?.scrollIntoView();
    }
    setTimeout(() => {
      setloading(false);
    }, 2200);

    scrollauto.current?.scrollIntoView();
    console.log(balasan);
  }, [loading, balasan]);

  const but11 = () => {
    setloading(true);
    setbalasan((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: "Interested" },
    ]);
  };
  const but22 = () => {
    setloading(true);
    setbalasan((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: "Contact?" },
    ]);
  };
  const but33 = () => {
    setloading(true);
    setbalasan((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: "hello" },
    ]);
  };

  const ig = () => {
    setloading(true);
    setTimeout(() => {
      setbalasan((prevChatLog) => [
        ...prevChatLog,
        { type: "bot", read: "ig", message: "ig" },
      ]);
      setloading(false);
    }, 2200);
  };

  const lindkedin = () => {
    setloading(true);
    setTimeout(() => {
      setbalasan((prevChatLog) => [
        ...prevChatLog,
        { type: "bot", read: "li", message: "li" },
      ]);
      setloading(false);
    }, 2200);
  };
  const clearstate = () => {
    setbalasan([]);
  };

  return (
    <div className="w-full h-full  bg-transparent ">
      <div className="flex justify-start p-4 items-center bg-black text-white h-1/6 rounded-t-xl">
        <img
          src={coba}
          className="w-10 h-10 border-2 rounded-full object-fill"
          alt=""
        />
        <div className="ml-3  flex flex-col ">
          <h6 className="text-sm font-medium">ZSAN AJI</h6>
          <h6 className="font-thin text-[10px]">Silahkan diganggu....</h6>
        </div>
      </div>

      <div className="w-full h-5/6 px-2 text-sm  pt-1 bgglass gap-y-4 chatover">
        {data.map((d, i) => (
          <div key={i} ref={(el) => (lah[i] = el)}>
            <p className="bg-black text-white  rounded-e-xl rounded-bl-xl mt-2 p-2 w-fit">
              {d.text}
            </p>
          </div>
        ))}
        <div className=" flex flex-col items-center">
          <button
            ref={but1}
            onClick={but11}
            className="border-2 border-green-700  font-medium text-green-700 bg-white  rounded-full mt-2 p-2 w-fit"
          >
            Interested in You 👀
          </button>
          <button
            ref={but2}
            onClick={but22}
            className="border-2 border-green-700  font-medium text-green-700 bg-white  rounded-full mt-2 p-2 w-fit"
          >
            Your Contact? 📞
          </button>
          <button
            ref={but3}
            onClick={but33}
            className="border-2 border-green-700  font-medium text-green-700 bg-white  rounded-full mt-2 p-2 w-fit"
          >
            Say Hello! 👋
          </button>
        </div>
        {/* {chat.map((d, i) => (
          <div
            key={i}
            className="mb-2 flex justify-end"
            //  ref={(el) => (lah[i] = el)}
          >
            <p className="bg-white text-black  rounded-s-xl rounded-br-xl mt-2 p-2 w-fit">
              {d}
            </p>
          </div>
        ))} */}
        {/* {
          loading ? (
              <>
                <div
                className="mb-2 flex justify-start" >
                <p className="bg-black text-white  rounded-e-xl rounded-bl-xl mt-2 p-2 w-fit">
                    lOADINGG..
                </p>
              </div>

              </>
          ): (
            <> */}
        {balasan?.map((d, i) => (
          <div
            key={i}
            className={`mb-2 flex  ${
              d.type === "bot" ? "justify-start" : "justify-end"
            }`}
            ref={(el) => (lah[i] = el)}
          >
            <p
              className={` ${
                d.type === "bot"
                  ? "bg-black text-white  rounded-e-md rounded-bl-md mt-2 p-2 w-fit"
                  : "bg-white text-black  rounded-s-md rounded-br-md mt-2 p-2 w-fit"
              }`}
            >
              {d.message === "e" && (
                <>
                  <AiTwotoneMail className=" w-full" />{" "}
                  <a href="mailto:zulfikarajisan@gmail.com" className="">
                    Email M
                  </a>
                </>
              )}
              {d.message === "Instagram?" || d.message === "Lindkedin?" ? (
                <>
                  <button onClick={d.message === "Instagram?" ? ig : lindkedin}>
                    {d.message}
                  </button>
                </>
              ) : (
                <>
                  {d.read ? "" : d.message}
                  {d.read === "ig" && (
                    <Link
                      to={"https://www.instagram.com/ajiantiair/"}
                      className="flex items-center"
                    >
                      <FaSquareInstagram />{" "}
                      <span className="ml-1"> Instagram</span>{" "}
                    </Link>
                  )}
                  {d.read === "li" && (
                    <Link
                      to={
                        "https://www.linkedin.com/in/zulfikar-aji-santoso-504a08221/"
                      }
                      className="flex items-center"
                    >
                      <AiFillLinkedin />{" "}
                      <span className="ml-1"> Lindkedin</span>{" "}
                    </Link>
                  )}
                </>
              )}
            </p>
          </div>
        ))}
        {loading && (
          <div className="bg-black mb-2 text-white gap-2 px-2 py-0  rounded-e-md rounded-bl-md pb-2  w-fit flex">
            <div data-aos="fade-bottom">.</div>
            <div data-aos="fade-bottom" data-aos-delay={400}>
              .
            </div>
            <div data-aos="fade-bottom" data-aos-delay={700}>
              .
            </div>
          </div>
        )}
        {/* </>
           
          )
        } */}

        <div ref={scrollauto} />
      </div>
      {balasan.length > 0 ? (
        <button
          onClick={clearstate}
          type="button"
          className="w-full h-17 bg-green-800 font-medium text-white flex gap-2 justify-center  py-2 rounded-b-2xl"
        >
          Clear
        </button>
      ) : (
        <button
          type="button"
          className="w-full h-17 bg-black font-medium text-white flex gap-2 justify-center  py-2 rounded-b-2xl"
        >
          Enjoy!!😁
        </button>
      )}

      {/* <div className="w-full h-17 flex gap-2 justify-center glassbawah py-2 rounded-b-2xl "> */}
      {/* <input
          type="text"
          placeholder="any questions?"
          value={datadata}
          onChange={(e) => setdatadata(e.target.value)}
          className=" rounded-xl p-2 h-10 outline-none hover:border-none"
        />
        <button onClick={send} className="text-black font-poppins ">
          Send
        </button> */}

      {/* </div> */}
    </div>
  );
}

export default Chatbot;
