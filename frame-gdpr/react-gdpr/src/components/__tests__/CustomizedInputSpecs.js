import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import CustomizedInput from '../CustomizedInput.jsx';

describe('CustomizedInput component', () => {
  it('should render a input box', () => {
    const input = mount(<CustomizedInput />);
    expect(input.find('TextField')).to.exist;
  });
});