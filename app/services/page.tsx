import { Label } from "@/components/ui/label";
import { AttractionSection } from "@/components/shared/attraction_section";


export default function ServicesPage() {
  return (
    <section className="flex flex-col gap-12 mt-8">

      {/* Header Section */}
      <section className="flex flex-col gap-6 px-5 md:px-12 max-w-6xl">
        
        <Label className="font-bold text-primary text-3xl md:text-5xl leading-tight">
          Our Services – Where Nature Meets Hospitality.
        </Label>


        <Label className="font-normal text-base md:text-lg leading-relaxed text-muted-foreground max-w-5xl">
          At Chanika Kijani, we offer a diverse range of services designed to bring people
          closer to nature while promoting sustainability, relaxation, and community engagement.
          Whether you&apos;re seeking a tranquil escape, educational tours, eco-friendly accommodations,
          or venue hire for special events, our services are tailored to provide memorable and meaningful
          experiences within the beauty of our botanical garden.
        </Label>

      </section>

      {/* Attraction Section */}
      <section className="min-h-[calc(100svh-100px)] flex items-center justify-center px-5 md:px-12">
        <AttractionSection />
      </section>

    </section>
  );
}