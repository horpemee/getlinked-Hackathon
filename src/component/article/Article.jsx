import React from "react";
import star from "./images/star - Copy.svg";
import Idea from "./images/The big idea.svg";
// import Idea1 from "./images/The big idea (1).svg";
import Star from "./images/arrow.svg";
import Female from "./images/sis.svg";
import sStar from "./images/sStar.svg";
import curve from "./images/star.svg";
import whiteStar from "./images/whitestar.svg";
import Judge from "./images/judge.svg";
import starpu from "./images/star pu.svg";

const Article = (register) => {
  const Attributes = [
    {
      id: 0,
      title: "Innovation and Creativity",
      description:
        "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
    },
    {
      id: 1,
      title: "Functionality",
      description:
        " Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution. ",
    },
    {
      id: 2,
      title: "Impact and Relevance",
      description:
        "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
    },
    {
      id: 3,
      title: "Technical Complexity",
      description:
        "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
    },
    {
      id: 4,
      title: "Adherence to Hackathon Rules",
      description:
        "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements..",
    },
  ];

  const readmore =
    "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)";

  return (
    <div className=" bg-darkPurple flex flex-col items-center justify-center px-10 lg:px-28">
      {/* 1st segment  */}

      {/* medium screen and larger screens */}
      <div className="md:grid md:grid-cols-2  ">
        <div className="relative flex flex-col items-center justify-center">
          <img src={Idea} alt="idea" className="lg:w-[490px] lg:h-[477px]" />

          <img
            src={curve}
            alt="star"
            className=" lg:w-[49.43px] lg:h-[57.97px]"
          />
          <img
            src={Star}
            alt="star"
            className="absolute left-0 top-20 lg:w-[21px] lg:h-[25px]"
          />
        </div>

        <aside className="text-center mb-12  relative md:text-left lg:justify-center ">
          <h1 className="my-4 font-clash font-bold text-[20px] leading-[26.6px] text-white flex flex-col items-center justify-center md:items-start lg:text-[32px] lg:leading-[42.56px]">
            Introduction to getlinked
            <span className="text-primaryColor">tech Hackathon 1.0</span>
          </h1>
          <img
            src={sStar}
            alt="star"
            className="absolute right-2 top-8 lg:w-[30px] lg:h-[36px]"
          />

          <p className="font-mont mb-10 font-normal text-[13px] leading-[27.5px] text-white md:text-left">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </aside>
      </div>

      {/* hr */}
      <hr class="border-b-6  border-customWhite " style={{ width: "100vw" }} />

      {/* 2nd segment  */}

      <div className="md:grid md:grid-cols-2  ">
        <div className="relative flex flex-col items-center justify-center md:order-last">
          <img src={Female} alt="female" />

          <img src={whiteStar} alt="star" className="absolute left-0 top-44" />
        </div>
        {/* <img src={star} alt="star" /> */}

        <aside className="text-center relative ">
          <h1 className="my-4 font-clash font-bold text-[20px] leading-[26.6px] text-white flex flex-col items-center justify-center md:items-start">
            Rules and
            <span className="text-primaryColor">Guidelines</span>
          </h1>
          <img src={star} alt="star" className="absolute right-0 top-16" />

          <p className="font-mont mb-10 font-normal text-[13px] leading-[27.5px] text-white md:text-left">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
          <img src={whiteStar} alt="star" className=" my-4 " />
        </aside>
      </div>
      <hr class="border-b-6  border-customWhite " style={{ width: "100vw" }} />

      {/* 3rd segment  */}

      <div className="md:grid md:grid-cols-2  ">
        <div className=" my-4 relative flex flex-col items-center justify-center">
          <img src={starpu} alt="star" className="  " />
          <img src={Judge} alt="female" className="mt-10" />
          <img
            src={star}
            alt="star"
            className="absolute right-[9rem] bottom-[7rem]"
          />
        </div>
        <aside className=" text-center  relative ">
          <h1 className="my-4 font-clash font-bold text-[20px] leading-[26.6px] text-white flex flex-col items-center justify-center md:items-start">
            Judging Criteria
            <span className="text-primaryColor">Key attributes</span>
          </h1>

          {Attributes.map((attribute) => (
            <>
              <p className="font-mont mb-6 font-bold text-[13px] leading-[22.56px] text-customPink md:text-left">
                {attribute.title} : <span> </span>
                <span className="text-white  font-normal text-[12px] leading-[20.82px] ">
                  {attribute.description}
                </span>
              </p>
            </>
          ))}

          {/* <img src={sStar} alt="star" className="absolute right-0 top-8" /> */}

          <div className=" mb-6 flex flex-row items-center justify-center relative  md:justify-start">
            <button
              className="text-[12px] mr-4 py-4  px-6 rounded text-white  leading-[14.63px] font-mont font-normal"
              style={{
                background: readmore,
              }}
            >
              Read More
            </button>
            <img
              src={whiteStar}
              alt="star"
              className="absolute right-0 top-2"
            />
          </div>
        </aside>
      </div>
      <hr class="border-b-6  border-customWhite " style={{ width: "100vw" }} />
    </div>
  );
};

export default Article;
