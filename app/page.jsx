import Navbar from "../components/navbar";
import Image from "next/image";
import SmCard from "../components/small_card";
import MapCard from "../components/map_card";

const card_data = [
  {
    image_src: "/active_cs.png",
    title: "Active Charging Station",
    value: "5",
  },
  {
    image_src: "/charge_today.png",
    title: "Charge Today",
    value: "2",
  },
  {
    image_src: "/transaction_today.png",
    title: "Transaction Today",
    value: "2",
  },
  {
    image_src: "/kwh_delivered.png",
    title: "KWH Delivered Today",
    value: "94,059",
  },
  {
    image_src: "/cost_of_energy.png",
    title: "Cost Of Energy Today",
    value: "235.147",
  },
  {
    image_src: "/kwh_pv_delivered.png",
    title: "KWH PV Delivered Today",
    value: "27,390",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="h-screen w-full absolute left-0 bg-[url('/universitas_indonesia.jpg')] bg-cover blur-[0px] z-0"></div>
        <div className="px-10 z-10 h-fill">
          <div id="title" className="relative h-12 py-6 mb-[4.25rem]">
            <div className="w-[5%] h-full absolute left-0">
              <Image
                src="/battery.png"
                fill={true}
                alt="Battery"
                className="object-contain"
              />
            </div>
            <h1 className="text-end text-2xl font-semibold text-[#464255] drop-shadow-lg">
              Dashboard
            </h1>
            <p className="text-end text-[#464255] drop-shadow-lg text-xs">
              Hi Admin! Welcome back to Sonik!
            </p>
          </div>
          {card_data == null ? (
            <div className="flex flex-row gap-8">No Card Data</div>
          ) : (
            <div className="flex flex-row gap-8">
              {card_data.map((data) => (
                <SmCard
                  key={data.title}
                  image_src={data.image_src}
                  title={data.title}
                  value={data.value}
                />
              ))}
            </div>
          )}
          <div id="map_card" className="relative my-6">
            <MapCard />
          </div>
        </div>
      </div>
    </>
  );
}
