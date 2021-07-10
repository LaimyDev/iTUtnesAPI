import React from 'react';
import renderer from 'react-test-renderer';
import SearchForm from '../components/SearchForm';

//form for searching items being tested here via snapshot
test('renders correctly', () => {
    const tree = renderer
    .create(<SearchForm></SearchForm>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})