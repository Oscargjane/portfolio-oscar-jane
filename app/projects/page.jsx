import clsx from 'clsx';

export const metadata = {
  title: 'Projects',
};

export default async function ProjectsPage() {
  const projectItem = {
    'password-generator': {
      name: 'Password Generator',
      overview:
        'Small random password generator application, created with the goal of getting my hands dirty with React.',
      tags: ['reactjs', 'styled-components', 'vite', 'netlify'],
      url: 'https://github.com/Oscargjane/password-generator-app',
    },
    mountain: {
      name: 'Mountain',
      overview:
        'Web application that helps people to ingrain new behaviors into their identity effectively and simply.',
      tags: [],
    },
  };

  return (
    <section>
      <h1 className="font-bold text-3xl">Projects</h1>
      <p className="my-5">
        I am constantly seeking to acquire new skills and develop myself both
        personally and professionally. Here are some of my personal projects.
      </p>
      <ul className="w-full lg:w-screen flex flex-col lg:flex-row lg:justify-center mt-12 lg:ml-[-50%] gap-5 ">
        {Object.entries(projectItem).map(
          ([id, { name, overview, tags, url }]) => {
            return (
              <li
                key={id}
                className={clsx(
                  'w-full flex flex-col lg:w-1/3 p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-all',
                  { 'cursor-not-allowed': id === 'mountain' }
                )}
              >
                <a href={url} target="_blank" rel="noreferrer">
                  <h2 className="font-bold flex items-center">
                    {name}
                    {id === 'mountain' ? (
                      <span className="ml-3 py-1 px-2 rounded-lg text-xs  text-white bg-neutral-900">
                        coming soon
                      </span>
                    ) : null}
                  </h2>
                  <p className="my-5 text-base text-neutral-700">{overview}</p>
                  <ul className="flex flex-wrap gap-2">
                    {tags.map((tag) => {
                      return (
                        <li
                          key={tag}
                          className="self-center py-1 px-2 rounded-lg bg-neutral-100"
                        >
                          <span className="text-sm text-neutral-700">
                            {tag}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </a>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
}
