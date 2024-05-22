import { Container } from "postcss";
import ProjectCard from "./project_card";

export default function ProjectHighlights() {
  return (
    <section className="flex flex-col items-center justify-center mt-20 bg-purple w-full p-10">
      <h1 className="text-4xl font-accent text-center text-beige font-outline-1">
        Project Highlights
      </h1>
      <p className="font-primary text-xl text-center text-black mt-10">
        Here are some of the projects I have worked on:
      </p>
      <div className="flex flex-col lg:flex-row">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-beige text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        view all
      </button>
    </section>
  );
}
