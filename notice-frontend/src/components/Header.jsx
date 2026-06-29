import { useState } from 'react';
import './header.css';
import {Link, NavLink} from 'react-router-dom';

export default function SiteHeader({ isEvents,isNotice,setIsEvent,setIsNotice}) {
  
  
  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Institute name */}
          <NavLink to="/" className="flex flex-col leading-tight">
            <span className="font-serif text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
              Bulleteins Board
            </span>
          </NavLink>

          {/* Events & Notice buttons */}
          <div className="flex items-center gap-3">
            <Link onClick={()=>{
              setIsEvent(1);
              setIsNotice(0);
            }}
              to="/event"
              className={
                "px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors duration-200 " +
                (isEvents
                  ? "bg-sky-600 text-white shadow-sm hover:bg-sky-700"
                  : "bg-sky-50 text-sky-700 border border-sky-100 hover:bg-sky-100")
              }
            >
              Events
            </Link>
            <NavLink onClick={()=>{
              setIsEvent(0);
              setIsNotice(1);
            }}
              to="/notice"
              className={
                "px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors duration-200 " +
                (isNotice
                  ? "bg-sky-600 text-white shadow-sm hover:bg-sky-700"
                  : "bg-sky-50 text-sky-700 border border-sky-100 hover:bg-sky-100")
              }
            >
              Notice
            </NavLink>
          </div>
        </div>
      </div>

      {/* Thin accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-sky-100 via-sky-400 to-sky-100" />
    </header>
  );
}