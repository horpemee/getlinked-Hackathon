import React from "react";
import pstar from "./stars/star pu (1).png";
import wstar from "./stars/star (3).png";
import lstar from "./stars/star (2).png";

const Timeline = () => {
  const Activities = [
    {
      id: 1,
      heading: "Hackathon Announcement",
      body: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      date: "November 18, 2023",
    },
    {
      id: 2,
      heading: "Teams Registration begins",
      body: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
      date: "November 18, 2023",
    },
    {
      id: 3,
      heading: " Registration ends",
      body: "Interested Participants are no longer Allowed to register",
      date: "November 18, 2023",
    },
    {
      id: 4,
      heading: "Announcement of the accepted teams and ideas",
      body: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
      date: "November 18, 2023",
    },
    {
      id: 5,
      heading: "Getlinked Hackathon 1.0 Offically Begins",
      body: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
      date: "November 18, 2023",
    },
    {
      id: 6,
      heading: "Demo Day",
      body: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
      date: "November 18, 2023",
    },
  ];

  const circularfig = "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)";

  return (
    <div className=" relative font-normal px-10 py-14 border-t-[1px] border-customWhite    bg-customBurger flex text-[12px] flex-col font-mont text-center  text-white  items-center justify-center">
      <h1 className="font-clash font-bold text-[20px] leading-[26.6px]">
        Timeline
      </h1>
      <h2 className=" px-6 mt-4 mb-20 text-[14px]  leading-[24.14px] md:w-[50%] ">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </h2>
      <img src={pstar} alt="pstar" className="absolute left-20 top-48" />
      <img
        src={lstar}
        alt="pstar"
        className="absolute right-[30%] bottom-[45%]"
      />

      <img src={wstar} alt="pstar" className="absolute left-8 bottom-12" />

      <>
        {Activities.map((activity) => (
          <div className="md:grid md:grid-cols-2">
            <div className="mb-8 flex-col   ">
              <div className="md:grid">
                <div className="  text-left border-l-2 mx-2 flex justify-items-center border-primaryColor flex-col">
                  <div className=" pl-4  ">
                    <h2 className="text-primaryColor font-bold leading-[14.63px]">
                      {activity.heading}
                    </h2>
                    <h2 className=" my-2 leading-[19.19px]">{activity.body}</h2>
                  </div>
                </div>
              </div>

              <div className="grid">
                <div className="items-center  text-left   mt-1 w-full  bottom-0 flex gap-2 flex-row   leading-[14.63px] font-bold ">
                  <h1
                    className=" items-center   flex justify-center    rounded-full w-[20px] h-[20px]"
                    style={{ background: circularfig }}
                  >
                    {activity.id}
                  </h1>
                  <h2>{activity.date}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default Timeline;
