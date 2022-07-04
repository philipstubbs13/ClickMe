import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

const propsMock = {
    count: 3,
    message: 'messageMock',
    topScore: 5,
}

describe('when passed valid props', () => {
    test('should render', () => {
        render(<Navbar {...propsMock} />)

        expect(screen.getByText(/clickme/i)).toBeInTheDocument()
    })
})

describe('when #count is passed', () => {
    test('should render #count', () => {
        render(<Navbar {...propsMock} />)

        expect(screen.getByText(/score: 3/i)).toBeInTheDocument()
    })
})

describe('when #topScore is passed', () => {
    test('should render #topScore', () => {
        render(<Navbar {...propsMock} />)

        expect(screen.getByText(/top score: 5/i)).toBeInTheDocument()
    })
})

describe('when #message is passed', () => {
    test('should render #message', () => {
        render(<Navbar {...propsMock} />)

        expect(screen.getByText(/messagemock/i)).toBeInTheDocument()
    })
})