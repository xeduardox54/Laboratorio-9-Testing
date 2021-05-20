import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { fireEvent, prettyDOM } from '@testing-library/dom'
import PersonForm from './personForm';

test('renders content', () => {
    const names = {
       content: 'this is a test',
       important: true
    }
  
    const component = render(<PersonForm names={names}/>)
    console.log(component)

})
test('renders content', () => {
    const personForm = {
       content: 'boton add',
       important: true
    }
  
    const component = render(<PersonForm personForm={personForm}/>)
    component.getByText('add')
    console.log(component)

})
