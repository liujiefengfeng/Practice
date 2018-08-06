import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import {spy} from 'sinon';
import VerticalNav from '../VerticalNav.jsx';

describe('VerticalNav component', () => {
  it('should render Drawer component', () => {
    const wrapper = mount(<VerticalNav/>);
    expect(wrapper.find('Drawer')).to.exist;
  });
});