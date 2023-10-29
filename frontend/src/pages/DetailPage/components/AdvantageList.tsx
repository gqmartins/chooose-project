import { Box, Flex, Icon, SimpleGrid, Text } from '@chakra-ui/react';
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
    <Icon as={RiFlag2Line}/>,
    <Icon as={GoBriefcase} />,
    <Icon as={PiGlobeHemisphereEast} />,
    <Icon as={GrGroup} />
  ];

  return (
    <SimpleGrid columns={2}>
      {advantages.map((advantage, index) => (
        <Box>
          <Flex>
            {icons[index]}
            <Text>{advantage.title}</Text>
          </Flex>
          <Text>{advantage.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  )
}