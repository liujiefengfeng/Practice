import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import {spy} from 'sinon';
import VerticalNav from '../VerticalNav.jsx';

describe('<Foo />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<VerticalNav/>);
    expect(wrapper.find('RaisedButton')).to.exist;
  });
});