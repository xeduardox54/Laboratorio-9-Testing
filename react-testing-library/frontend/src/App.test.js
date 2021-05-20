import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { fireEvent, prettyDOM } from '@testing-library/dom'
import App from './App';

test('renders content', ()=> {
  const app = {
    content: 'Phonebook',
    important: true
  }

  const component = render(<App app={app}/>)
  component.getByText('Phonebook')
  component.getByText('filter show with')

})
