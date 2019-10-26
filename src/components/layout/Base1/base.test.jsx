import React from 'react';
import renderer from 'react-test-renderer';
import defaultTheme from 'src/themes/default';
import styled from '@emotion/styled';
import Base from '.';

const Text = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
`;

describe('Base', () => {
  test('should rendered a styled component with theme', () => {
    const contentText = 'Hello World';
    const tree = renderer
      .create(
        <Base theme={defaultTheme}>
          <Text>{contentText}</Text>
        </Base>,
      )
      .toJSON();

    expect(tree && tree.children && tree.children[0]).toEqual(contentText);
    // className should be there
    expect(tree && tree.props.className).toBeDefined();
  });
});
