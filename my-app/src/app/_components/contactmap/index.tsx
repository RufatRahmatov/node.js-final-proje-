"use client";

import { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa"; // FaEnvelope ikonunu sildim
import { HiOutlineClock } from "react-icons/hi";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -37.744,
  lng: 144.965,
};

const options = {
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
};

const MapComponent = () => {
  const [zoom, setZoom] = useState(14);

  const onZoomChange = useCallback((newZoom: number) => {
    setZoom(newZoom);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 mt-10 w-[1200px] ml-[320px] mb-10">
      <h2 className="text-4xl font-medim mb-5">Contact</h2>
      <p className="mb-5 text-gray-600 mb-10">
        Click on your nearest store location below to set the road on Google
        Map.
      </p>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          options={options}
          onZoomChanged={() => onZoomChange(zoom)}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      <div className="flex flex-col md:flex-row justify-around items-center w-full mt-10 p-5   ">
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-3xl text-gray-800 mb-2" />
          <h3 className="text-lg font-semibold">OUR STORE</h3>
          <p>7021 Washington SQ.</p>
          <p>South New York, NY 10012</p>
        </div>
        <div className="flex flex-col items-center mt-5 md:mt-0">
          <FaPhone className="text-3xl text-gray-800 mb-2" />
          <h3 className="text-lg font-semibold">CONTACT INFO</h3>
          <p>Telephone: 703.172.3412</p>
          <p>Email: hello@example.com</p>
        </div>
        <div className="flex flex-col items-center mt-5 md:mt-0">
          <HiOutlineClock className="text-3xl text-gray-800 mb-2" />
          <h3 className="text-lg font-semibold">BUSINESS HOURS</h3>
          <p>Monday - Sunday:</p>
          <p>09:00 am - 20:00 pm</p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
