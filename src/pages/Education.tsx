import React, { useEffect, useState } from "react";

import { ArrowLeft, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs.tsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardBanner,
  CardAvatar
} from '../components/ui/card.tsx';


const certificates = [
  {
    id: 1,
    name: "Angular Master",
    issuer: "Udemy",
    date: "February 2025",
    credentialId: "UC-54412824-c64a-4ff9-bacd-cd4bda00060a",
    category: "dev",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-54412824-c64a-4ff9-bacd-cd4bda00060a.jpg",
    description: "Comprehensive course covering modern web development technologies including React, Node.js, and MongoDB."
  },
  {
    id: 2,
    name: "Spring & SpringBoot",
    issuer: "Udemy",
    date: "February 2025",
    credentialId: "UC-edbafbdd-d936-47f7-b672-7eb0d8fa5e7",
    category: "dev",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-edbafbdd-d936-47f7-b672-7eb0dd8fa5e7.jpg",
    description: "Advanced course on React, Redux, and modern frontend architecture."
  },
];

const Education = () => {
  const [filter, setFilter] = useState("all");
  const [filteredCerts, setFilteredCerts] = useState(certificates);

  useEffect(() => {
    if (filter === "all") {
      setFilteredCerts(certificates);
    } else {
      setFilteredCerts(certificates.filter(cert => cert.category === filter));
    }
  }, [filter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow pt-24 pb-20 px-6 md:px-10 bg-gradient-to-b from-background via-background/95 to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link to="/#about" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to About
            </Link>
          </div>
          
          <header className="mb-12 text-center md:text-left">
            <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-accent/10 text-accent mb-4">
              Education & Certificates
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Professional <span className="text-gradient">Certifications</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl md:mx-0 mx-auto">
              A comprehensive collection of my professional certificates, training courses, and educational achievements.
            </p>
          </header>
          
          <Tabs defaultValue="all" className="mb-12">
            {/* <TabsList className="mb-6 mx-auto w-full max-w-lg flex justify-between">
              <TabsTrigger value="all" onClick={() => setFilter("all")}>All Certificates</TabsTrigger>
              <TabsTrigger value="web" onClick={() => setFilter("web")}>Web Development</TabsTrigger>
              <TabsTrigger value="data" onClick={() => setFilter("data")}>Data Science</TabsTrigger>
              <TabsTrigger value="cloud" onClick={() => setFilter("cloud")}>Cloud Computing</TabsTrigger>
            </TabsList> */}
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredCerts.map(cert => (
                  <InnovativeCertificateCard key={cert.id} certificate={cert} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="web" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCerts.filter(cert => cert.category === "web").map(cert => (
                  <CertificateCard key={cert.id} certificate={cert} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="data" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCerts.filter(cert => cert.category === "data").map(cert => (
                  <CertificateCard key={cert.id} certificate={cert} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cloud" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCerts.filter(cert => cert.category === "cloud").map(cert => (
                  <CertificateCard key={cert.id} certificate={cert} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

    </div>
  );
};

const InnovativeCertificateCard = ({ certificate }) => {
  const bannerColors = {
    "web": "from-blue-500 to-indigo-600",
    "data": "from-emerald-500 to-teal-600", 
    "cloud": "from-violet-500 to-purple-600"
  };

  return (
    <Card className="group overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border-0 shadow-lg">
      <CardBanner className={`bg-gradient-to-r ${bannerColors[certificate.category] || "from-accent to-blue-600"}`}>
        {/* Banner gradient background */}
      </CardBanner>
      
      <CardHeader className="text-center pb-2">
        <CardAvatar>
          <Award className="h-10 w-10 text-accent transition-all duration-500 group-hover:scale-110" />
        </CardAvatar>
        <CardTitle className="mt-3 group-hover:text-accent">{certificate.name}</CardTitle>
        <CardDescription className="font-medium text-lg opacity-90">{certificate.issuer}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground mb-5 text-center">
          {certificate.description}
        </p>
        
        <div className="grid grid-cols-3 gap-2 text-center py-3 px-2 rounded-lg bg-muted/40 backdrop-blur-sm">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Date</span>
            <span className="font-medium text-sm">{certificate.date}</span>
          </div>
          
          <div className="flex flex-col border-x border-border/50">
            <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Type</span>
            <span className="font-medium text-sm capitalize">{certificate.category}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">ID</span>
            <span className="font-medium text-sm truncate" title={certificate.credentialId}>
              {certificate.credentialId.substring(0, 8)}...
            </span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="mt-1">
        <Button variant="outline" size="sm" className="w-full rounded-full transition-all duration-300 group-hover:bg-accent group-hover:text-white border-accent/30" asChild>
          <a 
            href={certificate.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center"
          >
            View Certificate
            <ExternalLink size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const CertificateCard = ({ certificate }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:translate-y-[-5px] border-t-4 border-t-accent group">
      <CardHeader className="pb-3 relative">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2 transition-all group-hover:bg-accent/20">
          <Award className="text-accent h-6 w-6" />
        </div>
        <CardTitle className="text-xl transition-colors group-hover:text-accent">{certificate.name}</CardTitle>
        <CardDescription className="font-medium">{certificate.issuer}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {certificate.description}
        </p>
        <div className="text-sm text-muted-foreground space-y-2 p-3 rounded-md bg-secondary/50">
          <div className="flex justify-between">
            <span>Date:</span>
            <span className="font-medium text-foreground">{certificate.date}</span>
          </div>
          <div className="flex justify-between">
            <span>Credential ID:</span>
            <span className="font-medium text-foreground">{certificate.credentialId}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full group-hover:bg-accent group-hover:text-white transition-colors" asChild>
          <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center">
            View Certificate
            <ExternalLink size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Education;