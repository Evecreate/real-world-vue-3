import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Edit from '../Edit.vue';

describe('Edit', () => {
  it('Logged in show button', () => {
    const wrapper = mount(Edit, {
      props: {
        loggedIn: true,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('button').isVisible()).toBe(true);
  });
  it('Logged out do not show button', () => {
    const wrapper = mount(Edit, {
      props: {
        loggedIn: false,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('button').isVisible()).toBe(false);
  });
});
