import React from 'react';
import { render, screen } from '@testing-library/react';
import { Container } from '../Container';

describe('when passed valid props', () => {
    test('should render', () => {
        render(<Container>Hello</Container>)

        expect(screen.getByText(/hello/i)).toBeInTheDocument()
    })
})
