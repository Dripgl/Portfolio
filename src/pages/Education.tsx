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
  } from '../components/ui/card.tsx';


const certificates = [
    {
      id: 1,
      name: "Full Stack Web Development",
      issuer: "Udemy",
      date: "October 2023",
      credentialId: "UC-123456789",
      category: "web",
      url: "https://www.udemy.com/certificate/example",
      description: "Comprehensive course covering modern web development technologies including React, Node.js, and MongoDB."
    },
    {
      id: 2,
      name: "React and Redux Masterclass",
      issuer: "Coursera",
      date: "July 2023",
      credentialId: "CERT-789012345",
      category: "web",
      url: "https://www.coursera.org/verify/example",
      description: "Advanced course on React, Redux, and modern frontend architecture."
    },
    {
      id: 3,
      name: "Data Science & Machine Learning",
      issuer: "DataCamp",
      date: "March 2023",
      credentialId: "DC-345678912",
      category: "data",
      url: "https://www.datacamp.com/certificate/example",
      description: "Comprehensive training on data analysis, visualization, and machine learning algorithms."
    },
    {
      id: 4,
      name: "Cloud Solutions Architecture",
      issuer: "AWS Training",
      date: "January 2023",
      credentialId: "AWS-567890123",
      category: "cloud",
      url: "https://aws.training/certification/example",
      description: "Professional certification for designing and implementing solutions on AWS cloud."
    }
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
      // Scroll to top when component mounts
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <div className="min-h-screen flex flex-col">
        
        <main className="flex-grow pt-24 pb-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <Link to="/#about" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft size={16} className="mr-2" />
                Back to About
              </Link>
            </div>
            
            <header className="mb-12">
              <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-accent/10 text-accent mb-4">
                Education & Certificates
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Professional <span className="text-gradient">Certifications</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A comprehensive collection of my professional certificates, training courses, and educational achievements.
              </p>
            </header>
            
            <Tabs defaultValue="all" className="mb-12">
              {/* <TabsList>
                <TabsTrigger value="all" onClick={() => setFilter("all")}>All Certificates</TabsTrigger>
                <TabsTrigger value="web" onClick={() => setFilter("web")}>Web Development</TabsTrigger>
                <TabsTrigger value="data" onClick={() => setFilter("data")}>Data Science</TabsTrigger>
                <TabsTrigger value="cloud" onClick={() => setFilter("cloud")}>Cloud Computing</TabsTrigger>
              </TabsList> */}
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCerts.map(cert => (
                    <CertificateCard key={cert.id} certificate={cert} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="web" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCerts.filter(cert => cert.category === "web").map(cert => (
                    <CertificateCard key={cert.id} certificate={cert} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="data" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCerts.filter(cert => cert.category === "data").map(cert => (
                    <CertificateCard key={cert.id} certificate={cert} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cloud" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  
  const CertificateCard = ({ certificate }) => {
    return (
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <CardHeader className="pb-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <Award className="text-primary h-6 w-6" />
          </div>
          <CardTitle>{certificate.name}</CardTitle>
          <CardDescription>{certificate.issuer}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            {certificate.description}
          </p>
          <div className="text-sm text-muted-foreground">
            <div className="flex justify-between mb-1">
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
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center">
              View Certificate
              <ExternalLink size={14} className="ml-2" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    );
  };
  
  export default Education;