import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../index';
import pokemon from './pokemon.json';

describe('components/Card', () => {
    it('renders correctly', () => {
        render(<Card pokemon={pokemon} />);
    });
});
