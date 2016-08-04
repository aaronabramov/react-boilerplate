/**
 * Testing our link component
 */

import A from '../index';

import { shallow } from 'enzyme';
import React from 'react';

describe('<A />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <A href="mxstbr.com">
        {children}
      </A>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should adopt the className', () => {
    const renderedComponent = shallow(<A className="test" href="mxstbr.com"><h1>Test</h1></A>);
    expect(renderedComponent.find('a').hasClass('test')).toBe(true);
  });

  it('should adopt the href', () => {
    const renderedComponent = shallow(<A href="mxstbr.com"><h1>Test</h1></A>);
    expect(renderedComponent.prop('href')).toBe('mxstbr.com');
  });

  it('should adopt the target', () => {
    const renderedComponent = shallow(<A target="_blank" href="mxstbr.com"><h1>Test</h1></A>);
    expect(renderedComponent.prop('target')).toBe('_blank');
  });
});
