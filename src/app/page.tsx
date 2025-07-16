import type { Metadata } from 'next';
import type { JSX } from 'react';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page of the app',
};

export default function Home(): JSX.Element {
  return <div>Home</div>;
}
