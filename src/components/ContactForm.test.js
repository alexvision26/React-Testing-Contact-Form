import React from 'react';
import { render, getByText, fireEvent, getByPlaceholderText } from '@testing-library/react';
import ContactForm from './ContactForm';
import 'mutationobserver-shim';

test('contact form is rendered', () => {
    render(<ContactForm/>)
})

test('renders form inputs', () => {
    const { getByText } = render(<ContactForm/>)
    getByText(/first name/i)
})

test('check label text', () => {
    const { getByLabelText } = render(<ContactForm/>);
    getByLabelText(/first name/i);
})

test('form submit adds user', () => {
    const { getByLabelText } = render(<ContactForm/>);

    const fNameInput = getByLabelText(/first name/i)
    const lNameInput = getByLabelText(/last name/i)
    const emailInput = getByLabelText(/email/i)
    const messageInput = getByLabelText(/message/i)

    fireEvent.change(fNameInput, {target: { value: 'First Test' } })
    fireEvent.change(lNameInput, {target: { value: 'Last Test' } })
    fireEvent.change(emailInput, {target: { value: 'test@email.com' } })
    fireEvent.change(messageInput, {target: { value: 'Message Test' } })

    expect(fNameInput.value).toBe('First Test')
    expect(lNameInput.value).toBe('Last Test')
    expect(emailInput.value).toBe('test@email.com')
    expect(messageInput.value).toBe('Message Test')
})

test('are placeholders blank', () => {
    const { getAllByPlaceholderText } = render(<ContactForm/>);

    const pValue = getAllByPlaceholderText(/^\s*$/);

})