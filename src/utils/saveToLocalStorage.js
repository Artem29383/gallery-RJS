export const saveToLocalStoragePhotos = photos => {
  localStorage.setItem('photos', JSON.stringify(photos));
};