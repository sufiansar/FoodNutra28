"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RecommendationForm from "@/components/RecommendationForm";
import FoodResults from "@/components/FoodResults";
import { foodApi, buildRecommendationRequest } from "@/lib/api";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Heart,
  Leaf,
  Apple,
  Activity,
  Shield,
  Sparkles,
  ChevronDown,
  Brain,
  Users,
  Award,
} from "lucide-react";

type ViewState = "landing" | "form" | "results";

export default function Home() {
  const [view, setView] = useState<ViewState>("landing");
  const [recommendations, setRecommendations] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleGetStarted = () => {
    setView("form");
  };

  const handleFormSubmit = async (formData: any) => {
    setIsLoading(true);
    setError("");

    try {
      const request = buildRecommendationRequest(formData);
      const result = await foodApi.getRecommendations(request);
      setRecommendations(result);
      setView("results");
    } catch (err) {
      setError("Failed to get recommendations. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setView("landing");
    setRecommendations(null);
    setError("");
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* soft gradient blobs to match About page */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-green-300/30 blur-3xl dark:bg-green-600/20" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-600/20" />
      {/* Landing Page */}
      {view === "landing" && (
        <div className="container mx-auto px-4 py-12 space-y-16">
          {/* Hero Section */}
          <section className="text-center space-y-8 py-12 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Personalized Food Recommendations
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Discover healthy Bangladeshi cuisine tailored to your unique
                health profile, dietary needs, and lifestyle preferences
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                onClick={handleGetStarted}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg flex items-center gap-2"
              >
                <Sparkles className="h-5 w-5" />
                Get Started - It's Free!
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-bounce pt-8">
              <ChevronDown className="h-5 w-5" />
              <span>Scroll to learn more</span>
              <ChevronDown className="h-5 w-5" />
            </div>
          </section>

          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
            {[
              {
                icon: Heart,
                title: "Heart Health Focus",
                description:
                  "Recommendations tailored for cardiovascular wellness and blood pressure management",
                pill: "from-red-500 to-rose-500",
                border: "border-red-200 dark:border-red-900/40",
                ring: "hover:ring-rose-400/30",
              },
              {
                icon: Brain,
                title: "AI-Powered",
                description:
                  "Advanced machine learning algorithms analyze your profile for optimal suggestions",
                pill: "from-purple-500 to-violet-500",
                border: "border-purple-200 dark:border-purple-900/40",
                ring: "hover:ring-violet-400/30",
              },
              {
                icon: Leaf,
                title: "Diet Flexibility",
                description:
                  "Support for vegetarian, vegan, and various dietary restrictions",
                pill: "from-green-500 to-emerald-500",
                border: "border-green-200 dark:border-green-900/40",
                ring: "hover:ring-emerald-400/30",
              },
              {
                icon: Activity,
                title: "Lifestyle Integration",
                description:
                  "Considers your activity level and daily routine for perfect matches",
                pill: "from-orange-500 to-amber-500",
                border: "border-orange-200 dark:border-amber-900/40",
                ring: "hover:ring-amber-400/30",
              },
              {
                icon: Shield,
                title: "Allergy Safe",
                description:
                  "Automatically filters out foods based on your allergies and intolerances",
                pill: "from-blue-500 to-cyan-500",
                border: "border-blue-200 dark:border-blue-900/40",
                ring: "hover:ring-cyan-400/30",
              },
              {
                icon: Users,
                title: "Family Friendly",
                description:
                  "Special recommendations for pregnancy, children, and family meals",
                pill: "from-pink-500 to-fuchsia-500",
                border: "border-pink-200 dark:border-pink-900/40",
                ring: "hover:ring-fuchsia-400/30",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className={`group border ${feature.border} bg-white/60 backdrop-blur dark:bg-gray-900/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.01] hover:ring-1 ${feature.ring} will-change-transform animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6 space-y-4">
                    {/* gradient accent bar */}
                    <div
                      className={`h-1 w-16 rounded-full bg-gradient-to-r ${feature.pill}`}
                    />
                    {/* icon pill */}
                    <div
                      className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.pill} text-white shadow-sm`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </section>

          {/* How It Works */}
          <section className="py-12 space-y-8">
            <h2 className="text-4xl font-bold text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Share Your Profile",
                  description:
                    "Tell us about your health conditions, goals, and preferences",
                  icon: Users,
                },
                {
                  step: "2",
                  title: "AI Analysis",
                  description:
                    "Our ML algorithms process your data with thousands of food profiles",
                  icon: Brain,
                },
                {
                  step: "3",
                  title: "Get Recommendations",
                  description:
                    "Receive personalized Bangladeshi food suggestions for optimal health",
                  icon: Award,
                },
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="text-center space-y-4 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative inline-flex">
                      <div className="absolute inset-0 bg-emerald-500 rounded-full blur-lg opacity-30 animate-pulse" />
                      <div className="relative bg-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Icon className="h-12 w-12 mx-auto text-emerald-600" />
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-12 space-y-6">
            <Card className="border border-border/60 bg-white/60 backdrop-blur dark:bg-gray-900/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.01] hover:ring-1 hover:ring-emerald-400/30 will-change-transform">
              <CardContent className="py-12 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Transform Your Diet?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of people making healthier food choices with
                  AI-powered recommendations
                </p>
                <Button
                  size="lg"
                  onClick={handleGetStarted}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg flex items-center gap-2 mx-auto"
                >
                  <Sparkles className="h-5 w-5" />
                  Start Your Health Journey
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      )}

      {/* Form View */}
      {view === "form" && (
        <div className="container mx-auto px-4 py-12">
          <RecommendationForm
            onSubmit={handleFormSubmit}
            isLoading={isLoading}
          />
          {error && (
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200 text-center">
              {error}
            </div>
          )}
        </div>
      )}

      {/* Results View */}
      {view === "results" && recommendations && (
        <div className="container mx-auto px-4 py-12">
          <FoodResults
            recommendations={recommendations}
            onReset={handleReset}
          />
        </div>
      )}

      {/* Footer */}
      <footer className="border-t bg-white/50 dark:bg-gray-900/50 backdrop-blur-md mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-500" /> for better
              health
            </p>
            <p className="text-sm mt-2">
              © 2025 FoodNutra. Personalized nutrition for Bangladeshi cuisine.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
