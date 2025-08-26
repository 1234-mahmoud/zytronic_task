import About_Luxury from "@/components/About_Luxury";
import BestRooms from "@/components/BestRooms";
import Food_Drinks from "@/components/Food_Drinks";
import Header from "@/components/Header";
import Hiro from "@/components/Hiro";
import HotelServices from "@/components/HotelServices";
import Rooms from "@/components/Rooms";
import Spetial_Offers from "@/components/Spetial_Offers";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <Hiro/>
      <About_Luxury/>
      <BestRooms/>
      <HotelServices/>
      <Video/>
      <Food_Drinks/>
      <Spetial_Offers/>
      <Testimonials/>
      <Rooms/>
    </div>
  );
}
