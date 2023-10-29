import { Box, Heading, Link as ChakraLink, Text, Image, Grid, GridItem } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Trip } from '../../models';
import { AdvantageList, DetailCard } from './components';
import { Home } from '../../routes';

export interface DetailPageProps {
  trip?: Trip;
}

export function DetailPage({ trip }: DetailPageProps) {
  if (!trip) {
    return <Heading>Loading...</Heading>
  }

  return (
    <Box padding="3%" backgroundColor="blackAlpha.50">
      <ChakraLink as={ReactRouterLink} to={Home} textColor="gray.500" fontWeight="bold">Go Back</ChakraLink>
      <Heading marginTop="40px">{trip.title}</Heading>
      <Text marginTop="10px" textColor="gray.500">{trip.subtitle}</Text>
      <Grid marginTop="30px">
        <GridItem marginRight={{lg: "3%"}} marginBottom={{base: "5%", lg: "0%"}} colSpan={{sm: 12, lg: 10}}>
          <Image src={trip.photoUrl} rounded={15} width="100%"></Image>
        </GridItem>
        <GridItem colSpan={{sm: 12, lg: 2}}>
          <DetailCard trip={trip} />
        </GridItem>
        <GridItem colSpan={{sm: 12}}>
          <Text fontSize="2xl" fontWeight="bold" marginTop="30px" marginBottom="30px">Overview</Text>
          <AdvantageList advantages={trip.advantages} />
          <Text marginTop="30px">{trip.description}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
}