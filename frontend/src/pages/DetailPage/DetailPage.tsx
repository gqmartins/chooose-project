import { Box, Flex, Heading, Link, Text, Image } from '@chakra-ui/react';
import { Trip } from '../../models';
import { AdvantageList, DetailCard } from './components';

export interface DetailPageProps {
  trip?: Trip;
}

export function DetailPage({ trip }: DetailPageProps) {
  if (!trip) {
    return <Heading>Loading...</Heading>
  }

  return (
    <Box padding="30px" backgroundColor="blackAlpha.50">
      <Link>Go Back</Link>
      <Heading>{trip.title}</Heading>
      <Text>{trip.subtitle}</Text>
      <Flex>
        <Image src={trip.photoUrl}></Image>
        <DetailCard trip={trip} />
      </Flex>
      <Text>Overview</Text>
      <AdvantageList advantages={trip.advantages} />
      <Text>{trip.description}</Text>
    </Box>
  );
}