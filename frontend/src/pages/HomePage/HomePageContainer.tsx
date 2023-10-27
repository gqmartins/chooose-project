import { useState } from 'react';
import { Trip } from '../../models';
import { HomePage } from './HomePage';

export function HomePageContainer() {
  const [trips, setTrips] = useState<Trip[]>([
    {
      id: 1,
      photoUrl: "https://picsum.photos/780/380?random=1",
      title: "European Quest",
      subtitle: "Lorem ipsum dolor sit amet",
      countries: [
        "Norway",
        "Poland",
        "Germany",
        "Austria",
        "Italy",
        "Switzerland",
        "France",
        "Spain"
      ],
      days: 21,
      co2kilograms: 4010.56,
      rating: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
      advantages: [
        {
          title: "1st advantage",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui."
        },
        {
          title: "2nd advantage",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui."
        },
        {
          title: "3rd advantage",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui."
        },
        {
          title: "4th advantage",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui."
        }
      ]
    },
    {
      id: 1,
      photoUrl: "https://picsum.photos/780/380?random=1",
      title: "European Quest",
      subtitle: "Lorem ipsum dolor sit amet",
      countries: [
        "Norway",
        "Poland",
        "Germany",
        "Austria",
        "Italy",
        "Switzerland",
        "France",
        "Spain"
      ],
      days: 21,
      co2kilograms: 4010.56,
      rating: 4.7,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
      advantages: [
        {
          title: "1st advantage",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui."
        },
        {
          title: "2nd advantage",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui."
        },
        {
          title: "3rd advantage",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui."
        },
        {
          title: "4th advantage",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui."
        }
      ]
    },
    {
      id: 1,
      photoUrl: "https://picsum.photos/780/380?random=1",
      title: "European Quest",
      subtitle: "Lorem ipsum dolor sit amet",
      countries: [
        "Norway",
        "Poland",
        "Germany",
        "Austria",
        "Italy",
        "Switzerland",
        "France",
        "Spain"
      ],
      days: 21,
      co2kilograms: 4010.56,
      rating: 3.7,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
      advantages: [
        {
          title: "1st advantage",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui."
        },
        {
          title: "2nd advantage",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui."
        },
        {
          title: "3rd advantage",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui."
        },
        {
          title: "4th advantage",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui."
        }
      ]
    }
  ]);
  const handleLearnMoreClick = (id: number) => {};

  return <HomePage trips={trips} handleLearnMoreClick={handleLearnMoreClick} />;
}