import React from "react";
import imgProject from "../../assets/placeholder.svg";
import "./styles.css";

function Main() {
  return (
    <main>
      <section id="about" class="py-12 md:py-16">
        <div class="container mx-auto px-4 md:px-6">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h2 class="text-3xl font-bold mb-4">About Me</h2>
              <p class="text-gray-500 leading-relaxed">
                Hola, soy Juan Lacruz, un apasionado desarrollador full-stack
                con más de 5 años de experiencia en la industria. me especializo
                en la construccion aplicaciones web modernas, responsivas y
                escalables que utilizan últimas tecnologías y mejores prácticas.
              </p>
            </div>
            <div>
              <h2 class="text-3xl font-bold mb-4">Contact</h2>
              <ul class="space-y-2">
                <li class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-mail"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>

                  <span className="text-black">juanluislcm@gmail.com</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-phone"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                  <span className="text-black">+58 424-1778808</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-map-pin"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                  </svg>
                  <span className="text-black">Venezuela</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={imgProject}
                alt="Project 1"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <p className="text-gray-500 mb-4">
                  A modern and responsive web application built with React,
                  Node.js, and MongoDB.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                    React
                  </div>
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                    Node.js
                  </div>
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                    MongoDB
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  <a
                    href="http://#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Live Site
                  </a>
                  <a
                    href="http://#"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={imgProject}
                alt="Project 2"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project 2</h3>
                <p className="text-gray-500 mb-4">
                  A mobile-friendly e-commerce platform built with Next.js,
                  TypeScript, and Prisma.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                    Next.js
                  </div>
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                    TypeScript
                  </div>
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                    Prisma
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  <a
                    href="http#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Live Site
                  </a>
                  <a
                    href="http#"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={imgProject}
                alt="Project 3"
                width={600}
                height={400}
                className="imgProjects w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project 3</h3>
                <p className="text-gray-500 mb-4">
                  A real-time chat application built with Socket.IO, Express,
                  and Vue.js.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold w-fit text-foreground">
                    Socket.IO
                  </div>
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold text-foreground">
                    Express
                  </div>
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold text-foreground">
                    Vue.js
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  <a
                    href="http://#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Live Site
                  </a>
                  <a
                    href="http://#"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-2">
              <svg
                data-id="85"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-8 w-8 text-gray-500">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span className="text-gray-500">JavaScript</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg
                data-id="85"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-8 w-8 text-gray-500">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span className="text-gray-500">TypeScript</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg
                data-id="85"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-8 w-8 text-gray-500">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span className="text-gray-500">React</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg
                data-id="85"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-8 w-8 text-gray-500">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span className="text-gray-500">Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg
                data-id="85"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-8 w-8 text-gray-500">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span className="text-gray-500">MongoDB</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg
                data-id="85"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-8 w-8 text-gray-500">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span className="text-gray-500">SQL</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg
                data-id="85"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-8 w-8 text-gray-500">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span className="text-gray-500">Git</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg
                data-id="85"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-8 w-8 text-gray-500">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span className="text-gray-500">Docker</span>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">My Experience</h2>
          <div className="grid grid-cols-1-e md:grid-cols-2-e gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Full-Stack Developer</h3>
              <p className="text-gray-500 mb-2">Acme Inc. | 2018 - Present</p>
              <p className="text-gray-500 leading-relaxed">
                As a full-stack developer at Acme Inc., I was responsible for
                building and maintaining complex web applications using the
                latest technologies. I collaborated with cross-functional teams
                to design, develop, and deploy scalable and user-friendly
                solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Front-End Developer</h3>
              <p className="text-gray-500 mb-2">XYZ Corp. | 2015 - 2018</p>
              <p className="text-gray-500 leading-relaxed">
                At XYZ Corp., I worked as a front-end developer, focusing on
                building responsive and visually appealing user interfaces using
                HTML, CSS, and JavaScript. I also collaborated with back-end
                developers to integrate the front-end with the server-side
                logic.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
