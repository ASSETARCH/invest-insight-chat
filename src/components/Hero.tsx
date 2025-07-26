import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Target } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 min-h-screen flex items-center bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Your Investment 
                <span className="text-primary"> Journey</span> Starts Here
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Comprehensive investment solutions under one roof. From stocks to insurance, 
                we help you build wealth with confidence and expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Start Investing
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-growth/10 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-growth" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Expert Guidance</p>
                  <p className="text-xs text-muted-foreground">Professional advice</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Secure Platform</p>
                  <p className="text-xs text-muted-foreground">Bank-grade security</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Target className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Goal-Based</p>
                  <p className="text-xs text-muted-foreground">Personalized strategy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-growth/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                {/* Mock Investment Cards */}
                <div className="bg-card rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Mutual Funds</span>
                    <span className="text-xs text-growth">+12.5%</span>
                  </div>
                  <div className="h-16 bg-gradient-to-t from-growth/20 to-transparent rounded-lg"></div>
                </div>
                
                <div className="bg-card rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Stocks</span>
                    <span className="text-xs text-growth">+8.3%</span>
                  </div>
                  <div className="h-16 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
                </div>
                
                <div className="bg-card rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Bonds</span>
                    <span className="text-xs text-growth">+5.7%</span>
                  </div>
                  <div className="h-16 bg-gradient-to-t from-accent/20 to-transparent rounded-lg"></div>
                </div>
                
                <div className="bg-card rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Insurance</span>
                    <span className="text-xs text-growth">+6.2%</span>
                  </div>
                  <div className="h-16 bg-gradient-to-t from-secondary/40 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-growth text-growth-foreground rounded-full p-3">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-full p-3">
              <Shield className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;