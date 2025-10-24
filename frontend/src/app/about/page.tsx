"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github } from "lucide-react";

// Static imports for local images in src/Images
import SupervisorImg from "@/Images/Kazi Farhan Hasan Tanjim.jpg";
import SufianImg from "@/Images/Md. Abu Sufian.jpeg";
import RifatImg from "@/Images/RifatSorkarRifat.jpg";
import RajkumarImg from "@/Images/Rajkumar.jpg";
import BillalImg from "@/Images/Billal.jpg";

type Member = {
  name: string;
  role: string;
  image?: any;
  initials?: string;
  url?: string;
  email?: string;
};

const supervisor: Member = {
  name: "Kazi Farhan Hasan Tanjim",
  role: "Supervisor • Lecturer at Dhaka International University",
  image: SupervisorImg,
  email: "tanjim18701018@gmail.com",
};

const members: Member[] = [
  {
    name: "Rajkumar Sorkar",
    role: "Full Stack Developer",
    image: RajkumarImg,
    url: "https://github.com/rajks18",
    email: "rajkumarsarker1101@gmail.com",
  },
  {
    name: "Md. Abu Sufian",
    role: "Backend-focused Full Stack Developer",
    image: SufianImg,
    url: "https://github.com/sufiansar",
    email: "sufiancodecrush@gmail.com",
  },
  {
    name: "Md. Ripas Ali",
    role: "Backend-focused Full Stack Developer",
    image: RifatImg,
    url: "https://github.com/ripassorkerrifat",
    email: "ripassorkerrifat@gmail.com",
  },
  {
    name: "Billal Hossain",
    role: "Flutter App Developer",
    image: BillalImg,
    url: "https://github.com/billalhossan1",
    email: "bh302333@gmail.com",
  },
  { name: "Torsa Islam Mim", role: "Team Member", initials: "TM" },
  { name: "Kamona Ghosh", role: "Team Member", initials: "KG" },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* soft gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-green-300/30 blur-3xl dark:bg-green-600/20" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-600/20" />

      <section className="container mx-auto px-4 py-12 space-y-10">
        {/* Hero */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-green-300">
              Meet the FoodNutra Team
            </span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We’re CSE students at Dhaka International University building an
            AI-powered food recommendation system for Bangladeshi
            cuisine—personalized for your health profile and lifestyle.
          </p>
        </div>

        {/* Supervisor */}
        <Card
          className="group border border-border/60 bg-white/60 backdrop-blur dark:bg-gray-900/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.01] hover:ring-1 hover:ring-emerald-400/30 will-change-transform animate-fade-in"
          style={{ animationDelay: "80ms" }}
        >
          <CardHeader>
            <CardTitle className="text-2xl">Supervisor</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative h-28 w-28 rounded-full overflow-hidden ring-2 ring-emerald-500 shadow-sm transition-transform duration-300 group-hover:scale-110 will-change-transform">
              <Image
                src={supervisor.image}
                alt={supervisor.name}
                fill
                sizes="112px"
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">{supervisor.name}</h3>
              <p className="text-muted-foreground">{supervisor.role}</p>
              {supervisor.email && (
                <div className="mt-2 flex items-center justify-center md:justify-start gap-3">
                  <a
                    href={`mailto:${supervisor.email}`}
                    className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-200 underline-offset-4 hover:underline"
                    aria-label={`Email ${supervisor.name}`}
                  >
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">{supervisor.email}</span>
                  </a>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="h-px bg-border my-4" />

        {/* Team Members */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((m, idx) => (
              <Card
                key={m.name}
                className="group border border-border/60 bg-white/60 backdrop-blur dark:bg-gray-900/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.01] hover:ring-1 hover:ring-emerald-400/30 will-change-transform animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 60}ms` }}
              >
                <CardContent className="pt-6 flex items-center gap-4">
                  {m.image ? (
                    <div className="relative h-16 w-16 rounded-full overflow-hidden ring-2 ring-emerald-500 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 will-change-transform">
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-16 w-16 rounded-full bg-emerald-600 text-white grid place-items-center text-lg font-bold flex-shrink-0">
                      {m.initials}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="text-base font-semibold underline-offset-4 group-hover:underline truncate">
                      {m.name}
                    </div>
                    <div className="text-sm text-muted-foreground truncate">
                      {m.role}
                    </div>
                    {m.email && (
                      <div className="mt-2 flex items-center gap-3 text-sm">
                        <a
                          href={`mailto:${m.email}`}
                          className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-200 underline-offset-4 hover:underline"
                          aria-label={`Email ${m.name}`}
                        >
                          <Mail className="h-4 w-4" />
                          <span className="truncate">{m.email}</span>
                        </a>
                        {m.url && (
                          <a
                            href={m.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-foreground/70 hover:text-foreground"
                            aria-label={`${m.name} on GitHub`}
                          >
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project blurb */}
        <Card
          className="border border-border/60 bg-white/60 backdrop-blur dark:bg-gray-900/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.01] hover:ring-1 hover:ring-emerald-400/30 will-change-transform animate-fade-in"
          style={{ animationDelay: "120ms" }}
        >
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              FoodNutra is an advanced AI-powered food recommendation platform
              focused on Bangladeshi cuisine. The system personalizes dish
              suggestions by analyzing your health profile, dietary preferences,
              and lifestyle factors. By leveraging machine learning models
              trained on a comprehensive database of regional foods, FoodNutra
              delivers recommendations that support heart health, metabolic
              wellness, pregnancy safety, and family nutrition.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <b>Health Profile Integration:</b> Users input health conditions
                (e.g., diabetes, high cholesterol, low blood pressure), dietary
                restrictions, and lifestyle details. The system tailors food
                suggestions to these needs.
              </li>
              <li>
                <b>Curated Bangladeshi Food Database:</b> The backend contains
                detailed nutritional information, ingredient lists, and health
                benefits for a wide variety of traditional Bangladeshi dishes.
              </li>
              <li>
                <b>AI-Driven Personalization:</b> Machine learning models
                analyze user data and food attributes to recommend meals that
                align with individual health goals and preferences.
              </li>
              <li>
                <b>Safety and Wellness Focus:</b> The platform highlights foods
                suitable for pregnancy, heart health, and metabolic conditions,
                helping users avoid ingredients that may be harmful.
              </li>
              <li>
                <b>Family-Friendly Options:</b> FoodNutra suggests dishes that
                are safe and nutritious for all family members, including
                children and seniors.
              </li>
              <li>
                <b>Modern User Experience:</b> Built with Next.js 15 and React
                19, the frontend offers a fast, responsive interface with
                dark/light themes, animated navigation, and interactive team
                profiles.
              </li>
              <li>
                <b>Scalable Performance:</b> Static site generation (SSG) and
                incremental static regeneration (ISR) ensure fast load times and
                reliable access for all users.
              </li>
            </ul>
            <p>
              FoodNutra’s mission is to empower individuals and families to make
              informed, culturally relevant food choices that promote long-term
              health and wellness, using the power of AI and local food
              knowledge.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
