const ID = ':id';

export const Home = '/';
export const Detail = `/detail/${ID}`;

export const getDetailRoute = (tripId: number) => Detail.replace(ID, tripId.toString());