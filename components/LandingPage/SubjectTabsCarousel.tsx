"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import CarouselImage1 from "@/public/CarouselImg1.png";
import CarouselImage2 from "@/public/CarouselImg2.png";
import CarouselImage3 from "@/public/CarouselImg3.png";

// Define types for your data structures
type Subject = {
  title: string;
  image: typeof CarouselImage1 | typeof CarouselImage2 | typeof CarouselImage3;
};

type SubjectsData = {
  [key: string]: Subject[];
};

const subjectsData: SubjectsData = {
  Science: [
    { title: "Basic Science", image: CarouselImage1 },
    { title: "Physics", image: CarouselImage2 },
    { title: "Chemistry", image: CarouselImage3 },
  ],
  Arts: [
    { title: "Painting", image: CarouselImage3 },
    { title: "Sculpture", image: CarouselImage2 },
    { title: "Photography", image: CarouselImage1 },
  ],
  // ... Add other categories as before
};

// Define props type for SubjectCard component
type SubjectCardProps = Subject;

const SubjectCard: React.FC<SubjectCardProps> = ({ title, image }) => (
  <Card className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-6 py-6">
    <CardContent className="p-0 flex flex-col gap-3">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="font-semibold text-xs text-lerndise-purple">{title}</h3>
    </CardContent>
  </Card>
);

// Define props type for SubjectCarousel component
type SubjectCarouselProps = {
  subjects: Subject[];
};

const SubjectCarousel: React.FC<SubjectCarouselProps> = ({ subjects }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {subjects.map((subject, index) => (
            <SubjectCard key={index} {...subject} />
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 rounded-full"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 rounded-full"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

const SubjectTabsCarousel: React.FC = () => {
  return (
    <div className="w-full px-[100px] py-[100px]">
      <Tabs defaultValue="Science" className="w-full">
        <div className="grid grid-cols-2 items-center">
          <h2 className="text-xl font-bold mb-4">Popular subjects</h2>
          <TabsList className="w-auto justify-start bg-white mb-4">
            {Object.keys(subjectsData).map((category) => (
              <TabsTrigger key={category} value={category} className="mr-6">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {Object.entries(subjectsData).map(([category, subjects]) => (
          <TabsContent key={category} value={category}>
            <SubjectCarousel subjects={subjects} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default SubjectTabsCarousel;