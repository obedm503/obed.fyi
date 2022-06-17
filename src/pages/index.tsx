import { createMemo, For, Show } from 'solid-js';
import { createQuery } from 'solid-urql';
import { Links } from '../components/links';

const projects: {
  title: string;
  repo?: string;
  url: string;
  nameWithOwner?: string;
  image: string;
  description: string;
}[] = [
  {
    title: 'nuffread.com',
    nameWithOwner: 'obedm503/nuffread',
    url: 'https://beta.nuffread.com/',
    repo: 'https://github.com/obedm503/nuffread',
    image: '/nuffread.png',
    description: '',
  },
  {
    title: 'NCAI StudentAccess',
    nameWithOwner: 'ncai-developers/studentaccess',
    url: 'https://studentaccess.netlify.app/',
    repo: 'https://github.com/ncai-developers/studentaccess',
    image: '/studentaccess.png',
    description: 'NCAI student mobile client.',
  },
  {
    title: 'Engage for Equity Survey',
    description: 'Internal survey to evaluate community health.',
    image: '/e2-logo.png',
    url: 'https://survey.engageforequity.org/',
  },
  {
    title: 'obedm.com',
    nameWithOwner: 'obedm503/obedm.com',
    url: 'https://obedm.com/',
    repo: 'https://github.com/obedm503/obedm.com',
    image: '/obedm.png',
    description: '',
  },
  {
    title: 'microwiki',
    nameWithOwner: 'obedm503/microwiki',
    url: '',
    repo: 'https://github.com/obedm503/microwiki',
    image: '/micro-wiki.png',
    description: '',
  },
  {
    title: 'Virtual Memory Simulator',
    nameWithOwner: 'obedm503/vm-sim',
    url: '',
    repo: 'https://github.com/obedm503/vm-sim',
    image: '/linux-penguin.png',
    description: '',
  },
];

const REPOS = `
  fragment Repo on RepositoryConnection {
    nodes {
      createdAt
      description
      languages(first: 10) {
        nodes {
          id
          name
          color
        }
      }
      id
      nameWithOwner
      updatedAt
      pushedAt
      owner {
        id
      }
    }
  }

  query {
    organization(login: "ncai-developers") {
      repositories(first: 100, privacy: PUBLIC, ownerAffiliations: OWNER) {
        ...Repo
      }
    }
    repositoryOwner(login: "obedm503") {
      repositories(first: 100, privacy: PUBLIC) {
        ...Repo
      }
    }
  }
`;

export default function Index() {
  const [items] = createQuery({ query: REPOS });
  const repos = createMemo(() => {
    if (!items()) {
      return;
    }
    const allRepos = [
      ...items().repositoryOwner.repositories.nodes,
      ...items().organization.repositories.nodes,
    ];
    const map = {};
    for (const repo of allRepos) {
      map[repo.nameWithOwner] = repo;
    }
    return map;
  });

  return (
    <div>
      <div class="bg-gradient-to-r from-primary to-violet-900">
        <div class="md:w-1/3 mx-auto pt-32 pb-44 px-8 text-white text-center">
          <h2 class="text-2xl uppercase font-bold font-mono">
            I'm <span class="">Obed Miranda</span>
          </h2>
          <h1 class="text-4xl py-2">
            I architect and program user-facing systems.
          </h1>
          <p class="text-lg">
            Bootstrapping{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.apexhash.com"
              class="underline"
            >
              ApexHash
            </a>{' '}
            and{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://beta.nuffread.com"
              class="underline"
            >
              nuffread.com
            </a>
            .
          </p>

          <div class="pt-4 text-white">
            <Links />
          </div>
        </div>
        <div class="relative">
          <svg
            class="absolute bottom-[-1px]"
            viewBox="0 0 1428 174"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(-2.000000, 44.000000)"
                fill="#F5F5F5"
                fill-rule="nonzero"
              >
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  id="Path-4"
                  opacity="0.200000003"
                ></path>
              </g>
              <g
                transform="translate(-4.000000, 76.000000)"
                fill="#F5F5F5"
                fill-rule="nonzero"
              >
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <div class="md:max-w-6xl mt-4 px-8 mx-auto">
        <h2 class="text-center p-4 text-2xl font-semibold pb-8">
          Proof of Work
        </h2>

        <div class="space-y-4 md:space-y-0 md:grid gap-4 grid-cols-3">
          <For each={projects}>
            {item => {
              const repo = () => repos()?.[item.nameWithOwner];

              return (
                <div class="p-4 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg hover:scale-105 transition duration-500 ease-in-out">
                  <img
                    src={item.image}
                    alt={item.title}
                    class="block mx-auto max-h-36 h-full"
                  />

                  <div class="pt-4">
                    <h2 class="text-xl font-semibold">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.url}
                        class="hover:text-primary flex items-center hover:underline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-[1em] w-[1em] mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        {item.title}
                      </a>
                    </h2>

                    <Show when={item.repo}>
                      {repoUrl => (
                        <div class="text-md flex justify-start py-1">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={repoUrl}
                            class="flex items-center font-semibold text-primary hover:text-blue-600 hover:underline"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-[1em] w-[1em] mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width={2}
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                              />
                            </svg>
                            Source
                          </a>
                        </div>
                      )}
                    </Show>

                    <div class="flex flex-wrap mb-2">
                      {repo()?.languages.nodes.map(l => (
                        <span class="text-sm mx-1 flex items-center">
                          <svg
                            style={{ color: l.color }}
                            height="20"
                            width="20"
                            viewBox="0 0 16 16"
                            version="1.1"
                            class="inline-block fill-current mr-1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8z"
                            ></path>
                          </svg>
                          {l.name}
                        </span>
                      ))}
                    </div>

                    <p>{item.description || repo()?.description}</p>
                  </div>
                </div>
              );
            }}
          </For>
        </div>
      </div>
    </div>
  );
}
