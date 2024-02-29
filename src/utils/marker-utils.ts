// markerUtils.ts

interface Destination {
  lat: number;
  lng: number;
}

export const markerUtils = (
  map: google.maps.Map | null,
  destinations: Destination[]
) => {
  if (!map) return;

  const zoomLevel = map.getZoom();
  if (zoomLevel === undefined) return; // Verificar se zoomLevel não é undefined

  const visibleMarkers: google.maps.Marker[] = [];

  // Limite de zoom para agrupar os marcadores
  const clusterZoomLevel = 1;

  // Adicionar marcadores visíveis
  destinations.forEach((destination, index) => {
    const marker = new google.maps.Marker({
      position: destination,
      label: `${index + 1}`,
      map: zoomLevel >= clusterZoomLevel ? map : null, // Mostrar marcador apenas se o zoom for maior ou igual ao limite de agrupamento
    });
    visibleMarkers.push(marker);
  });

  // Agrupar marcadores quando o zoom for menor que o limite de agrupamento
  if (zoomLevel < clusterZoomLevel) {
    createCircle(map, visibleMarkers);
  }
};

// Função para criar um círculo na área com a quantidade de marcadores
const createCircle = (
  map: google.maps.Map,
  markers: google.maps.Marker[]
): google.maps.Circle | null => {
  // Verificar se há marcadores
  if (markers.length === 0) return null;

  // Calcular o centro da área
  const bounds = new google.maps.LatLngBounds();
  for (const marker of markers) {
    bounds.extend(marker.getPosition()!);
  }
  const center = bounds.getCenter();

  // Calcular o raio do círculo com base na quantidade de marcadores
  const radius = Math.sqrt(markers.length) * 10; // Ajuste conforme necessário

  // Criar o círculo
  const circle = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    center,
    radius,
  });

  return circle;
};
