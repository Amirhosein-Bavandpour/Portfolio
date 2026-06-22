# Portfolio Website

A responsive personal portfolio website for showcasing my frontend projects, skills, CV, and contact links.

The site is built with React, Vite, TailwindCSS, and Framer Motion. It includes animated sections, project cards, technology tags, downloadable CV support, social/contact links, SEO metadata, and a Docker-ready production build.

## Features

- Responsive single-page portfolio layout
- Hero section with profile image and call-to-action buttons
- About section
- Skills grouped by category
- Project cards with images, descriptions, technology tags, GitHub links, and live demo links
- Work-in-progress badge support for active projects
- CV download section
- Contact cards for email, GitHub, and LinkedIn
- Animated section reveal effects with Framer Motion
- SEO and Open Graph metadata
- Docker production deployment with Nginx

## Tech Stack

- React
- Vite
- TailwindCSS
- Framer Motion
- React Icons
- JavaScript
- TypeScript config support
- Docker
- Nginx

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Docker

Build the Docker image:

```bash
docker build -t portfolio .
```

Run the container:

```bash
docker run -p 8080:80 portfolio
```

Then open:

```txt
http://localhost:8080
```

## Project Structure

```txt
src/
  components/
    About.jsx
    AnimatedBackground.jsx
    Contact.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    Projects.jsx
    Resume.jsx
    SectionWrapper.jsx
    Skills.jsx
  data/
    projects.js
  pages/
    Home.jsx
  App.jsx
  main.jsx
  index.css

public/
  cv.pdf
  profile.png
  og-image.png
  projects/
```

## Updating Projects

Project cards are managed in:

```txt
src/data/projects.js
```

Each project can include:

```js
{
  title: "Project Name",
  status: "Work in progress",
  description: "Short project description.",
  technologies: ["React", "Vite"],
  image: "/projects/image.png",
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/username/project",
}
```

The `status` field is optional. When added, it appears as a small glowing badge next to the project title.

## Assets

Main public assets:

- `public/cv.pdf`
- `public/profile.png`
- `public/og-image.png`
- `public/projects/weather-app.png`
- `public/projects/portfolio.png`
- `public/projects/Messenger.png`
- `public/projects/Blog.png`

## Author

Amirhosein Bavandpour

- GitHub: [Amirhosein-Bavandpour](https://github.com/Amirhosein-Bavandpour)
- LinkedIn: [amirhosein-bavandpour](https://linkedin.com/in/amirhosein-bavandpour)
