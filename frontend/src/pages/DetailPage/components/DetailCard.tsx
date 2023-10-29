import { Card, CardBody, CardHeader, Heading, ListItem, SimpleGrid, UnorderedList, Text, Divider } from '@chakra-ui/react';
import { Trip } from '../../../models';
import { getUnits, round } from '../../../utils';

export interface DetailCardProps {
  trip: Trip;
}

export function DetailCard({ trip }: DetailCardProps) {
  const formatCountries = (countries: string[]) => {
    var result = [];

    for (let i = 0; i < countries.length; i += 2) {
      var firstCountry = countries[i];
      var secondConutry = countries[i + 1];
      var countriesToAppend = [firstCountry, secondConutry];

      result.push(countriesToAppend);
    }

    return result;
  };

  const co2KilogramsUnit = getUnits(trip.co2kilograms);
  const co2KilogramsRounded = round(trip.co2kilograms);
  const countries = formatCountries(trip.countries);

  return (
    <Card>
      <CardHeader>
        <Heading>{trip.days} days</Heading>
        <Text>Emissions: {co2KilogramsRounded} {co2KilogramsUnit} CO2e</Text>
      </CardHeader>
      <CardBody>
        <Divider />
        <Text>Countries included:</Text>
        <UnorderedList>
          {countries.map(countryPair => (
            <SimpleGrid columns={2}>
              <ListItem>{countryPair[0]}</ListItem>
              {countryPair[1] !== undefined && <ListItem marginLeft="100px">{countryPair[1]}</ListItem>}
            </SimpleGrid>  
          ))}
        </UnorderedList>
      </CardBody>
    </Card>
   );
}