import clsx from 'clsx';

export default async function ProjectsPage() {
  const projectItem = {
    'password-generator': {
      name: 'Password Generator',
      overview:
        'A small random password generator application was created to get my hands dirty with a bit of React and practice fundamental front-end development skills.',
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
        I am constantly improving myself and my skills, these are some of the
        personal projects I have done:
      </p>
      <div className="w-screen mt-12 ml-[-50%] flex gap-5 justify-center">
        {Object.entries(projectItem).map(
          ([id, { name, overview, tags, url }]) => {
            return (
              <a
                key={id}
                href={url}
                target="_blank"
                className={clsx(
                  'flex flex-col w-1/3 p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-all',
                  { 'cursor-not-allowed': id === 'mountain' }
                )}
                rel="noreferrer"
              >
                <h2 className="font-bold flex items-center">
                  {name}
                  {id === 'mountain' ? (
                    <span className="ml-3 py-1 px-2 rounded-lg text-xs  text-white bg-neutral-900">
                      coming soon
                    </span>
                  ) : null}
                </h2>
                <p className="my-5 text-base text-neutral-700">{overview}</p>
                <ul className="flex space-x-2">
                  {tags.map((tag) => {
                    return (
                      <li
                        key={tag}
                        className="py-1 px-2 rounded-lg bg-neutral-100"
                      >
                        <span className="text-sm text-neutral-700">{tag}</span>
                      </li>
                    );
                  })}
                </ul>
              </a>
            );
          }
        )}
      </div>
    </section>
  );
}
