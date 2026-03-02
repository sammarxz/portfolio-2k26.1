export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface StackItem {
  name: string;
  logo: string;
  bg: string;
}

export interface Venture {
  name: string;
  description: string;
  url: string;
  logo: string;
}

export interface Tool {
  name: string;
  logo: string;
  url: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  logo: string;
}

export interface PersonalPhoto {
  src: string;
  alt: string;
  rotate: string;
}

export interface PersonalPodcast {
  name: string;
  description: string;
  url: string;
  logo: string;
  spotify: string;
}

export interface Personal {
  photos: PersonalPhoto[];
  podcast: PersonalPodcast;
}
