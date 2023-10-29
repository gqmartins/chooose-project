import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Heading } from '@chakra-ui/react';
import { DetailPage } from './DetailPage';
import TripsApi from '../../api';

export function DetailPageContainer() {
  const { id } = useParams();

  const getTrip = () => TripsApi.getTrip(+id!);
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: [`trip/${id}`],
    queryFn: getTrip
  });

  return (
    <>
      {isLoading && <Heading>Loading</Heading>}
      {isSuccess && <DetailPage trip={data} />}
    </>
  );
}