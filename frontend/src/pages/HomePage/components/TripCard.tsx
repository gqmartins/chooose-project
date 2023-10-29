import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Spacer, Stack, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'
import { Trip } from '../../../models';
import { getUnits, round } from '../../../utils';

const MAX_STARS = 5;

export interface TripCardProps {
  trip: Trip;
  handleLearnMoreClick: (id: number) => void;
}

export function TripCard({ trip, handleLearnMoreClick }: TripCardProps) {
  const countriesCount = trip.countries.length;
  const starsCount = Math.round(trip.rating);
  const yellowStars = Array.from(Array(starsCount).keys())
  const greyStars = Array.from(Array(MAX_STARS - starsCount).keys());
  const co2KilogramsUnit = getUnits(trip.co2kilograms);
  const co2KilogramsRounded = round(trip.co2kilograms);

  return (
    <Card rounded={15}>
      <Box margin="15px" backgroundImage={trip.photoUrl} rounded={15}>
      <CardBody>
        <Stack spacing="10px" alignItems="center">
          <Heading textColor="white" textAlign="center">{trip.title}</Heading>
          <Text align="center" fontWeight="bold" textColor="white">{countriesCount} countries, {trip.days} days</Text>
          <Button colorScheme="blue" width="120px" marginTop="20px" onClick={() => handleLearnMoreClick(trip.id)}>Learn more</Button>
        </Stack>
        <Card marginTop="40px" backgroundColor="gray.900" marginLeft="5%" marginRight="5%">
          <CardBody>
            <Flex>
              <Text fontWeight="bold" textColor="white" fontSize="sm">Emissions offset:</Text>
              <Spacer />
              <Text fontWeight="bold" textColor="white" fontSize="sm">{co2KilogramsRounded} {co2KilogramsUnit} CO<sub>2</sub>e</Text>
            </Flex>
          </CardBody>
        </Card>
      </CardBody>
      <CardFooter backgroundColor="white" marginLeft="6%" marginRight="6%" roundedTopRight={15} roundedTopLeft={15}>
        <Flex width="100%">
          <Text fontWeight="bold">Trip rating</Text>
          <Spacer />
          <Flex alignItems="center">
            {yellowStars.map(_ => <StarIcon color="yellow.300" marginRight="5px" />)}
            {greyStars.map(_ => <StarIcon color="gray" marginRight="5px" />)}
            <Text fontWeight="bold" marginLeft="20px">{trip.rating}</Text>
          </Flex>
        </Flex>
      </CardFooter>
      </Box>
    </Card>
  );
}