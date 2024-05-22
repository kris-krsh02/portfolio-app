import Header from "./components/header";
import ProjectHighlights from "./components/home/project_highlights";
import WelcomeSection from "./components/home/welcome_section";

export default function Home() {
  return (
    <body className="flex flex-col items-center bg-beige">
      <Header />
      <WelcomeSection />
      <ProjectHighlights />
    </body>
    
  );
}
