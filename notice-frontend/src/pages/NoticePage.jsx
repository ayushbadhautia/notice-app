import SiteHeader from "../components/Header";
import { NOTICES } from "../../data/Notice";
import NoticeCard from "../components/NoticeCard";

export default function NoticePage({ isEvents,isNotice,setIsEvent,setIsNotice}){
  return (
  <>
    <SiteHeader isEvents={isEvents} setIsEvent={setIsEvent} isNotice={isNotice} setIsNotice={setIsNotice} />
    <div className="max-w-3xl mx-auto px-5 py-8 space-y-4">
      {NOTICES.map((notice)=>{
        return <NoticeCard key={notice.id} notice={notice} />;
      })} 
    </div>
    
  </>
  );
}