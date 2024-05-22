export default function ProjectCard() {
  return (
    <a
      className="flex flex-col bg-white border shadow-sm rounded-l hover:shadow-lg transition m-5"
      href="#"
    >
      <img
        className="w-full h-auto rounded-t-l"
        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
        alt="Image Description"
      />
      <div className="p-4 md:p-5 bg-beige">
        <h3 className="text-lg font-bold text-gray-800">Card title</h3>
        <p className="mt-1 text-gray-500">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </a>
  );
}
