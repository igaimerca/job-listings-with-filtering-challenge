import React from "react";

function JobCard({
  position,
  company,
  langauges,
  role,
  level,
  contract,
  logo,
}) {
  return (
    <div className="w-9/12 my-7 m-auto job-card h-auto flex items-center flex-wrap justify-around py-7 px-3 rounded-md border-left">
      <div className="profile flex my-2">
        <img src={logo} alt="" />
      </div>
      <div className="job-details flex flex-col flex-[1] my-2 mx-3">
        <div className="title flex my-1 flex-wrap">
          <h2 className="primary-color font-bold">{company}</h2>
          <span className="badge primary-bg rounded-full px-2 pt-1 text-sm font-bold text-white new-badge">
            NEW!
          </span>
          <span className="badge badge very-dark-grayish-cyan-bg rounded-full px-2 pt-1 text-sm font-bold text-white">
            FEATURED
          </span>
        </div>
        <h1 className="font-bold very-dark-grayish-cyan-color position cursor-pointer">{position}</h1>
        <div className="metadata flex items-center justify-between">
          <small className="dark-grayish-cyan-color">1d ago</small>
          <div className="dot rounded-full dark-grayish-cyan-bg"></div>
          <small className="dark-grayish-cyan-color">{contract}</small>
          <small className="dark-grayish-cyan-color">USA only</small>
        </div>
      </div>
      <div className="tech-stack flex justify-end flex-[2] mx-3 primary-color font-bold">
        <ul className="flex tech-stack-ul flex-wrap">
          <li>{role}</li>
          <li>{level}</li>
          {langauges && langauges.map((langauge) => <li>{langauge}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default JobCard;
