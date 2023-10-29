import { useEffect, useState } from 'react';
import { Trip } from '../../models';
import { HomePage } from './HomePage';
import TripsApi from '../../api';
import { useNavigate } from 'react-router-dom';
import { getDetailRoute } from '../../routes';

const ITEMS_PER_PAGE = 10;

export function HomePageContainer() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleLearnMoreClick = (id: number) => navigate(getDetailRoute(id));

  const fetchData = () => {
    TripsApi.getTrips(page, ITEMS_PER_PAGE).then(response => {
      setTrips([...trips, ...response.data]);
      setHasMore(!response.lastPage);
    });
    setPage(page + 1);
  };

  useEffect(() => {
    fetchData();  
  }, []);

  return <HomePage trips={trips} handleLearnMoreClick={handleLearnMoreClick} fetchData={fetchData} hasMore={hasMore} />;
}