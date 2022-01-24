import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  console.log(wrapper.debug())
  if (state) wrapper.setState(state);
  return wrapper;
}

const findByTestAtr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`)
}

test("render without error", () => {
  const wrapper = setup();
  const component = findByTestAtr(wrapper, "component-app");
  expect(component.length).toBe(1);
});

test("render increment button", () => {
  const wrapper = setup();
  const component = findByTestAtr(wrapper, "increment-button");
  expect(component.length).toBe(1);
});

test("render counter display", () => {
  const wrapper = setup();
  const component = findByTestAtr(wrapper, "counter-display");
  expect(component.length).toBe(1);
});

test("counter start at 0", () => {
  const wrapper = setup()
  const initaionState = wrapper.state().counter;
  expect(initaionState).toBe(0);
});

test("clicking button increments counter display", () => {
  const counter = 11;
  const wrapper = setup(null, { counter })

  //find button and click
  const btn = findByTestAtr(wrapper, "increment-button");
  btn.simulate('click');

  //find displau counter
  const counterDisplay = findByTestAtr(wrapper, "counter-display");
  console.log(counterDisplay)
  expect(counterDisplay.text()).toContain(String(counter + 1));


}); 