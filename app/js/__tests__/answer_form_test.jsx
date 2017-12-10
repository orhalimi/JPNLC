import React from 'react';
import renderer from 'react-test-renderer';
import AnswerContainer from '../components/conjuctionPractice/practiceSession/answerSection/AnswerContainer';

test('answer form render correctly', () => {
  const component = renderer.create(<AnswerContainer />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
