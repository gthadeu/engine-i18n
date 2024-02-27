import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: -19.912998,
    lng: -43.940933,
  };

  const m1 = {
    lat: -19.9131,
    lng: -43.9409,
  };

  const m2 = {
    lat: -19.91305,
    lng: -43.94095,
  };

  const m3 = {
    lat: -19.91295,
    lng: -43.94088,
  };

  const m4 = {
    lat: -19.91295,
    lng: -43.94097,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyD_Ox8zpx-oKaKmgY-5EwbJbQKbuOE7LK0">
      <GoogleMap mapContainerStyle={mapStyles} zoom={8} center={defaultCenter}>
        <Marker position={m1} />
        <Marker position={m2} />
        <Marker position={m3} />
        <Marker position={m4} />
        {/* Mais marcadores podem ser adicionados aqui com diferentes posições */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
