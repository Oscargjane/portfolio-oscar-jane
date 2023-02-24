import Link from 'next/link';
import { greeting, about, bio } from '@/lib/info';
import { ArrowIcon } from '@/components/icons';

export default function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-4xl">{greeting}</h1>
      <p className="max-w-lg my-5">{about()}</p>
      <p className="max-w-xl my-5">{bio()}</p>
      <ul className="flex mt-8 space-x-6 font-sm text-neutral-500">
        <li>
          <Link
            className="transition-all flex items-center hover:text-neutral-700"
            href="/projects"
          >
            <ArrowIcon />
            <p className="h-8">view my projects</p>
          </Link>
        </li>
        <li>
          <Link
            className="transition-all flex items-center hover:text-neutral-700"
            href="/contact"
          >
            <ArrowIcon />
            <p className="h-8">contact me</p>
          </Link>
        </li>
      </ul>
    </section>
  );
}

// I'm a student of the Master in Full-Stack Development at Nuclio Digital School.
