"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Heart,
  Scale,
  Baby,
  Users,
  Leaf,
  Activity,
  Flame,
  Clock,
  DollarSign,
  ChevronRight,
  ChevronLeft,
  Sparkles,
} from "lucide-react";

interface FormData {
  // Step 1: Health Profile
  healthConditions: string[];
  healthGoals: string[];
  lifeStage: string[];

  // Step 2: Dietary Preferences
  dietType: "vegetarian" | "vegan" | "non-vegetarian" | "";
  allergies: "dairy" | "gluten" | "both" | "none" | "";

  // Step 3: Lifestyle & Preferences
  activityLevel: "low" | "moderate" | "high" | "";
  spiceLevel: "mild" | "medium" | "hot" | "";
  macroPreference: "balanced" | "low_sugar" | "high_protein" | "";
  cookingTime: "any" | "under_15" | "under_30" | "";
  budgetFriendly: boolean;
  numberOfRecommendations: number;
}

interface RecommendationFormProps {
  onSubmit: (data: FormData) => void;
  isLoading?: boolean;
}

export default function RecommendationForm({
  onSubmit,
  isLoading,
}: RecommendationFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    healthConditions: [],
    healthGoals: [],
    lifeStage: [],
    dietType: "",
    allergies: "",
    activityLevel: "",
    spiceLevel: "",
    macroPreference: "",
    cookingTime: "",
    budgetFriendly: false,
    numberOfRecommendations: 5,
  });

  const handleCheckboxChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => {
      const currentArray = prev[field] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];
      return { ...prev, [field]: newArray };
    });
  };

  const handleRadioChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex-1 h-2 mx-1 rounded-full transition-all ${
                s <= step ? "bg-green-600" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
        <div className="text-center text-sm text-muted-foreground">
          Step {step} of 3
        </div>
      </div>

      {/* Step 1: Health Profile */}
      {step === 1 && (
        <Card className="border-2 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Heart className="h-6 w-6 text-red-500" />
              Health Profile
            </CardTitle>
            <CardDescription>
              Tell us about your health conditions and goals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Health Conditions */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">
                Health Conditions (Select if applicable)
              </Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="high_bp"
                    checked={formData.healthConditions.includes("high_bp")}
                    onCheckedChange={() =>
                      handleCheckboxChange("healthConditions", "high_bp")
                    }
                  />
                  <Label htmlFor="high_bp" className="cursor-pointer">
                    High Blood Pressure
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="low_bp"
                    checked={formData.healthConditions.includes("low_bp")}
                    onCheckedChange={() =>
                      handleCheckboxChange("healthConditions", "low_bp")
                    }
                  />
                  <Label htmlFor="low_bp" className="cursor-pointer">
                    Low Blood Pressure
                  </Label>
                </div>
              </div>
            </div>

            {/* Health Goals */}
            <div className="space-y-3">
              <Label className="text-base font-semibold flex items-center gap-2">
                <Scale className="h-5 w-5 text-blue-500" />
                Health Goals
              </Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="weight_loss"
                    checked={formData.healthGoals.includes("weight_loss")}
                    onCheckedChange={() =>
                      handleCheckboxChange("healthGoals", "weight_loss")
                    }
                  />
                  <Label htmlFor="weight_loss" className="cursor-pointer">
                    Weight Management
                  </Label>
                </div>
              </div>
            </div>

            {/* Life Stage */}
            <div className="space-y-3">
              <Label className="text-base font-semibold flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-500" />
                Life Stage (Select if applicable)
              </Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="pregnant"
                    checked={formData.lifeStage.includes("pregnant")}
                    onCheckedChange={() =>
                      handleCheckboxChange("lifeStage", "pregnant")
                    }
                  />
                  <Label htmlFor="pregnant" className="cursor-pointer">
                    Pregnancy
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="child"
                    checked={formData.lifeStage.includes("child")}
                    onCheckedChange={() =>
                      handleCheckboxChange("lifeStage", "child")
                    }
                  />
                  <Label htmlFor="child" className="cursor-pointer">
                    Children in Family
                  </Label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Dietary Preferences */}
      {step === 2 && (
        <Card className="border-2 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Leaf className="h-6 w-6 text-green-600" />
              Dietary Preferences
            </CardTitle>
            <CardDescription>
              Help us understand your dietary restrictions and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Diet Type */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Diet Type</Label>
              <RadioGroup
                value={formData.dietType}
                onValueChange={(value) => handleRadioChange("dietType", value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="non-vegetarian" id="non-veg" />
                  <Label htmlFor="non-veg" className="cursor-pointer">
                    Non-Vegetarian
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="vegetarian" id="veg" />
                  <Label htmlFor="veg" className="cursor-pointer">
                    Vegetarian
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="vegan" id="vegan" />
                  <Label htmlFor="vegan" className="cursor-pointer">
                    Vegan
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Allergies */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">
                Allergies & Intolerances
              </Label>
              <RadioGroup
                value={formData.allergies}
                onValueChange={(value) => handleRadioChange("allergies", value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="none" id="none" />
                  <Label htmlFor="none" className="cursor-pointer">
                    None
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dairy" id="dairy" />
                  <Label htmlFor="dairy" className="cursor-pointer">
                    Dairy
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="gluten" id="gluten" />
                  <Label htmlFor="gluten" className="cursor-pointer">
                    Gluten
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="both" id="both" />
                  <Label htmlFor="both" className="cursor-pointer">
                    Both Dairy & Gluten
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Lifestyle & Preferences */}
      {step === 3 && (
        <Card className="border-2 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Activity className="h-6 w-6 text-orange-500" />
              Lifestyle & Preferences
            </CardTitle>
            <CardDescription>
              Fine-tune your recommendations with lifestyle preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Activity Level */}
            <div className="space-y-3">
              <Label className="text-base font-semibold flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Activity Level
              </Label>
              <RadioGroup
                value={formData.activityLevel}
                onValueChange={(value) =>
                  handleRadioChange("activityLevel", value)
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="low" id="low" />
                  <Label htmlFor="low" className="cursor-pointer">
                    Low (Sedentary)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="moderate" id="moderate" />
                  <Label htmlFor="moderate" className="cursor-pointer">
                    Moderate (Exercise 3-4 times/week)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="high" id="high" />
                  <Label htmlFor="high" className="cursor-pointer">
                    High (Very Active)
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Spice Level */}
            <div className="space-y-3">
              <Label className="text-base font-semibold flex items-center gap-2">
                <Flame className="h-5 w-5 text-red-500" />
                Spice Preference
              </Label>
              <RadioGroup
                value={formData.spiceLevel}
                onValueChange={(value) =>
                  handleRadioChange("spiceLevel", value)
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mild" id="mild" />
                  <Label htmlFor="mild" className="cursor-pointer">
                    Mild
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium" className="cursor-pointer">
                    Medium
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hot" id="hot" />
                  <Label htmlFor="hot" className="cursor-pointer">
                    Hot & Spicy
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Macro Preference */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">
                Nutritional Focus
              </Label>
              <RadioGroup
                value={formData.macroPreference}
                onValueChange={(value) =>
                  handleRadioChange("macroPreference", value)
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="balanced" id="balanced" />
                  <Label htmlFor="balanced" className="cursor-pointer">
                    Balanced
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="low_sugar" id="low_sugar" />
                  <Label htmlFor="low_sugar" className="cursor-pointer">
                    Low Sugar
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="high_protein" id="high_protein" />
                  <Label htmlFor="high_protein" className="cursor-pointer">
                    High Protein
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Cooking Time */}
            <div className="space-y-3">
              <Label className="text-base font-semibold flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Cooking Time
              </Label>
              <RadioGroup
                value={formData.cookingTime}
                onValueChange={(value) =>
                  handleRadioChange("cookingTime", value)
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="any" id="any" />
                  <Label htmlFor="any" className="cursor-pointer">
                    Any
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="under_15" id="under_15" />
                  <Label htmlFor="under_15" className="cursor-pointer">
                    Under 15 minutes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="under_30" id="under_30" />
                  <Label htmlFor="under_30" className="cursor-pointer">
                    Under 30 minutes
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Budget Friendly */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="budget"
                  checked={formData.budgetFriendly}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      budgetFriendly: checked as boolean,
                    }))
                  }
                />
                <Label
                  htmlFor="budget"
                  className="cursor-pointer flex items-center gap-2"
                >
                  <DollarSign className="h-5 w-5 text-green-600" />
                  Budget-Friendly Options Only
                </Label>
              </div>
            </div>

            {/* Number of Recommendations */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">
                Number of Recommendations
              </Label>
              <RadioGroup
                value={formData.numberOfRecommendations.toString()}
                onValueChange={(value) =>
                  handleRadioChange("numberOfRecommendations", parseInt(value))
                }
              >
                {[3, 5, 7, 10].map((num) => (
                  <div key={num} className="flex items-center space-x-2">
                    <RadioGroupItem value={num.toString()} id={`rec-${num}`} />
                    <Label htmlFor={`rec-${num}`} className="cursor-pointer">
                      {num} recommendations
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={step === 1}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        {step < 3 ? (
          <Button onClick={handleNext} className="flex items-center gap-2">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={isLoading}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
          >
            {isLoading ? (
              <>Processing...</>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Get Recommendations
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
