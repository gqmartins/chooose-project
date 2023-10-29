import { Box, SimpleGrid } from '@chakra-ui/react';
import { Trip } from '../../models';
import { TripCard } from './components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LoadingItem } from './components/LoadingItem';

const infiniteScroolStyles = {
  overflow: 'hidden'
};

export interface HomePageProps {
  trips?: Trip[];
  handleLearnMoreClick: (id: number) => void;
  fetchData: () => void;
  hasMore: boolean;
}

export function HomePage({ trips, handleLearnMoreClick, fetchData, hasMore }: HomePageProps) {
  return (
    <Box padding="30px" backgroundColor='blackAlpha.50'>
      <InfiniteScroll dataLength={trips ? trips.length : 0} next={fetchData} hasMore={hasMore} loader={<LoadingItem />} style={infiniteScroolStyles}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} spacingX="30px" spacingY="30px">
          {trips && trips.map(trip => <TripCard trip={trip} handleLearnMoreClick={handleLearnMoreClick} />)}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
}