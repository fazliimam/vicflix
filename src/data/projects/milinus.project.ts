import { TechnosList } from '@constants';
import { AppTrads, Project, ProjectContext, ProjectType } from '@models';
import { milinusVideos } from '../videos/milinus.videos';

export const milinusProject: Project = {
  title: 'Milinus Admin',
  picture:
    "src/assets/images/backgrounds/making_a_researcher_poster_cropped.jpg",
  placeholder:
    'src/assets/images/backgrounds/making_a_researcher_poster_cropped.jpg',
  slogan: AppTrads.ProjectDescriptions.Milinus.Slogan,
  description: `Milinus Admin est l'application back office administrateur permettant de gérer et de contrôler le contenu de l'application mobile Milinus.
  Le projet entier comprennait une API, une application mobile et une application web admin.
  
  Cette application suit la charte graphique donnée par le client pour se rapprocher au plus de l'application mobile.
  Elle permet entre autre à: 
  - Créer et personnaliser les programmes
  - Créer et personnaliser des mouvements et exercices
  - Bannir des utilisateurs
  - Administrer les stories des utilisateurs
  - Envoyer des notifications aux utilisateurs

  Rôle: Developeur front web

  Équipe: 2 développeurs back, 1 developpeurs front, 2 developpeurs mobile
  `,
  duration: 6,
  logo: 'milinus.svg',
  videos: Object.values(milinusVideos).flat(),
  year: 2020,
  links: [
    {
      title: 'Site Milinus',
      link: 'https://www.milinus.com',
    },
    {
      title: 'Application Milinus iOS',
      link: 'https://apps.apple.com/us/app/milinus/id1506570411',
    },
  ],
  type: [ProjectType.Mobile, ProjectType.App, ProjectType.Site],
  id: 'Tv7aAl',
  info: AppTrads.Projects.InfoWarning,
  technos: [
    TechnosList.Nuxt,
    TechnosList.Vue,
    TechnosList.Typescript,
    TechnosList.GraphQL,
    TechnosList.Tailwind,
    TechnosList.Gridsome,
    TechnosList.Gitlab,
  ],
  context: ProjectContext.Totem,
};
