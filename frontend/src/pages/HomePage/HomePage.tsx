import { SimpleGrid } from '@chakra-ui/react';
import { Trip } from '../../models';
import { TripCard } from './components';

export interface HomePageProps {
  trips: Trip[];
  handleLearnMoreClick: (id: number) => void;
}

export function HomePage({ trips, handleLearnMoreClick }: HomePageProps) {
  return (
    <SimpleGrid columns={3} spacingX="30px" spacingY="30px">
      {trips.map(trip => <TripCard trip={trip} handleLearnMoreClick={handleLearnMoreClick} />)}
    </SimpleGrid>
  );
}