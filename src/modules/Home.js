import profileImage from '../images/profile.jpg';

function Home() {
  return (
    <div className="flex justify-center content-center mt-12 p-12 w-2/3">
        <div className='w-1/3 p-2 rounded-lg ' >
            <img src={profileImage} alt="Imagen de perfil" className='w-full rounded-xl object-cover object-top max-h-[380px] '/>
        </div>
        <div className='flex justify-start content-start flex-col w-2/3 p-8 '>
            <h1 className="jost-custom text-5xl font-extrabold text-cyan-600 "><span className='text-cyan-700 text-3xl'>Soy</span> Josefina Huidobro</h1>
            <p className='text-zinc-300 text-xl py-4 jost-custom border-b-4 border-zinc-400  '>Estudiante de <span className='text-zinc-200 font-bold text-2xl'>Ingeniería Informática</span></p>
        </div>
    </div>
  );
}

export default Home;