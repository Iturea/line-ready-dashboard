export interface SpeciesIllustrationPhoto {
  src: string;
  alt: string;
  title: string;
}

export interface FishData {
  id: number;
  fisheryManagement: string;
  habitat: string;
  habitatImpacts: string;
  imageGallery?: any;
  location: string;
  management?: any;
  noaaFisheriesRegion?: any;
  population: string;
  populationStatus: string;
  scientificName: string;
  speciesAliases: string;
  speciesIllustrationPhoto: SpeciesIllustrationPhoto;
  speciesName: string;
  animalHealth?: any;
  availability: string;
  biology: string;
  bycatch: string;
  calories: string;
  carbohydrate?: any;
  cholesterol: string;
  color: string;
  diseaseTreatmentandPrevention?: any;
  diseasesinSalmon?: any;
  displayedSeafoodProfileIllustration?: any;
  ecosystemServices?: any;
  environmentalConsiderations?: any;
  environmentalEffects?: any;
  farmingMethods?: any;
  fatTotal: string;
  // tslint:disable-next-line: variable-name
  feeds_?: any;
  feeds?: any;
  fiberTotalDietary?: any;
  fishingRate: string;
  harvest: string;
  harvestType?: any;
  healthBenefits: string;
  // tslint:disable-next-line: variable-name
  human_Health_?: any;
  humanHealth?: any;
  physicalDescription: string;
  production?: any;
  protein: string;
  quote: string;
  quoteBackgroundColor: string;
  research?: any;
  saturatedFattyAcidsTotal: string;
  selenium: string;
  servingWeight?: any;
  servings: string;
  sodium: string;
  source: string;
  sugarsTotal?: any;
  taste: string;
  texture: string;
  path: string;
  lastUpdate: string;
  href: string;
  method?: any;
  rel?: any;
}
