import { describe, it, expect } from 'vitest';

import LoginForm from '@/components/LoginForm.vue';
import { mount } from '@vue/test-utils';

describe('LoginForm', () => {
  it('emits an event with a user data payload', () => {
    const wrapper = mount(LoginForm);
    const input = wrapper.find('input[type="text"]'); 

    input.setValue('Test');
    wrapper.trigger('submit');

    expect(wrapper.emitted('formSubmitted')).toHaveLength(1);

    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject({ name: 'Test' });
  });
});
