export type IProgramDT = {
  id: number;
  img: string;
  title: string;
  description: string;
  category: string;
  longDesc?: string;
  shortEligible?:string,
  years?:string,
  age?: string;
  time?: string;
  size?: string;
career?: Array<string>;
};
