import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toBeDisabled(): R;
      // Add other custom matchers as needed
    }
  }
}
