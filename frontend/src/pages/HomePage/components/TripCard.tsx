import { Button, Card, CardBody, CardFooter, Flex, Heading, Spacer, Stack, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'
import { Trip } from '../../../models';

export interface TripCardProps {
  trip: Trip;
  handleLearnMoreClick: (id: number) => void;
}

export function TripCard({ trip, handleLearnMoreClick }: TripCardProps) {
  const MAX_STARS = 5;

  const countriesCount = trip.countries.length;
  const starsCount = Math.round(trip.rating);
  const yellowStars = Array.from(Array(starsCount).keys())
  const greyStars = Array.from(Array(MAX_STARS - starsCount).keys());

  return (
    <Card backgroundImage={trip.photoUrl}>
      <CardBody>
        <Stack spacing="20px">
          <Heading textColor='white' alignSelf='center'>{trip.title}</Heading>
          <Text align="center" fontWeight='bold' textColor='white'>{countriesCount} countries, {trip.days} days</Text>
          <Button colorScheme='blue' width='25%' alignSelf='center' marginTop='20px' onClick={() => handleLearnMoreClick(trip.id)}>Learn more</Button>
        </Stack>
        <Card marginTop='40px' backgroundColor='gray.900' marginLeft='25px' marginRight='25px'>
          <CardBody>
            <Flex>
              <Text fontWeight='bold' textColor='white'>Emissions offset:</Text>
              <Spacer />
              <Text fontWeight='bold' textColor='white'>{trip.co2kilograms}</Text>
            </Flex>
          </CardBody>
        </Card>
      </CardBody>
      <CardFooter backgroundColor='white' marginLeft='20px' marginRight='20px' roundedTopRight={15} roundedTopLeft={15}>
          <Flex justifyItems='center'>
            <Text fontWeight='bold'>Trip rating</Text>
            <Spacer />
            {yellowStars.map(_ => <StarIcon color='yellow.300' />)}
            {greyStars.map(_ => <StarIcon color='gray' />)}
            <Text fontWeight='bold'>{trip.rating}</Text>
          </Flex>
      </CardFooter>
    </Card>
  );
}