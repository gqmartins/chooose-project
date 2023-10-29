import { Center, Spinner } from '@chakra-ui/react';

export function LoadingItem() {
  return (
    <Center margin="40px">
      <Spinner size="xl" />
    </Center>
  );
}