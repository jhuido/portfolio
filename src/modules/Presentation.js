

function Presentation() {
  return (
    <div className="flex justify-center content-center p-12 w-2/3 flex-col md:flex-row-reverse">
        <div className='w-1/3 flex justify-center items-center '>
            <h1 className='text-4xl font-extrabold text-white bg-cyan-800 flex justify-center items-center p-4 h-4/5  rounded-full'>¿Quién&nbsp;soy?</h1>
        </div> 
        <div className='flex flex-col  p-5 w-2/3'>
            <p className='text-right text-zinc-200 text-lg '>Soy estudiante de <span className='text-2xl font-bold'>Ingeniería&nbsp;Informática</span>,</p>
            <p className='text-right text-zinc-200 text-lg '>me encuentro cursando mi 5to año en la <span className='text-xl font-semibold'>Universidad&nbsp;Católica&nbsp;Argentina</span></p>
            <p className='text-left text-zinc-200 text-lg pt-6 w-5/6'>Busco crecer profesionalmente y aplicar mis conocimientos en los desafíos que se me&nbsp;presenten</p>
        </div>
    </div>
  );
}

export default Presentation;