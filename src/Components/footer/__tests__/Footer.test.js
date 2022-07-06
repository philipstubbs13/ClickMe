import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('when passed valid props', () => {
    test('should render', () => {
        render(<Footer />)

        expect(screen.getByText(/clickme/i)).toBeInTheDocument()
    })

    test('should render github repo link', () => {
        render(<Footer />)

        expect(screen.getByText(/github repo/i)).toHaveProperty('href', 'https://github.com/philipstubbs13/ClickMe')
    })

    test('should render linkedin link', () => {
        render(<Footer />)

        expect(screen.getByText(/linkedin/i)).toHaveProperty('href', 'https://www.linkedin.com/in/philipjstubbs/')
    })
})

