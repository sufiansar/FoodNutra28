// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// Types
export interface BasicProfile {
  high_bp?: boolean;
  low_bp?: boolean;
  weight_loss?: boolean;
  pregnant?: boolean;
  child?: boolean;
  diet?: "vegetarian" | "vegan" | "non-vegetarian";
  allergy?: "dairy" | "gluten" | "both" | "none";
}

export interface ExtraProfile {
  activity?: "low" | "moderate" | "high";
  spicy?: "mild" | "medium" | "hot";
  macro?: "balanced" | "low_sugar" | "high_protein";
  cook_time?: "any" | "under_15" | "under_30";
  budget?: boolean;
}

export interface RecommendationRequest {
  basic_profile: BasicProfile;
  main_goal?: string;
  extra_profile?: ExtraProfile;
  top_n?: number;
}

export interface RecommendationResponse {
  initial: string[];
  refined?: string[];
}

// API Service
export const foodApi = {
  async getRecommendations(
    request: RecommendationRequest
  ): Promise<RecommendationResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/recommend`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error("Failed to get recommendations");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      throw error;
    }
  },
};

// Helper function to build recommendation request
export function buildRecommendationRequest(
  formData: any
): RecommendationRequest {
  const basicProfile: BasicProfile = {
    high_bp: formData.healthConditions?.includes("high_bp"),
    low_bp: formData.healthConditions?.includes("low_bp"),
    weight_loss: formData.healthGoals?.includes("weight_loss"),
    pregnant: formData.lifeStage?.includes("pregnant"),
    child: formData.lifeStage?.includes("child"),
    diet: formData.dietType,
    allergy: formData.allergies,
  };

  const extraProfile: ExtraProfile = {
    activity: formData.activityLevel,
    spicy: formData.spiceLevel,
    macro: formData.macroPreference,
    cook_time: formData.cookingTime,
    budget: formData.budgetFriendly,
  };

  return {
    basic_profile: basicProfile,
    main_goal: formData.mainGoal,
    extra_profile: extraProfile,
    top_n: formData.numberOfRecommendations || 5,
  };
}
