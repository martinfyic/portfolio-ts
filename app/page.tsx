import type { Metadata } from 'next';
import { HeroSection } from '@/components';

export const metadata: Metadata = {
  title: 'Martin Ferreira | Full Stack Web Developer',
  description:
    'Portfolio de Martin Ferreira Yic, Desarrollador Web Full Stack, stack MERN, Next.js, CSS, HTML',
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
    </main>
  );
}
