import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import RandomNumber from '../RandomNumber.vue';

describe('RandomNumber', () => {
  it('By default, randomNumber data value should be 0', () => {
    const wrapper = mount(RandomNumber);

    const randomNumber = parseInt(wrapper.find('span').text());
    expect(randomNumber).toBe(0);
  });

  it('If button is clicked, randomNumber should be between default 0 and 10', async () => {
    const wrapper = mount(RandomNumber);

    await wrapper.find('button').trigger('click');
    const randomNumber = parseInt(wrapper.find('span').text());
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });

  it('If button is clicked, randomNumber should be between 200 and 300', async () => {
    const wrapper = mount(RandomNumber, {
      props: {
        min: 200,
        max: 300,
      },
    });
    await wrapper.find('button').trigger('click');
    const randomNumber = parseInt(wrapper.find('span').text());
    expect(randomNumber).toBeGreaterThanOrEqual(200);
    expect(randomNumber).toBeLessThanOrEqual(300);
  });
});
