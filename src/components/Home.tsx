import AnimatedDiv from './AnimatedDiv'
import FotoProfile from '../assets/image/foto_profile.jpeg'

const Home = () => {
  return (
    <AnimatedDiv>
      <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-around px-6 md:px-20 pt-16 md:pt-24">
        
        {/* Foto de perfil a la izquierda */}
        <div className="flex justify-center md:justify-start md:w-1/2">
          <div className="w-64 h-64 sm:w-76 sm:h-76 md:w-72 md:h-72 lg:w-90 lg:h-90 rounded-full overflow-hidden border-4 border-gray-300">
            <img
              src={FotoProfile}
              alt="Foto de Abel Chocca"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Texto a la derecha / debajo en móvil */}
        <div className="flex flex-col justify-center items-start md:w-1/2 mt-4 md:mt-0 md:pl-10">
          <h1 className="text-5xl sm:text-5xl md:text-[80px] lg:text-[100px] font-serif font-bold">Abel</h1>
          <h1 className="text-5xl sm:text-5xl md:text-[80px] lg:text-[100px] font-serif font-bold">Chocca</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-serif font-bold mt-2 sm:mt-3">
            Fullstack Developer Jr.
          </p>
        </div>

      </div>
    </AnimatedDiv>
  )
}

export default Home