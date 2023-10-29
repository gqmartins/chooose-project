import { Card, CardBody, CardHeader, Heading, ListItem, SimpleGrid, UnorderedList, Text, Divider } from '@chakra-ui/react';
import { Trip } from '../../../models';
import { getUnits, round } from '../../../utils';

export interface DetailCardProps {
  trip: Trip;
}

export function DetailCard({ trip }: DetailCardProps) {
  const co2KilogramsUnit = getUnits(trip.co2kilograms);
  const co2KilogramsRounded = round(trip.co2kilograms);

  return (
    <Card>
      <CardHeader>
        <Heading>{trip.days} days</Heading>
        <Text marginTop="10px" textColor="gray.500">Emissions: {co2KilogramsRounded} {co2KilogramsUnit} CO<sub>2</sub>e</Text>
      </CardHeader>
      <Divider width="90%" color="gray.300" alignSelf="center"/>
      <CardBody textColor="gray.500">
        <Text>Countries included:</Text>
        <UnorderedList marginTop="10px">
          <SimpleGrid columns={{sm: 1, md: 2}}>
            {trip.countries.map(country => <ListItem>{country}</ListItem>)}
          </SimpleGrid>  
        </UnorderedList>
      </CardBody>
    </Card>
   );
}