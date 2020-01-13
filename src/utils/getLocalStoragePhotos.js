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
            content: 'photo'
          },
          {
            id: 2,
            content: 'photo'
          },
          {
            id: 3,
            content: 'photo'
          },
          {
            id: 4,
            content: 'photo'
          },
          {
            id: 5,
            content: 'photo'
          },
          {
            id: 6,
            content: 'photo'
          },
          {
            id: 7,
            content: 'photo'
          },
          {
            id: 8,
            content: 'photo'
          },
          {
            id: 9,
            content: 'photo'
          },
          {
            id: 10,
            content: 'photo'
          }
        ],
        isActive: false
      },
      {
        id: 2,
        year: 2018,
        name: 'Summer',
        size: 4,
        countPhotos: 8,
        albumPhotos: [
          {
            id: 1,
            content: 'photo'
          },
          {
            id: 2,
            content: 'photo'
          },
          {
            id: 3,
            content: 'photo'
          },
          {
            id: 4,
            content: 'photo'
          },
          {
            id: 5,
            content: 'photo'
          },
          {
            id: 6,
            content: 'photo'
          },
          {
            id: 7,
            content: 'photo'
          },
          {
            id: 8,
            content: 'photo'
          }
        ],
        isActive: false
      }
    ]
  }
};