import { describe, it, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import EventCard from '../EventCard.vue';

describe('EventCard', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(EventCard, {
      props: {
        event: {
          id: 123,
          category: 'animal welfare',
          title: 'Cat Adoption Day',
          description: 'Find your new feline friend at this event.',
          location: 'Meow Town',
          date: 'January 28, 2022',
          time: '12:00',
          petsAllowed: true,
          organizer: 'Kat Laydee',
        },
      },
      stubs: ['RouterLink']
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
