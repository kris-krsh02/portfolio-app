import { FaGithub } from "react-icons/fa6";
import { TfiLinkedin } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center mt-20 bg-purple w-full p-10 font-accent text-beige text-3xl font-outline-1 text-center">
      It was great having you here!
      <div className="flex flex-row items-center justify-between gap-x-12 mt-10 text-black text-4xl">
        <MdOutlineAlternateEmail />
        <TfiLinkedin />
        <FaGithub />
      </div>
    </footer>
  );
}
