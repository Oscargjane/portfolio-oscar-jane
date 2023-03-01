import {
  TwitterIcon,
  GitHubIcon,
  LinkedinIcon,
  ArrowIcon,
} from '@/components/icons';

export default function AboutPage() {
  const socialLinks = {
    twitter: {
      name: 'Twitter',
      link: 'https://twitter.com/oscargjane',
    },
    github: {
      name: 'GitHub',
      link: 'https://github.com/Oscargjane',
    },
    linkedin: {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/oscar-jane-frontend-developer/?locale=en_US',
    },
  };
  return (
    <section>
      <h1 className="font-bold text-3xl">About Me</h1>
      <p className="my-5">
        Hi, I&apos;m Oscar, a <b>self-taught front-end developer</b> based in
        Madrid.
      </p>
      <div className="prose prose-neutral text-neutral-800">
        <p>
          I&apos;m <b>passionate</b> about building for the web. The web is
          amazing. Although I have versatile skills, I&apos;ve always had a
          preference for architectures like JAMstack that offer a rich
          experience for the developer, are easy to scale, and provide the best
          possible performance to the end user.
        </p>
        <hr />
        <p>
          In February 2020 I decided it was time for a change, to connect with
          something I was passionate about, that&apos;s when I discovered
          programming, just by writing a few lines of code I knew it was for me.
          It is the ultimate channel to express my <b>creativity</b> and take
          advantage of my <b>analytical thinking</b> capabilities while helping
          to solve real-world problems.
        </p>
        <p>
          I defend the idea that{' '}
          <i>
            &quot;every career must have as a base a good order and a set of
            good habits to row towards success&quot;
          </i>
          , that&apos;s why I write about these topics on Twitter{' '}
          <b>
            to help new developers to improve and advance in their career as I
            learn and grow
          </b>
          , as well as covering other topics such as JAMstack architecture and
          web performance.
        </p>
        <p>
          When I&apos;m not chopping code or doing research I love to go out and
          put some miles on the Retiro Park, listen to some music, or enjoy a
          good natural wine.
        </p>
      </div>
      <ul className="flex gap-2 items-center mt-8">
        {Object.entries(socialLinks).map(([id, { name, link }]) => {
          return (
            <li className="w-full" key={id}>
              <a
                href={link}
                target="_blank"
                className="flex items-center justify-between w-full p-3 border border-neutral-200 rounded-lg no-underline hover:bg-neutral-100 transition-all"
                rel="noreferrer"
              >
                <div className="flex items-center">
                  {name === 'Twitter' ? (
                    <TwitterIcon />
                  ) : name === 'GitHub' ? (
                    <GitHubIcon />
                  ) : (
                    <LinkedinIcon />
                  )}
                  <p className="ml-3">{name}</p>
                </div>
                <ArrowIcon />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
