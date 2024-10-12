import React from "react";
import User1 from "../assets/mustansar.jpg";
import User2 from "../assets/ghazanfar.jpg";
import User3 from "../assets/Attiq.jpg";
import User4 from "../assets/sardar wali.jpg";
import TeamCard from "./TeamCard";
const Team = () => {
  return (
    <div className="">
      <div className="container flex flex-col  p-s  justify-between gap-10">
        <div>
          <p className="font-semibold text-2xl">Meet Out Team</p>
          <p className="my-3">
            Meet the driving force, the minds behind crafting and cutting-edge
            software development company
          </p>
        </div>
        <div className="team-card  gap-3 ">
          <TeamCard name="Mustansar Riaz" post="CEO & Founder" pic={User1} />
          <TeamCard
            name="Ghazanfar Riaz"
            post="CEO & Digital Marketer"
            pic={User2}
          />
          <TeamCard
            name="Hafiz Attiq Rehman"
            post="Web Developer"
            pic={User3}
          />
          <TeamCard name="Sardar Wali Khan" post="Web Developer" pic={User4} />
        </div>
      </div>
    </div>
  );
};

export default Team;
