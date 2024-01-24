import * as turf from "@turf/turf";
export function getCenterByGeoArrys(arr: any[]) {
  const polygon = turf.polygon(arr)
  return turf.centerOfMass(polygon).geometry.coordinates;
}

export function getCenterByGeoPoints(arr: any[]) {
  const features = turf.featureCollection(arr.map((itm) => {
    return turf.point(itm)
  }))
  const center = turf.center(features);
  return center.geometry.coordinates;
}