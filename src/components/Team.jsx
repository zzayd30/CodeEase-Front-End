import React from "react";
import User1 from "../assets/my_pic.jpg";
import User2 from "../assets/majo2.jpg";

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
        <div className="team-card gap-3 ">
          <TeamCard name="Muhammad Zaid" post="CEO" pic={User1} gitHub="https://github.com/zzayd30" linkedin = "https://www.linkedin.com/in/muhammad-zaid-latif-3488a9276/" />
          <TeamCard name="Muaz Khalid" post="Head of Sweeper" pic={User2} gitHub="https://github.com/muazkhalid936"  linkedin="https://www.linkedin.com/in/muaz-khalid-a8b8672b7/"/>
        </div>
      </div>
    </div>
  );
};

export default Team;
