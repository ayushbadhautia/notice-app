import SiteHeader from "../components/Header";

export default function EventPage({ isEvents,isNotice,setIsEvent,setIsNotice}){
  return (<>
    <SiteHeader isEvents={isEvents} setIsEvent={setIsEvent} isNotice={isNotice} setIsNotice={setIsNotice} />
  </>);
}