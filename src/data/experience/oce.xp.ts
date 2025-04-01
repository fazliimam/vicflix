import { TechnosList } from '@constants';
import { ExperienceType } from '@models';
import { differenceInMonths } from 'date-fns';
import { Experience } from 'models/xp.model';

export const oceXp: Experience = {
  id: 'OnqllpoI',
  logo: 'https://k2-prod-alm.s3.us-east-1.amazonaws.com/brightspot/52/24/cdc7ec5a4f588909b17bd978939c/stax-master-frame-2.png',
  description: `Océ Printing Technologies est ma première expérience professionnelle en tant que développeur.
  
  Dans le cadre de mon BTS SIO, j'ai du réaliser un stage d'une durée de 2 mois durant lesquels j'ai pu découvrir des technologies telles qu'angularjs et Typescript.
  
  À la suite de ce stage, j'ai réalisé un contrat d'alternance de 3 ans en parallèle avec mon diplôme d'ingénieur du web à l'ESGI.
  J'ai pu découvrir en plus de nouvelles technologies telle que le C#, le SCSS, Websockets et Webpack, les méthodes de travail en Agile et Scrum.
  `,
  title: 'Stax Inc',
  technos: [
    TechnosList.Python,
    TechnosList.Pytorch,
    TechnosList.SKlearn,
    TechnosList.Tensorflow,
    TechnosList.Numpy,
    TechnosList.Pandas,
    TechnosList.Selenium,
    TechnosList.Beautifulsoup,
    TechnosList.Excel,
    TechnosList.Powerpoint,
  ],
  year: 2022,
  type: ExperienceType.Job,
  duration: differenceInMonths(new Date(2021, 7, 1), new Date(2022, 7, 1)),
  role: 'Data Scientist',
  links: [{ link: 'https://www.stax.com/colombo', title: 'Stax' }],
  location: 'Colombo, Sri Lanka, France',
};
