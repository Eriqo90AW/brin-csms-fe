"use client";
import { useState, useMemo, useCallback, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";
import Image from "next/image";
import MainTable from "./main_table";
import { Skeleton } from "@/components/ui/skeleton";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "12px",
};

const CustomMarker = ({ onClick }) => (
  <div
    style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}
    onClick={onClick}
  >
    Custom Marker
  </div>
);

export default function map_card() {
  const center = useMemo(
    () => ({ lat: -6.366847044084141, lng: 106.82802525693874 }),
    []
  );
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const handleMarkerClick = () => {
    setShowInfoWindow(true);
  };
  const handleInfoWindowClose = () => {
    setShowInfoWindow(false);
  };
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });
//   const { isLoaded } = false;
  return (
    <div className="text-black bg-white w-full h-full rounded-md box-shadow">
      <h1 className="text-[#576974] text-xl font-semibold ml-10 pt-5 pb-3">
        Charging Stations Data
      </h1>
      <div className="h-[21rem] mx-10 flex gap-6">
        <div className="h-full w-[32.5%] pb-7">
          {!isLoaded ? (
            <Skeleton className="h-full w-full" />
          ) : (
            <GoogleMap
              zoom={15}
              center={center}
              mapContainerStyle={containerStyle}
            >
              <Marker position={center} onClick={handleMarkerClick}>
                <CustomMarker />
              </Marker>
              {showInfoWindow && (
                <InfoWindow
                  position={center}
                  onCloseClick={handleInfoWindowClose}
                >
                  <div>
                    <h3 className="font-bold">CSMS Rektorat</h3>
                    <p>Berada didepan PAUI...</p>
                    <p>Total Charges: 10</p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          )}
        </div>
        <div className="w-[67.5%]">
          <MainTable />
        </div>
      </div>
    </div>
  );
}
