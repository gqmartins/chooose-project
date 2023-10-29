import { useParams } from 'react-router-dom';
import { DetailPage } from './DetailPage';
import { Trip } from '../../models';
import { useEffect, useState } from 'react';
import TripsApi from '../../api';

export function DetailPageContainer() {
  const { id } = useParams();
  const [trip, setTrip] = useState<Trip | undefined>(undefined);

  useEffect(() => {
    TripsApi.getTrip(+id!).then(response => setTrip(response));
  }, []);

  return <DetailPage trip={trip} />;
}