"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GALLERY_PHOTOS, GALLERY_VIDEOS, ACHIEVEMENTS } from "@/lib/constants";
import { PageHeader } from "@/components/page-header";
import { AnimatedWrapper } from "@/components/animated-wrapper";
import { PlayCircle, Trophy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const PHOTO_CATEGORIES = ["All", "Classes", "Events", "Performances", "Competitions"];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        description="A glimpse into the vibrant life at Harmony Hub. Explore our classes, events, and student achievements."
      />
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <AnimatedWrapper>
          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-10">
              <TabsTrigger value="photos">Photos</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="photos">
              <PhotosTab />
            </TabsContent>

            <TabsContent value="videos">
              <VideosTab />
            </TabsContent>

            <TabsContent value="achievements">
              <AchievementsTab />
            </TabsContent>
          </Tabs>
        </AnimatedWrapper>
      </div>
    </>
  );
}

function PhotosTab() {
  const [filter, setFilter] = useState("All");

  const filteredPhotos = filter === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === filter);

  return (
    <div>
        <div className="flex justify-center flex-wrap gap-2 mb-8">
            {PHOTO_CATEGORIES.map(category => (
                <Button 
                    key={category} 
                    variant={filter === category ? 'default' : 'outline'}
                    onClick={() => setFilter(category)}
                >
                    {category}
                </Button>
            ))}
        </div>
      <div className="masonry-grid">
        {filteredPhotos.map((photo, index) => (
          <AnimatedWrapper key={photo.id} delay={index * 0.05}>
            <div className="overflow-hidden rounded-lg shadow-md group">
              <Image
                src={photo.image.imageUrl}
                alt={`Gallery photo ${photo.id}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={photo.image.imageHint}
              />
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </div>
  );
}

function VideosTab() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {GALLERY_VIDEOS.map((video, index) => (
        <AnimatedWrapper key={video.id} delay={index * 0.1}>
          <Card className="overflow-hidden group">
            <div className="aspect-video relative">
              <iframe
                src={video.embedUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
               <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                    <PlayCircle className="w-16 h-16 text-white/70" />
                </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold">{video.title}</h3>
            </CardContent>
          </Card>
        </AnimatedWrapper>
      ))}
    </div>
  );
}

function AchievementsTab() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ACHIEVEMENTS.map((achievement, index) => (
        <AnimatedWrapper key={achievement.id} delay={index * 0.1}>
          <Card className="overflow-hidden h-full flex flex-col">
            <div className="relative aspect-[4/3]">
              <Image
                src={achievement.image.imageUrl}
                alt={achievement.title}
                fill
                className="object-cover"
                data-ai-hint={achievement.image.imageHint}
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Trophy className="w-6 h-6 text-primary" />
                <CardTitle className="font-headline">{achievement.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{achievement.description}</p>
            </CardContent>
          </Card>
        </AnimatedWrapper>
      ))}
    </div>
  );
}
