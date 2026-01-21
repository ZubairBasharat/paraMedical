interface Blog {
  id: number;
  title: string;
  image: string;
  link: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Building Bridges in Home Healthcare: Meet Jay",
    image: "/images/news1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Beyond reception: Supporting care behind the scenes",
    image: "/images/news2.jpg",
    link: "#",
  },
  {
    id: 3,
    title:
      "Building careers from the inside out: ParaMed's HSW to PSW Bridging Program",
    image: "/images/news3.jpg",
    link: "#",
  },
];

export default function NewsSection() {
  return (
    <section className="py-10 bg-gray-50 -mt-6">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Latest News
        </h2>
        <ul className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${blog.image})` }}
              />
              <div className="p-4 flex flex-col justify-between h-40">
                <h3 className="text-lg font-medium text-gray-800 line-clamp-2">
                  {blog.title}
                </h3>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read on →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
