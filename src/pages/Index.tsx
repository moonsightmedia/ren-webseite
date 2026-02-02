import { Layout } from "@/components/layout";
import {
  HeroSection,
  FeatureBar,
  ProjectsSection,
  TrustSection,
  TestimonialsSection,
  CTASection,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeatureBar />
      <ProjectsSection />
      <TrustSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
