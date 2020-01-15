export const getLocalStoragePhotos = () => {
  if (localStorage.getItem('photos')) {
    return JSON.parse(localStorage.getItem('photos'));
  }
  return {
    photos: [
      {
        id: 1,
        year: 2020,
        name: 'Набор картинок',
        size: 4,
        albumPhotos: [
          {
            id: 1,
            img: 'https://images.wallpaperscraft.ru/image/derevo_vodopad_solntse_156518_1920x1080.jpg',
            dateCreated: '14.01.2020',
            localeTime: '15:40',
            name: 'Картина'
          },
          {
            id: 2,
            img: 'https://vgrom.com/uploads/posts/2016-01/vgrom.com_1453714319_1.jpg',
            dateCreated: '14.01.2020',
            localeTime: '15:40',
            name: 'Губы'
          },
          {
            id: 3,
            img: 'https://vgrom.com/uploads/posts/2016-01/vgrom.com_1453714377_18.jpg',
            dateCreated: '12.01.2020',
            localeTime: '15:40',
            name: 'Снег'
          },
          {
            id: 4,
            img: 'https://vgrom.com/uploads/posts/2016-01/vgrom.com_1453714326_22.jpg',
            dateCreated: '10.11.2018',
            localeTime: '18:10',
            name: 'Отдых'
          }
        ],
        isActive: false
      }
    ]
  }
};