import SiteHeader from "../components/Header";
import { EVENTS } from "../../data/Event";
import EventCard from "../components/EventCard";

export default function EventPage({ isEvents,isNotice,setIsEvent,setIsNotice}){
  return (<>
    <SiteHeader isEvents={isEvents} setIsEvent={setIsEvent} isNotice={isNotice} setIsNotice={setIsNotice} />
    {EVENTS.map((event)=>{
      return (<EventCard key={event.id} event={event} />);
    })}
  </>);
}