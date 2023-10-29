import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { Trip } from '../../models';
import { TripCard } from './components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LoadingItem } from './components/LoadingItem';

const infiniteScroolStyles = {
  overflow: 'hidden'
};

export interface HomePageProps {
  trips: Trip[];
  handleLearnMoreClick: (id: number) => void;
  fetchData: () => void;
  hasMore: boolean;
}

export function HomePage({ trips, handleLearnMoreClick, fetchData, hasMore }: HomePageProps) {
  return (
    <Box padding="30px" backgroundColor='blackAlpha.50'>
      <InfiniteScroll dataLength={trips.length} next={fetchData} hasMore={hasMore} loader={<LoadingItem />} style={infiniteScroolStyles}>
        <SimpleGrid columns={3} spacingX="30px" spacingY="30px">
          {trips.map(trip => <TripCard trip={trip} handleLearnMoreClick={handleLearnMoreClick} />)}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
}