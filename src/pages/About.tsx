import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Satellite, TrendingUp, ExternalLink, Github, Linkedin, Mail } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">
            About Us
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Welcome to Agrizon
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing agriculture through AI-powered satellite analysis
          </p>
        </div>

        {/* Project Overview */}
        <div className="mb-16">
          <Card className="shadow-strong">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Leaf className="h-6 w-6 text-primary" />
                <span>About Agrizon</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-foreground text-lg">
                Agrizon is an innovative agricultural technology platform that empowers farmers
                with cutting-edge satellite imagery analysis and AI-driven insights. Our mission
                is to transform traditional farming practices into data-driven, efficient, and
                profitable agricultural operations.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
                  <Satellite className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Satellite Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced NDVI analysis using 5 years of Landsat satellite imagery
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
                  <TrendingUp className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">AI-Powered Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Machine learning algorithms for crop recommendations and profitability analysis
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
                  <Leaf className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Field Classification</h3>
                  <p className="text-sm text-muted-foreground">
                    6-class productivity mapping to identify the most profitable areas
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-light rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Our Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Python FastAPI</Badge>
                  <Badge>Google Earth Engine</Badge>
                  <Badge>Google Gemini AI</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Supabase</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Creator Section */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Meet the Creator</h2>
            <p className="text-muted-foreground">
              Passionate about building intelligent solutions for real-world problems
            </p>
          </div>

          <Card className="shadow-strong max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-32 h-32 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground text-4xl font-bold flex-shrink-0">
                  VA
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Vishal A S</h3>
                  <p className="text-lg text-primary font-semibold mb-4">
                    AI Developer & ML Engineer
                  </p>

                  <p className="text-foreground mb-4 leading-relaxed">
                    Transforming ideas into intelligent solutions. B.Tech in Computer Science (AI)
                    at Amrita Vishwa Vidyapeetham. Passionate about Deep Learning, LLMs, Computer
                    Vision, and building AI-powered applications that make a difference.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mt-6">
                    <Button variant="default" size="sm" asChild>
                      <a
                        href="https://portfolio-sigma-blond-57.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Portfolio
                      </a>
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">Areas of Expertise:</p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <Badge variant="secondary">Deep Learning</Badge>
                      <Badge variant="secondary">Large Language Models</Badge>
                      <Badge variant="secondary">Computer Vision</Badge>
                      <Badge variant="secondary">AI Applications</Badge>
                      <Badge variant="secondary">Full Stack Development</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="shadow-medium bg-gradient-hero text-primary-foreground">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Agriculture?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join farmers across India who are leveraging AI-powered insights to maximize their yields
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <a href="/dashboard">
                    <Leaf className="mr-2 h-5 w-5" />
                    Get Started
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="/consultation">
                    Book Consultation
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
