export const getLocalStoragePhotos = () => {
  if (localStorage.getItem('photos')) {
    return JSON.parse(localStorage.getItem('photos'));
  }
  return {
    photos: [
      {
        id: 1,
        year: 2020,
        name: 'Subcorpathia',
        size: 4,
        countPhotos: 8,
        albumPhotos: [
          {
            id: 1,
            img: 'red',
            dateCreated: '14.01.2020',
            localeTime: '15:40'
          },
          {
            id: 2,
            img: 'pink',
            dateCreated: '14.01.2020',
            localeTime: '15:40'
          },
          {
            id: 3,
            img: 'yellow',
            dateCreated: '14.01.2020',
            localeTime: '15:40'
          }
        ],
        isActive: false
      }
    ]
  }
};