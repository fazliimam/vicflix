import { Skill } from '@models';
import { nanoid } from 'nanoid';

export enum TechnosList {
  React = 'React',
  Vue = 'Vue',
  Vitest = 'Vitest',
  Playwright = 'Playwright',
  Vitepress = 'Vitepress',
  VuePress = 'VuePress',
  Nuxt = 'Nuxt',
  Gatsby = 'Gatsby',
  Tailwind = 'Tailwind',
  GraphQL = 'GraphQL',
  Typescript = 'Typescript',
  Stripe = 'Stripe',
  MapBox = 'MapBox',
  Leaflet = 'Leaflet',
  Gitlab = 'Gitlab CI',
  Jest = 'Jest',
  Animejs = 'Animejs',
  Chartjs = 'Chartjs',
  Angular = 'Angular',
  Karma = 'Karma',
  Jasmine = 'Jasmine',
  Gridsome = 'Gridsome',
  GitHub = 'GitHub',
  Git = 'Git',
  Docker = 'Docker',
  Python = 'Python'
}

export const TechnosConstant: Skill[] = [
  { title: TechnosList.Vue, logo: 'technos/Vue.js', color: '#4fc08d', id: nanoid(4) },
  { title: TechnosList.Nuxt, logo: 'technos/Nuxt', color: '#00c58e', id: nanoid(4) },
  { title: TechnosList.Typescript, logo: 'technos/Typescript', color: '#3178c6', id: nanoid(4) },
  { title: TechnosList.Vitest, logo: 'technos/Vitest', color: '#FCC72B', id: nanoid(4) },
  { title: TechnosList.Playwright, logo: 'technos/Playwright', color: '#D65348', id: nanoid(4) },
  { title: TechnosList.GraphQL, logo: 'technos/GraphQL', color: '#e10098', id: nanoid(4) },
  { title: TechnosList.Vitepress, logo: 'technos/Vitepress', color: '#BD34FE', id: nanoid(4) },
  { title: TechnosList.Tailwind, logo: 'technos/Tailwind', color: '#06B6D4', id: nanoid(4) },
  { title: TechnosList.React, logo: 'technos/ReactJs', color: '#61dafb', id: nanoid(4) },
  { title: TechnosList.Gatsby, logo: 'technos/Gatsby', color: '#663399', id: nanoid(4) },
  { title: TechnosList.Gridsome, logo: 'technos/Gridsome', color: '#00A672', id: nanoid(4) },
  { title: TechnosList.Gitlab, logo: 'technos/GitLab', color: '#fa7035', id: nanoid(4) },
  { title: TechnosList.Stripe, logo: 'technos/Stripe', color: '#635bff', id: nanoid(4) },
  { title: TechnosList.MapBox, logo: 'technos/Mapbox', color: '#4264fb', id: nanoid(4) },
  { title: TechnosList.Leaflet, logo: 'technos/Leaflet', color: '#199900', id: nanoid(4) },
  { title: TechnosList.Chartjs, logo: 'technos/Chartjs', color: '#FF6384', id: nanoid(4) },
  { title: TechnosList.Animejs, logo: 'technos/Animejs', color: '#F64E4D', id: nanoid(4) },
  { title: TechnosList.Jest, logo: 'technos/Jest', color: '#99424f', id: nanoid(4) },
  { title: TechnosList.VuePress, logo: 'technos/VuePress', color: '#4fc08d', id: nanoid(4) },
  { title: TechnosList.Angular, logo: 'technos/Angular', color: '#dd1b16', id: nanoid(4) },
  { title: TechnosList.Karma, logo: 'technos/Karma', color: '#429F87', id: nanoid(4) },
  { title: TechnosList.Jasmine, logo: 'technos/Jasmine', color: '#8A4182', id: nanoid(4) },
  // { title: TechnosList.GitHub, logo: 'technos/GitHub', color: '#181717', id: nanoid(4) },
  // { title: TechnosList.Git, logo: 'technos/Git', color: '#F05032', id: nanoid(4) },
  // { title: TechnosList.Docker, logo: 'technos/Docker', color: '#2496ED', id: nanoid(4) },
  { title: TechnosList.Python, logo: 'technos/Python', color: '#3776AB', id: nanoid(4) }


];
