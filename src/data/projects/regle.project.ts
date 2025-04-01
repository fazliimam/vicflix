import { TechnosList } from '@constants';
import { Project, ProjectContext, ProjectType } from '@models';

export const regleProject: Project = {
  title: 'Label-free Adaptation of CLIP for Remote Sensing',
  picture:
    'https://fazliimam.github.io/images/nola_arc.png',
  placeholder:
    'https://fazliimam.github.io/images/nola_arc.png',
  slogan: '📏 Typescript-first model-based form validation library for Vue 3',
  description: `
  - Engineered and deployed a label-free adaptation method (ALP-RS) to enhance remote sensing scene classification,
eliminating the need for labeled datasets.
  - Explored the efficacy of auto-labelled prompt tuning by leveraging contextual knowledge from LLM to generate
pseudo labels and adapt CLIP for remote sensing settings.
  `,
  logo: 'github.png',
  videos: [],
  year: 2024,
  links: [
    {
      title: 'Thesis',
      link: 'https://dclibrary.mbzuai.ac.ae/mletd/42/',
    },
  ],
  
  type: [ProjectType.Library],
  id: 'VjLD93nK',
  technos: [TechnosList.Pytorch, TechnosList.Python, TechnosList.Pandas, TechnosList.Numpy],
  context: ProjectContext.Personal,
};
