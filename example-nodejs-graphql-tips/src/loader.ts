export const getPlace = (id: string) => {
  return null;
};

export const getPlacesByIds = (ids: string[]) => {
  return ids.map((id) => getPlace(id));
};
