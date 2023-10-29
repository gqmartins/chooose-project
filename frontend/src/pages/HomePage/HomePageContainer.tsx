import { HomePage } from './HomePage';
import TripsApi from '../../api';
import { useNavigate } from 'react-router-dom';
import { getDetailRoute } from '../../routes';
import { useInfiniteQuery } from '@tanstack/react-query';

const ITEMS_PER_PAGE = 10;

export function HomePageContainer() {
  const navigate = useNavigate();

  const handleLearnMoreClick = (id: number) => navigate(getDetailRoute(id));

  const getTrips = async ({ pageParam = 1}) => {
    const response = await TripsApi.getTrips(pageParam, ITEMS_PER_PAGE);
    return { ...response, prevOffset: pageParam };
  }

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['trips'],
    queryFn: getTrips,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1
  });

  const trips = data?.pages.flatMap(page => page.data);

  return <HomePage trips={trips!} handleLearnMoreClick={handleLearnMoreClick} fetchData={fetchNextPage} hasMore={hasNextPage} />;
}