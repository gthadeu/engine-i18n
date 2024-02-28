import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { geoUtils } from "../utils/geo-utils";

const MapContainer = () => {
  // Coordenadas da origem (ML23)
  const origin = {
    lat: -19.91299,
    lng: -43.940933,
  };

  // Coordenadas dos destinos (por exemplo, três pontos de entrega)
  const destinations = [
    { lat: -19.9131, lng: -43.9409 },
    { lat: -19.91305, lng: -43.94095 },
    { lat: -19.91295, lng: -43.94088 },
    { lat: -23.5489, lng: -46.6388 },
  ];

  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyD_Ox8zpx-oKaKmgY-5EwbJbQKbuOE7LK0">
      {/* TRANSFORMAR EM UM CARD */}
      <div>
        Distância entre origem e destino:{" "}
        {geoUtils(
          origin.lat,
          origin.lng,
          destinations[3].lat,
          destinations[3].lng
        )}{" "}
        km
      </div>
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={origin}>
        {/* origem */}
        <Marker position={origin} label={"ML23"} />
        <Marker position={origin} label={"ML23"} />
        {/* destinos */}
        {destinations.map((destination, index) => (
          <Marker
            key={index}
            position={destination}
            label={`Destino ${index + 1}`}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
