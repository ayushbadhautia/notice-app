import SiteHeader from "../components/Header";
import Header from "../components/Header";

export default function NoticePage({ isEvents,isNotice,setIsEvent,setIsNotice}){
  return (
  <>
    <SiteHeader isEvents={isEvents} setIsEvent={setIsEvent} isNotice={isNotice} setIsNotice={setIsNotice} />
  </>
  );
}