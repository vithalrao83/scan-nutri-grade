
// This is a simulated scanner utility for demonstration purposes
// In a real application, you would use a library like QuaggaJS or the browser's BarcodeDetector API

// Simulate barcode scanning with a higher success rate
export const simulateScan = (): Promise<string> => {
  // Increase success rate to 95%
  const success = Math.random() <= 0.95;
  
  return new Promise((resolve, reject) => {
    if (success) {
      // Return a sample barcode (could be randomized from a list for demo)
      const sampleBarcodes = [
        "8901072000128", // Sample Indian product barcode
        "8906002730402",
        "8902102153847",
        "8902519005394",
        "8901725133566"
      ];
      
      const randomBarcode = sampleBarcodes[Math.floor(Math.random() * sampleBarcodes.length)];
      resolve(randomBarcode);
    } else {
      // Simulate failure
      reject(new Error("Failed to scan barcode"));
    }
  });
};

// Simulated product database
const productDatabase: Record<string, any> = {
  "8901072000128": {
    name: "Parle-G Original Biscuits",
    brand: "Parle",
    image: "https://m.media-amazon.com/images/I/61oVGc5w4YL.jpg",
    ingredients: [
      { 
        name: "Wheat Flour", 
        grade: "A", 
        reason: "Natural grain ingredient, minimally processed.",
        sources: ["Food Standards Agency", "WHO Guidelines"]
      },
      { 
        name: "Sugar", 
        grade: "C", 
        reason: "Refined sugar has been linked to various health issues when consumed in excess.",
        sources: ["WHO Sugar Guidelines 2023"]
      },
      { 
        name: "Edible Vegetable Oil", 
        grade: "B", 
        reason: "Processed but generally safe in moderation.",
        sources: ["American Heart Association"]
      },
      { 
        name: "Invert Syrup", 
        grade: "C", 
        reason: "Processed sweetener that may contribute to blood sugar spikes.",
        sources: ["Glycemic Index Foundation"]
      },
      { 
        name: "Milk Solids", 
        grade: "A", 
        reason: "Natural dairy component with nutritional benefits.",
        sources: ["Dairy Council"]
      },
      { 
        name: "Leavening Agents", 
        grade: "B", 
        reason: "Generally recognized as safe but are processed additives.",
        sources: ["FDA GRAS List"]
      }
    ]
  },
  "8906002730402": {
    name: "Amul Butter",
    brand: "Amul",
    image: "https://m.media-amazon.com/images/I/61V6HKyZ44L.jpg",
    ingredients: [
      { 
        name: "Milk Fat", 
        grade: "A", 
        reason: "Natural dairy component.",
        sources: ["Dairy Research Institute"]
      },
      { 
        name: "Salt", 
        grade: "B", 
        reason: "Natural but should be consumed in moderation.",
        sources: ["American Heart Association"]
      }
    ]
  },
  "8902102153847": {
    name: "Maggi 2-Minute Noodles",
    brand: "Nestle",
    image: "https://m.media-amazon.com/images/I/81Zx-bUmYOL.jpg",
    ingredients: [
      { 
        name: "Wheat Flour", 
        grade: "A", 
        reason: "Natural grain ingredient, minimally processed.",
        sources: ["FDA", "USDA"]
      },
      { 
        name: "Palm Oil", 
        grade: "C", 
        reason: "High in saturated fats, may contribute to heart disease when consumed regularly.",
        sources: ["Heart Foundation", "WHO"]
      },
      { 
        name: "Salt", 
        grade: "B", 
        reason: "Natural but should be consumed in moderation.",
        sources: ["American Heart Association"]
      },
      { 
        name: "Monosodium Glutamate", 
        grade: "D", 
        reason: "Flavor enhancer that may cause adverse reactions in some individuals.",
        sources: ["FDA Additives List", "Journal of Nutrition 2023"]
      },
      { 
        name: "Sodium Carbonate", 
        grade: "C", 
        reason: "Processing aid with moderate health concerns.",
        sources: ["Food Chemical Codex"]
      },
      { 
        name: "Artificial Flavors", 
        grade: "D", 
        reason: "Synthetic compounds that may have long-term health impacts.",
        sources: ["Environmental Working Group", "NIH Study 2022"]
      }
    ]
  },
  "8902519005394": {
    name: "Aashirvaad Atta (Whole Wheat Flour)",
    brand: "ITC",
    image: "https://m.media-amazon.com/images/I/717YXUR1iPL.jpg",
    ingredients: [
      { 
        name: "100% Whole Wheat", 
        grade: "A", 
        reason: "Natural, unprocessed whole grain.",
        sources: ["Whole Grains Council", "USDA"]
      }
    ]
  },
  "8901725133566": {
    name: "Toxic Cleaner (DEMO)",
    brand: "Demo Brand",
    image: "",
    ingredients: [
      { 
        name: "Water", 
        grade: "A", 
        reason: "Natural and essential for life.",
        sources: ["WHO"]
      },
      { 
        name: "Sodium Hydroxide", 
        grade: "D", 
        reason: "Highly caustic and dangerous if ingested.",
        sources: ["CDC", "EPA"]
      },
      { 
        name: "Rat Poison", 
        grade: "D", 
        reason: "Extremely toxic and potentially lethal.",
        sources: ["CDC Toxicity Database", "NIH Poison Control"]
      }
    ]
  }
};

// Get product information by barcode
export const getProductInfo = async (barcode: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    // Simulate API delay
    setTimeout(() => {
      // Check if the product exists in our simulated database
      if (productDatabase[barcode]) {
        resolve(productDatabase[barcode]);
      } else {
        // For demo purposes, return a generic product for unknown barcodes
        resolve({
          name: "Generic Product",
          brand: "Unknown Brand",
          image: "",
          ingredients: [
            { 
              name: "Ingredient 1", 
              grade: "B", 
              reason: "Generally safe for consumption.",
              sources: ["Generic Source"]
            },
            { 
              name: "Ingredient 2", 
              grade: "C", 
              reason: "May cause issues for some people.",
              sources: ["Generic Source"]
            },
            { 
              name: "Additive X-123", 
              grade: "D", 
              reason: "Synthetic compound with potential health concerns.",
              sources: ["Generic Research Paper"]
            }
          ]
        });
      }
    }, 1500);
  });
};
