import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, PieChart, Shield, Target, Briefcase, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Stocks & Equity",
      description: "Direct equity investments with research-backed recommendations for long-term wealth creation.",
      features: ["Market Analysis", "Portfolio Tracking", "Risk Assessment"],
      color: "growth"
    },
    {
      icon: PieChart,
      title: "Mutual Funds",
      description: "Diversified mutual fund portfolios tailored to your risk profile and investment goals.",
      features: ["SIP Planning", "Fund Selection", "Goal Mapping"],
      color: "primary"
    },
    {
      icon: Shield,
      title: "Bonds & Fixed Income",
      description: "Stable income through government and corporate bonds with guaranteed returns.",
      features: ["Government Bonds", "Corporate Bonds", "Fixed Deposits"],
      color: "accent"
    },
    {
      icon: Target,
      title: "ULIPs",
      description: "Unit Linked Insurance Plans combining investment growth with life insurance protection.",
      features: ["Life Cover", "Investment Growth", "Tax Benefits"],
      color: "success"
    },
    {
      icon: Briefcase,
      title: "Insurance Products",
      description: "Comprehensive insurance solutions for life, health, and wealth protection.",
      features: ["Life Insurance", "Health Cover", "Wealth Protection"],
      color: "secondary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Investment Solutions Under One Roof
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From traditional investments to modern financial products, we offer comprehensive 
            solutions to help you achieve your financial goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-6 w-6 text-${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get personalized investment advice from our certified financial advisors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Download Investment Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;