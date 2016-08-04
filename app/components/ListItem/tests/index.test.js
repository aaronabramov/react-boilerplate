import ListItem from '../index';

import { shallow } from 'enzyme';
import React from 'react';

describe('<ListItem />', () => {
  it('should adopt the className', () => {
    const renderedComponent = shallow(<ListItem className="test" />);
    expect(renderedComponent.find('li').hasClass('test')).toBe(true);
  });

  it('should render the content passed to it', () => {
    const content = 'Hello world!';
    const renderedComponent = shallow(
      <ListItem item={content} />
    );
    expect(renderedComponent.contains(content)).toBe(true);
  });
});
