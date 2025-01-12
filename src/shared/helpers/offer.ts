import { City, Convenience, HouseTypeEnum, MockOffer, UserTypeEnum } from '../types/index.js';

export function createMockOffer(offerData: string): MockOffer {
  const [title, description, postDate, city, preview, images, isPremium, houseType, room, guest, price, conveniences, name, email, avatar, type, commentsCount, coords] = offerData.replace('\n', '').split('\t');
  const [lat, lon] = coords.split(';');
  return {
    title,
    description,
    postDate: new Date(postDate),
    city: city as City,
    preview,
    images: images.split(';'),
    isPremium: isPremium === 'true',
    houseType: houseType as HouseTypeEnum,
    room: Number.parseInt(room, 10),
    guest: Number.parseInt(guest, 10),
    price: Number.parseInt(price, 10),
    conveniences: conveniences.split(';') as Convenience[],
    user: {
      name,
      email,
      avatar,
      type: type as UserTypeEnum,
    },
    commentsCount: Number.parseInt(commentsCount, 10),
    coords: [lat, lon],
  };
}
