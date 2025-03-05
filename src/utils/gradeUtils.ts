export type Grade = 'A' | 'B' | 'C' | 'D';

export type Ingredient = {
  name: string;
  grade: Grade;
  reason: string;
  sources?: string[];
};

// Calculate overall grade based on individual ingredient grades
export const calculateOverallGrade = (ingredients: Ingredient[]): Grade => {
  if (!ingredients || ingredients.length === 0) {
    return 'B'; // Default grade if no ingredients
  }
  
  // Initialize counts
  const counts = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
  };
  
  // Count occurrences of each grade
  ingredients.forEach(ingredient => {
    counts[ingredient.grade]++;
  });
  
  // Overall grading logic:
  // If ANY ingredient is grade D, the product is grade D
  // If >20% ingredients are grade C and no D, the product is grade C
  // If >50% ingredients are grade A and rest are B, the product is grade A
  // Otherwise, the product is grade B
  
  if (counts.D > 0) {
    return 'D';
  }
  
  const totalIngredients = ingredients.length;
  const percentageC = (counts.C / totalIngredients) * 100;
  
  if (percentageC > 20) {
    return 'C';
  }
  
  const percentageA = (counts.A / totalIngredients) * 100;
  
  if (percentageA > 50 && counts.C === 0 && counts.D === 0) {
    return 'A';
  }
  
  return 'B';
};

// Grade description
export const getGradeDescription = (grade: Grade): string => {
  switch (grade) {
    case 'A':
      return 'Safe & Natural';
    case 'B':
      return 'Moderate Risk';
    case 'C':
      return 'Caution';
    case 'D':
      return 'Harmful';
    default:
      return '';
  }
};

// Get grade color
export const getGradeColor = (grade: Grade): string => {
  switch (grade) {
    case 'A':
      return '#4CAF50'; // Green
    case 'B':
      return '#FFC107'; // Yellow
    case 'C':
      return '#FF9800'; // Orange
    case 'D':
      return '#F44336'; // Red
    default:
      return '#9E9E9E'; // Grey
  }
};
