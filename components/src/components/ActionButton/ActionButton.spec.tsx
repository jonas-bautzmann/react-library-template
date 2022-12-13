import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { ActionButtonVariant } from './ActionButton.model';
import ActionButton from './ActionButton';

describe('ActionButton', () => {
  it('should render button element', () => {
    render(<ActionButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render default slot as button caption', () => {
    render(<ActionButton>Test Caption</ActionButton>);
    expect(screen.getByRole('button')).toHaveTextContent('Test Caption');
  });

  it.each<[string, ActionButtonVariant]>([
    ['action-button--default', 'default'],
    ['action-button--primary', 'primary'],
    ['action-button--secondary', 'secondary'],
  ])('should render class "%s" when variant is "%s"', (className, variant) => {
    render(<ActionButton variant={variant} />);
    expect(Array.from(screen.getByRole('button').classList)).toContain(
      className
    );
  });

  it('should emit click event when button is clicked', async () => {
    const clickSpy = jest.fn();
    render(<ActionButton onClick={clickSpy} />);
    const user = userEvent.setup();
    await user.click(screen.getByRole('button'));
    expect(clickSpy).toHaveBeenCalledTimes(1);
    expect(clickSpy).toHaveBeenCalledWith(expect.any(Object));
  });
});
