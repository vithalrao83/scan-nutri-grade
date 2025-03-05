
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
        "8901725133566",
        "8901030794310",  // New product
        "8901063014456",  // New product
        "8901347082254",  // New product
        "8901595853792"   // New product
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
    image: "https://m.media-amazon.com/images/I/61HG4B+uKrL.jpg",
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
  },
  // New products
  "8901030794310": {
    name: "Tata Tea Premium",
    brand: "Tata",
    image: "https://m.media-amazon.com/images/I/71IVgwKFdRL.jpg",
    ingredients: [
      { 
        name: "Tea Leaves", 
        grade: "A", 
        reason: "Natural plant-based ingredient with antioxidant properties.",
        sources: ["National Institutes of Health", "Tea Research Association"]
      },
      { 
        name: "Natural Flavors", 
        grade: "B", 
        reason: "Generally derived from natural sources but may undergo processing.",
        sources: ["FDA GRAS List", "Journal of Food Science"]
      }
    ]
  },
  "8901063014456": {
    name: "MDH Garam Masala",
    brand: "MDH",
    image: "https://m.media-amazon.com/images/I/71X9qnZXpqL.jpg",
    ingredients: [
      { 
        name: "Coriander", 
        grade: "A", 
        reason: "Natural spice with health benefits including anti-inflammatory properties.",
        sources: ["Journal of Medicinal Food", "USDA"]
      },
      { 
        name: "Cumin", 
        grade: "A", 
        reason: "Natural spice with digestive benefits.",
        sources: ["International Journal of Food Science"]
      },
      { 
        name: "Black Pepper", 
        grade: "A", 
        reason: "Natural spice with bioactive compounds beneficial for health.",
        sources: ["Critical Reviews in Food Science and Nutrition"]
      },
      { 
        name: "Cinnamon", 
        grade: "A", 
        reason: "Natural spice with antioxidant properties.",
        sources: ["BMC Complementary Medicine and Therapies"]
      },
      { 
        name: "Cloves", 
        grade: "A", 
        reason: "Natural spice with antimicrobial properties.",
        sources: ["Evidence-Based Complementary and Alternative Medicine"]
      },
      { 
        name: "Cardamom", 
        grade: "A", 
        reason: "Natural spice with digestive benefits.",
        sources: ["Journal of Ethnopharmacology"]
      }
    ]
  },
  "8901347082254": {
    name: "Britannia Good Day Cookies",
    brand: "Britannia",
    image: "https://m.media-amazon.com/images/I/81GKCz6gzDL.jpg",
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
        name: "Vegetable Oil", 
        grade: "B", 
        reason: "Processed but generally safe in moderation.",
        sources: ["American Heart Association"]
      },
      { 
        name: "Butter", 
        grade: "B", 
        reason: "Natural dairy product but high in saturated fat.",
        sources: ["Harvard School of Public Health"]
      },
      { 
        name: "Cashew Nuts", 
        grade: "A", 
        reason: "Natural food with healthy fats and protein.",
        sources: ["Nutrition Journal"]
      },
      { 
        name: "Artificial Flavors", 
        grade: "D", 
        reason: "Synthetic compounds that may have long-term health impacts.",
        sources: ["Environmental Working Group", "NIH Study 2022"]
      },
      { 
        name: "Preservatives", 
        grade: "C", 
        reason: "Chemical additives that may have negative health effects in some individuals.",
        sources: ["Journal of Food Science and Technology"]
      }
    ]
  },
  "8901595853792": {
    name: "Haldiram's Soan Papdi",
    brand: "Haldiram's",
    image: "https://m.media-amazon.com/images/I/61xKKfC4yHL.jpg",
    ingredients: [
      { 
        name: "Sugar", 
        grade: "C", 
        reason: "Refined sugar has been linked to various health issues when consumed in excess.",
        sources: ["WHO Sugar Guidelines 2023", "American Heart Association"]
      },
      { 
        name: "Gram Flour", 
        grade: "A", 
        reason: "Natural pulse flour with protein and fiber.",
        sources: ["Journal of Food Science and Technology"]
      },
      { 
        name: "Wheat Flour", 
        grade: "A", 
        reason: "Natural grain ingredient, minimally processed.",
        sources: ["Food Standards Agency"]
      },
      { 
        name: "Ghee", 
        grade: "B", 
        reason: "Traditional clarified butter, natural but high in saturated fat.",
        sources: ["Journal of Nutrition Research"]
      },
      { 
        name: "Cardamom", 
        grade: "A", 
        reason: "Natural spice with digestive benefits.",
        sources: ["Journal of Ethnopharmacology"]
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
          image: "https://m.media-amazon.com/images/I/61gScZJNhoL.jpg", // Default image
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

// This function could be expanded for a real-world application
// to integrate with actual product databases like Open Food Facts
// export const fetchProductFromAPI = async (barcode: string): Promise<any> => {
//   try {
//     const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
//     if (!response.ok) {
//       throw new Error('Product not found');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching product data:', error);
//     throw error;
//   }
// };
