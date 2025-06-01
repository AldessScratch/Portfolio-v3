'use client'

import Navbar from './ui/navbar';
import ProfileCard from './ui/profilecard';
import ImageCard from './ui/imagecard';
import ProjectCardSection from './ui/projectcardsection';
import SkillCard from './ui/skillcard';

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 ease-in-out">
      <Navbar />
      <div className="container mt-24 px-6 lg:mt-0 lg:px-0 z-10" id='home'>
        <div className="flex flex-col justify-center lg:flex-row gap-8">
          <div className="lg:w-1/4 w-full lg:mb-10 left-0 h-fit lg:sticky lg:top-[20vh]">
            <ProfileCard 
            description="Hey, it's me Aldess :D, I'm a french teenager and I love coding, drawing, 3D modelling and making videos. Currently learning Next.js"
            badges={[
              { badge: "github", link: "https://github.com/AldessScratch" },
              { badge: "discord", link: "https://discord.com/users/1001220536619249665" }
            ]}/>
          </div>
          <div className="xl:w-2/4 lg:mt-[20vh] lg:w-2/3 w-full">
            <div className="w-full grid grid-cols-1 gap-2 lg:grid-cols-1">
              <ImageCard title="Low Poly BMW M4" description="A low poly car that I made in Blender" imageUrl="/bmw.png" imageAlt="BMW M4 Car done in Blender" />
            </div>
            <SkillCard />
            <ProjectCardSection 
            projects={[
            {
              title: "Current Portfolio",
              description: "Modern portflio website made with Next.js",
              images: ["/Website-v3/portfolio.png"],
              badges: ["next", "react", "tailwind"],
              github: "https://github.com/AldessScratch/Website-v3"
            },
            {
              title: "Flace",
              description: "A website I made with a friend to learn with flashcards",
              images: ["/Flace/flacehome.png", "/Flace/flacecards.png", "/Flace/flacelist.png", "/Flace/flace4.png"],
              link: "https://flace.netlify.app",
              badges: ["html", "css", "js"],
              github: "https://github.com/AldessScratch/Flace"
            },
            {
              title: "Portfolio v2",
              description: "Modern portfolio which was my first time with Tailwind CSS",
              images: ["/website-2/portfolio.png"],
              link: "/website-2/index.html",
              badges: ["html", "tailwind"],
              github: "https://github.com/AldessScratch/website-2"
            },
            {
              title: "Lite Client Website",
              description: "Modern landing page for a Minecraft Client that never came out",
              images: ["/liteclient/liteclient.png", "/liteclient/liteclient2.png", "/liteclient/liteclient3.png", "/liteclient/liteclient4.png", "/liteclient/liteclient5.png"],
              link: "/liteclient/index.html",
              badges: ["html", "css", "js"]
            },
            {
              title: "Aetherium Launcher Frontend",
              description: "Very Clean frontend for Aetherium Client Launcher.",
              images: ["/Aetherium-Launcher/launcher.png", "/Aetherium-Launcher/launcher2.png", "/Aetherium-Launcher/launcher3.png"],
              link: "/Aetherium-Launcher/index.html",
              badges: ["html", "css", "js"]
            },
            {
              title: "Aetherium Website",
              description: "A dark-themed/modern website for a Minecraft Client called Aetherium",
              images: ["/Aetherium-Website/aetherium.png"],
              link: "/Aetherium-Website/index.html",
              badges: ["html", "css", "js"]
            },
            {
              title: "Snowy-bg",
              description: "Website to use with Lively Wallpaper so we can have a nice background on the classroom's computer but the teacher didn't like it :(",
              images: ["/Snowy-bg/snowybg.png"],
              badges: ["html", "css"]
            },
            {
              title: "Portfolio v1",
              description: "My first portfolio",
              images: ["/website/portfolio.png"],
              link: "https://aldessscratch.github.io/website",
              badges: ["html", "css"],
              github: "https://github.com/AldessScratch/website"
            },
            {
              title: "Soar Client Website",
              description: "A slight redsign of the Soar Client Website",
              images: ["/Soar-Client-Website/soar.png", "/Soar-Client-Website/soar2.png"],
              link: "https://soarclient.netlify.app",
              badges: ["html", "css", "js"],
              github: "https://github.com/AldessScratch/Soar-Client-Website"
            },
            {
              title: "GetTechno / Fluix",
              description: "Website with games and frontend for Ultraviolet Proxy, first website that I made.",
              images: ["/fluix/fluix2.png", "/fluix/fluix.png", "/fluix/gettechno.png"],
              badges: ["html", "css", "js"]
            }
          ]}
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center h-28 text-gray-600 dark:text-gray-400">
          &copy; 2025 @ aldesssc. All rights reserved.
        </div>
      </div>
      <div className="fixed -top-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full opacity-30 blur-3xl"></div>
      <div className="fixed top-1/2 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full opacity-30 blur-3xl"></div>
      <div className="fixed -bottom-40 left-1/3 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full opacity-30 blur-3xl"></div>
    </div>
  );
}
