import Button from './Button'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, beforeEach, vi, expect } from 'vitest'

let props = {
  label: 'button',
  onClick: vi.fn()
}

beforeEach(() => {
  props = {
    label: 'button',
    onClick: props.onClick.mockClear()
  }
})

describe('Button component', () => {
  it('Renders Button component into the DOM', () => {
    expect.assertions(1)

    render(
      <Button
        label={props.label}
        onClick={props.onClick}
      />
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('Button click handler is called when clicked', () => {
    expect.assertions(1)

    const {label, onClick} = props

    render(
      <Button
        label={label}
        onClick={onClick}
      />
    )

    fireEvent.click(screen.getByRole('button'))

    expect(onClick).toHaveBeenCalledOnce()
  })
})