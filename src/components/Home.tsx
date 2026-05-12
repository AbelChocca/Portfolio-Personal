import AnimatedDiv from "./AnimatedDiv";
import FotoProfile from "/assets/image/foto_profile.jpeg";

const Home = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Glow decorativo */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-indigo-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 flex min-h-screen flex-col md:flex-row items-center justify-center gap-16 px-6 md:px-20">
        {/* FOTO */}
        <AnimatedDiv direction="up" distance={12}>
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full scale-110" />

            <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={FotoProfile}
                alt="Foto de Abel Chocca"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedDiv>

        {/* TEXTO */}
        <div className="max-w-2xl">
          <AnimatedDiv stagger direction="up" distance={18}>
            <p className="text-indigo-400 font-medium mb-3 tracking-wide">
              FULLSTACK DEVELOPER
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-none tracking-tight">
              Abel
            </h1>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-none tracking-tight text-zinc-400 dark:text-zinc-500">
              Chocca
            </h1>

            <p className="mt-6 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Building scalable backend systems and modern web experiences using
              FastAPI, React, PostgreSQL and cloud technologies.
            </p>

            {/* BOTONES */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="
                  px-6 py-3 rounded-xl
                  bg-indigo-500 hover:bg-indigo-400
                  text-white font-medium
                  transition-all duration-300
                  shadow-lg shadow-indigo-500/20
                  hover:scale-105
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  px-6 py-3 rounded-xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-md
                  hover:bg-white/10
                  transition-all duration-300
                "
              >
                Contact Me
              </a>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};

export default Home;
