import WorkSection from "./WorkSection";
import Contact from "./Contact";

export default function Work() {
  return (
    <div className="bg-white text-black min-h-screen">
      <WorkSection 
        title="All Work"
        layout="three-column"
        showViewAll={false}
        categories={[
          {
            title: "Service",
            items: [
              "Creative Direction",
              "Strategy",
              "Visual Identity",
              "Graphic Design",
              "Motion Design",
              "Digital Design",
              "Campaign",
              "Narrative",
              "Verbal Identity"
            ]
          },
          {
            title: "Industry",
            items: [
              "Art",
              "Architecture",
              "Technology",
              "Health",
              "Sport",
              "Fashion",
              "Beauty",
              "Sustainability"
            ]
          }
        ]}
      />
      <Contact />
    </div>
  );
}
