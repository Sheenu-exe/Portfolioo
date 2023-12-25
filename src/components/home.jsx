import Hero from "../img/3d-web-developer-working-on-proj.png";
import Resume from "../img/Resume (1).pdf";
import Sleep from "../img/sticker (1).png";

const statss = [
  { id: 1, name: "In HTML, CSS, JS & React", value: "Responsive Design" },
  {
    id: 2,
    name: "Works across all browsers",
    value: "Cross Browser Compatibility",
  },
  {
    id: 3,
    name: "Web standards ensure consistent, accessible, user-friendly development.",
    value: "Web standards",
  },
];
const Home = () => {
  return (
    <>
      <section className="dark:bg-black dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold w-full leadi sm:text-6xl">
              Hii! Its Me <span className="sachin"> Sachin. </span>
            </h1>
            <h3 className="mt-6 mb-8 font-semibold text-2xl">
              A Professional Frontend Developer based in Pune.
            </h3>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={Resume}
                className="resumebtn px-8 py-3 text-lg font-semibold rounded  dark:text-gray-900"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={Hero}
              alt=""
              className="object-contain  h-50 sm:h-50 lg:h-50 xl:h-112 2xl:h-132"
            />
          </div>
        </div>
      </section>
      <div className="bg-black py-18 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {statss.map((stats) => (
              <div
                key={stats.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-white">{stats.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stats.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="about bg-black flex flex-row">
        <div className="left m-10 w-1/2 h-auto">
          <img src={Sleep} className=" w-full h-auto" alt="" />
        </div>
        <div className="right m-10  w-1/2 h-auto text-white flex flex-col justify-center align-center">
          <h1 className="text-3xl font-bold flex justify-center text-center m-5">My Life</h1>
          <p className="text-xl">
            I&apos;m Sachin Parihar, an 18-year-old BCA student at Manipal University
            Jaipur, and I&apos;m really passionate about front-end development. As I
            delve into my studies, I find myself drawn to technologies like
            HTML, CSS, and JavaScript, which allow me to create visually
            appealing and user-friendly websites. <br /><br /> What sets me apart is my
            unwavering enthusiasm and fun-loving nature. These qualities make me
            not just a valuable team member but also infuse energy into any
            project or workspace I&apos;m part of. I&apos;m excited about my journey as a
            fresher in the tech world and eager to explore the vast
            opportunities that lie ahead.
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
