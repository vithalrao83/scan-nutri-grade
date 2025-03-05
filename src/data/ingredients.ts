
// Sample ingredient database with grading
// In a production environment, this would be a much larger dataset

export type Ingredient = {
  name: string;
  grade: 'A' | 'B' | 'C' | 'D';
  reason: string;
  sources?: string[];
};

export const ingredientsDatabase: Record<string, Ingredient> = {
  // Natural Ingredients - Grade A
  "rice": {
    name: "Rice",
    grade: "A",
    reason: "Natural grain with minimal processing."
  },
  "wheat flour": {
    name: "Wheat Flour",
    grade: "A",
    reason: "Basic grain ingredient, minimally processed."
  },
  "milk": {
    name: "Milk",
    grade: "A",
    reason: "Natural dairy product with nutritional benefits."
  },
  "egg": {
    name: "Egg",
    grade: "A",
    reason: "Natural protein source."
  },
  "honey": {
    name: "Honey",
    grade: "A",
    reason: "Natural sweetener with antimicrobial properties."
  },
  
  // Moderate Risk - Grade B
  "sugar": {
    name: "Sugar",
    grade: "B",
    reason: "Natural but highly refined, should be consumed in moderation."
  },
  "salt": {
    name: "Salt",
    grade: "B",
    reason: "Natural but should be consumed in moderation due to sodium content."
  },
  "vegetable oil": {
    name: "Vegetable Oil",
    grade: "B",
    reason: "Processed but generally recognized as safe."
  },
  "leavening agents": {
    name: "Leavening Agents",
    grade: "B",
    reason: "Generally safe but are processed additives."
  },
  
  // Caution - Grade C
  "high fructose corn syrup": {
    name: "High Fructose Corn Syrup",
    grade: "C",
    reason: "Highly processed sweetener linked to various health issues.",
    sources: ["American Heart Association", "Journal of Nutrition 2021"]
  },
  "artificial colors": {
    name: "Artificial Colors",
    grade: "C",
    reason: "Synthetic dyes that may cause adverse reactions in some individuals.",
    sources: ["FDA Reports", "European Food Safety Authority"]
  },
  "partially hydrogenated oils": {
    name: "Partially Hydrogenated Oils",
    grade: "C",
    reason: "Contains trans fats that may increase heart disease risk.",
    sources: ["FDA", "WHO Guidelines 2022"]
  },
  "palm oil": {
    name: "Palm Oil",
    grade: "C",
    reason: "High in saturated fats, may contribute to heart disease risk.",
    sources: ["Heart Foundation", "WHO"]
  },
  
  // Harmful - Grade D
  "sodium nitrite": {
    name: "Sodium Nitrite",
    grade: "D",
    reason: "Preservative linked to increased cancer risk when consumed regularly.",
    sources: ["WHO", "NIH Study 2023"]
  },
  "potassium bromate": {
    name: "Potassium Bromate",
    grade: "D",
    reason: "Flour improver banned in many countries due to cancer concerns.",
    sources: ["International Agency for Research on Cancer", "EPA"]
  },
  "bha/bht": {
    name: "BHA/BHT",
    grade: "D",
    reason: "Preservatives with potential endocrine disruption and cancer risks.",
    sources: ["National Toxicology Program", "Environmental Working Group"]
  },
  "monosodium glutamate": {
    name: "Monosodium Glutamate",
    grade: "D",
    reason: "Flavor enhancer that may cause adverse reactions in some individuals.",
    sources: ["FDA Additives List", "Journal of Nutrition 2023"]
  },
  
  // Dangerous Ingredients
  "rat poison": {
    name: "Rat Poison",
    grade: "D",
    reason: "Extremely toxic and potentially lethal if consumed.",
    sources: ["CDC Toxicity Database", "NIH Poison Control"]
  },
  "toxic": {
    name: "Toxic Substance",
    grade: "D",
    reason: "Dangerous and not for human consumption.",
    sources: ["FDA", "CDC"]
  },
  "poison": {
    name: "Poison",
    grade: "D",
    reason: "Extremely dangerous and potentially lethal.",
    sources: ["EPA", "CDC"]
  }
};

// Helper function to look up an ingredient
export const getIngredientInfo = (name: string): Ingredient | null => {
  const lowercaseName = name.toLowerCase();
  
  // Direct match
  if (ingredientsDatabase[lowercaseName]) {
    return ingredientsDatabase[lowercaseName];
  }
  
  // Partial match
  for (const key in ingredientsDatabase) {
    if (lowercaseName.includes(key) || key.includes(lowercaseName)) {
      return ingredientsDatabase[key];
    }
  }
  
  // No match found
  return null;
};
