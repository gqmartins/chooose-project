import { Box, Flex, Grid, GridItem, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import { RiFlag2Line } from 'react-icons/ri';
import { GoBriefcase } from 'react-icons/go';
import { PiGlobeHemisphereEast } from 'react-icons/pi';
import { GrGroup } from 'react-icons/gr';
import { Advantage } from '../../../models';

export interface AdvantageListProps {
  advantages: Advantage[];
}

export function AdvantageList({ advantages }: AdvantageListProps) {
  const icons = [
    <Icon as={RiFlag2Line} marginRight="10px" boxSize="35" />,
    <Icon as={GoBriefcase} marginRight="10px" boxSize="35" />,
    <Icon as={PiGlobeHemisphereEast} marginRight="10px" boxSize="35" />,
    <Icon as={GrGroup} marginRight="10px" boxSize="35"/>
  ];

  return (
    <SimpleGrid columns={{ sm: 1, lg: 2}}>
      {advantages.map((advantage, index) => (
        <Box marginBottom="20px" marginRight="20px">
          <Grid>
            <GridItem>
              <Flex alignItems="center">
                {icons[index]}
                <Text fontSize='2xl' fontWeight="bold">{advantage.title}</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Text textColor="gray.500">{advantage.description}</Text>
            </GridItem>
          </Grid>
        </Box>
      ))}
    </SimpleGrid>
  )
}