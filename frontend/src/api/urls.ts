export const tripsUrl = (page: number, itemsPerPage: number) => `trips?_page=${page}&_limit=${itemsPerPage}`;
export const tripUrl = (id: number) => `trips/${id}`;