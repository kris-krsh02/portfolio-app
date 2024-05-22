export default function WelcomeSection() {
  return (
    <section className="flex flex-col items-center justify-center mt-20 w-1/2">
      <h1 className="text-4xl font-accent text-center text-purple font-outline-1">
        Welcome to my corner!
      </h1>
      <p className="font-primary text-xl text-center text-black mt-10">
        My name is
        <span className="font-accent"> Kristiana Karshelieva </span>
        and I am a Computer Science student. I have a passion for both frontend
        and backend development, and I am interested in Artifical Intelligence.
        Occasionally, I also dabble in UX and graphic design.
      </p>
      <p className="font-primary text-xl text-center text-black mt-10">
        {" "}
        I like to learn a bit of everything!
      </p>
    </section>
  );
}
