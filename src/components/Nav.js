

function Nav() {
  return (
    <div className="flex justify-center content-center fixed top-0 left-0 w-full p-6 bg-slate-900 hover:bg-slate-800">
        <div className="flex justify-around w-2/3 text-zinc-300">
            <p className="text-zinc-300 text-lg hover:cursor-pointer hover:text-white hover:font-semibold hover:text-xl">Home</p>
            <p className="text-zinc-300 text-lg hover:cursor-pointer hover:text-white hover:font-semibold hover:text-xl">Studies</p>
            <p className="text-zinc-300 text-lg hover:cursor-pointer hover:text-white hover:font-semibold hover:text-xl">Certificates</p>
            <p className="text-zinc-300 text-lg hover:cursor-pointer hover:text-white hover:font-semibold hover:text-xl">Knowledge</p>
            <p className="text-zinc-300 text-lg hover:cursor-pointer hover:text-white hover:font-semibold hover:text-xl">Experience</p>
        </div>
    </div>
  );
}

export default Nav;