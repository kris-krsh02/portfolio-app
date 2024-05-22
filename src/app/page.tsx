import Footer from "./components/footer";
import Header from "./components/header";
import ProjectHighlights from "./components/home/project_highlights";
import WelcomeSection from "./components/home/welcome_section";

export default function Home() {
  return (
    <body className="flex flex-col items-center bg-beige font-primary text-black">
      <Header />
      <WelcomeSection />
      <ProjectHighlights />
      <section className="flex flex-col items-center justify-center mt-20 w-full p-10 pb-5 ">
        <h1 className="font-accent text-3xl text-purple font-outline-1 text-center">
          Want to see my whole journey?
        </h1>
        <button
          type="button"
          className="mt-10 p-3 sm:p-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-purple text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
        >
          CLICK HERE!
        </button>
      </section>
      <Footer />
    </body>
  );
}
