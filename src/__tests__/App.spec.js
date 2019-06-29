import { mount } from '@vue/test-utils';
import App from '../App.vue';
import lottie from '../lottie.vue';

describe('App', () => {
  it('should match the element snapshots', () => {
    const wrapper = mount(App, {
      stubs: [
        'lottie',
      ],
    });
    expect(wrapper.is('div.app')).toBeTruthy();
    expect(wrapper.find(lottie)).toBeTruthy();
  });
});
