import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { ExampleButton } from './Button';

describe('example test', () => {
  it('renders a button', () => {
    render(<ExampleButton />);
  });
});
