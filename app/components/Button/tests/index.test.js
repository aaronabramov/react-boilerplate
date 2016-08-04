/**
 * Testing our Button component
 */

import Button from '../index';

import { shallow } from 'enzyme';
import React from 'react';

describe('<Button />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <Button href="http://mxstbr.com">
        {children}
      </Button>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should adopt the className', () => {
    const renderedComponent = shallow(<Button className="test"><h1>Test</h1></Button>);
    expect(renderedComponent.find('a').hasClass('test')).toBe(true);
  });

  it('should render an <a> tag if no route is specified', () => {
    const renderedComponent = shallow(<Button href="http://mxstbr.com"><h1>Test</h1></Button>);
    expect(renderedComponent.find('a').length).toBe(1);
  });

  it('should render a button to change route if the handleRoute prop is specified', () => {
    const renderedComponent = shallow(<Button handleRoute={function handler() {}}><h1>Test</h1></Button>);

    expect(renderedComponent.find('button').length).toBe(1);
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = shallow(<Button onClick={onClickSpy}><h1>Test</h1></Button>);
    renderedComponent.find('a').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
