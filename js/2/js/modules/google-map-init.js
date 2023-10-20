export function googleMapInit(map) {
  const maps = document.querySelectorAll('.gmap');
  if (!maps[0]) return;
  for (let i = 0; i < maps.length; i++) {
    initMap(maps[i]);
  }
}
