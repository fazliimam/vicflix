import { TechnosList } from '@constants';
import { ExperienceType } from '@models';
import { differenceInMonths } from 'date-fns';
import { Experience } from 'models/xp.model';

export const totemXp: Experience = {
  id: 'jzfjYGK',
  logo: 'https://fazliimam.github.io/images/ADNOC_2.png',
  description: `Totem est mon premier emploi en CDI et mon poste actuel.

  Totem est une Agence Digitale basée à Paris, spécialisée dans la conception, le design et le développement web et mobile.
  J'ai été recruté comme développeur front-end et était le seul quand je suis arrivé.
  
  Mon travail consiste à créer et publier des applications et sites web communiquant avec nos APIs.
  C'est durant ce poste que j'ai pu apprendre à communiquer avec une API GraphQL, développer des cartes interactives, à faire des estimations. 
  Chaque projet m'apportait une compétence particulière.
  Au fur et à mesure des mois, mon panel de connaissances s'étandait et j'ai pu expérimenter le lead de projet, de travailler avec d'autres développeurs sur le même projet, faire les décisions techniques et donner des instructions.
  
  J'ai pu découvrir et m'améliorer sur beaucoup de technologies, notemment GraphQL, Nuxt, Vue et Typescript.
  Cela m'a permi aussi d'aller plus loin de créer des outils me permettant de travailler plus rapidement et plus surement tout en améliorant l'expérience de développement.`,
  title: 'Totem',
  technos: [
    TechnosList.Python,
    TechnosList.Pytorch
  ],
  year: 2024,
  type: ExperienceType.Job,
  duration: differenceInMonths(new Date(2024, 6, 1), new Date(2024, 8, 30)),
  role: 'Data Science Intern',
  links: [{ link: 'http://adnoc.ae/', title: 'ADNOC' }],
  location: 'Abu Dhabi, UAE',
};
