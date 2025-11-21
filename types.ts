export interface ColorSwatch {
  hex: string;
  name?: string; // Optional description like "Teal", "Silver"
}

export interface DecadeContent {
  id: string;
  year: string;
  subtitle: string;
  description: string;
  researchKit: {
    images: string[];
    keywords: string[];
    vibe: string;
  };
  designColor: {
    colors: ColorSwatch[];
    text: string[];
  };
  popCulture: {
    icons: string;
    youthStyle: string;
  };
  styleCulture: string[];
  context: string[];
}

export interface SelectOption {
  value: string;
  label: string;
}