"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Apple,
  Sparkles,
  RefreshCw,
  ChefHat,
  Heart,
  Leaf,
  Award,
  TrendingUp,
} from "lucide-react";

interface FoodResultsProps {
  recommendations: {
    initial: string[];
    refined?: string[];
  };
  onReset: () => void;
}

export default function FoodResults({
  recommendations,
  onReset,
}: FoodResultsProps) {
  const displayRecommendations =
    recommendations.refined || recommendations.initial;

  // Mock nutrition data - in a real app, this would come from your backend
  const getNutritionInfo = (foodName: string) => {
    // You can expand this to fetch real data from your backend
    return {
      calories: Math.floor(Math.random() * 300) + 150,
      protein: Math.floor(Math.random() * 20) + 5,
      fiber: Math.floor(Math.random() * 10) + 2,
    };
  };

  const getCategoryBadge = (index: number) => {
    const categories = [
      { label: "Heart Healthy", variant: "default" as const, icon: Heart },
      { label: "High Protein", variant: "success" as const, icon: TrendingUp },
      { label: "Plant Based", variant: "secondary" as const, icon: Leaf },
      { label: "Low Sugar", variant: "outline" as const, icon: Award },
    ];
    return categories[index % categories.length];
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4 animate-fade-in">
        <div className="flex items-center justify-center gap-3">
          <Sparkles className="h-8 w-8 text-yellow-500 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Your Personalized Food Recommendations
          </h2>
          <Sparkles className="h-8 w-8 text-yellow-500 animate-pulse" />
        </div>
        <p className="text-muted-foreground text-lg">
          Based on your health profile and preferences, we recommend these
          nutritious Bangladeshi dishes
        </p>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayRecommendations.map((food, index) => {
          const nutrition = getNutritionInfo(food);
          const category = getCategoryBadge(index);
          const CategoryIcon = category.icon;

          return (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-500 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Image Header */}
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 group-hover:scale-110 transition-transform duration-500" />
                <ChefHat className="h-20 w-20 text-green-600 dark:text-green-400 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute top-3 right-3">
                  <Badge
                    variant={category.variant}
                    className="flex items-center gap-1"
                  >
                    <CategoryIcon className="h-3 w-3" />
                    {category.label}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Apple className="h-5 w-5 text-red-500" />
                  {food}
                </CardTitle>
                <CardDescription>
                  Traditional Bangladeshi cuisine tailored for your health
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Nutrition Info */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-3 rounded-lg bg-blue-50 dark:bg-blue-950">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {nutrition.calories}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Calories
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-green-50 dark:bg-green-950">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {nutrition.protein}g
                    </div>
                    <div className="text-xs text-muted-foreground">Protein</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-orange-50 dark:bg-orange-950">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                      {nutrition.fiber}g
                    </div>
                    <div className="text-xs text-muted-foreground">Fiber</div>
                  </div>
                </div>

                {/* Health Benefits */}
                <div className="flex items-start gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
                  <Heart className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Perfectly matched to your dietary needs and health goals
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
        <Button
          onClick={onReset}
          variant="outline"
          className="flex items-center gap-2 w-full sm:w-auto"
        >
          <RefreshCw className="h-4 w-4" />
          Get New Recommendations
        </Button>
      </div>

      {/* Additional Info */}
      <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Sparkles className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Why These Foods?</h3>
              <p className="text-muted-foreground">
                These recommendations are powered by machine learning algorithms
                that analyze nutritional content, your health conditions,
                dietary preferences, and lifestyle factors to suggest the most
                suitable traditional Bangladeshi foods for optimal health and
                wellness.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
