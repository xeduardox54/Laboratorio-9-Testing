import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { fireEvent, prettyDOM } from '@testing-library/dom'
import Filter from './filter';

test('renderizar filter', () => {
    const filter = {
       content: 'this is a test',
       important: true
    }
    const component = render(<Filter filter={filter}/>)
    console.log(component)

})

test('renders content', () => {
    const a = {
       content: 'buscar input',
       important: true
    }
    const component = render(<Filter a={a}/>)
    component.getByText('filter show with')
    console.log(component)

})