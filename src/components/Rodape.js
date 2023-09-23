import { FaFacebook, FaTiktok, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

function Rodape() {
    const anoAtual = new Date().getFullYear();
    return (
        <footer className=" flex justify-between text-start bg-black text-white py-4 position: fixed bottom-0 w-full">
            <div>
                <h1 className="ml-1">&copy; { anoAtual } Andrew Silva - Dev Back-End</h1>
            </div>
            <div className='flex'>
                <a href='https://www.facebook.com/Andrew13G' target='blank'><p className='text-blue-900 text-2xl px-2.5 hover:bg-orange-400 hover:rounded-md'> <FaFacebook /> </p></a>
                <a href='https://www.tiktok.com/@gps_drew_dev' target='blank'><p className='text-white text-2xl px-2.5 hover:bg-orange-400 hover:rounded-md'> <FaTiktok /> </p></a>
                <a href='https://twitter.com/AndrewGPS13' target='blank'><p className='text-blue-500 text-2xl px-2.5 hover:bg-orange-400 hover:rounded-md'> <FaTwitter /> </p></a>
                <a href='https://www.linkedin.com/in/andrewgpsilva/' target='blank'><p className='text-blue-900 text-2xl px-2.5 hover:bg-orange-400 hover:rounded-md'> <FaLinkedin /> </p></a>
                <a href='https://github.com/AndrewGPSilva' target='blank'><p className='text-white text-2xl px-2.5 hover:bg-orange-400 hover:rounded-md'> <FaGithub /> </p></a>
                <a href='https://www.instagram.com/andrew_gpereira/' target='blank'><p className='text-red-600 text-2xl px-2.5 hover:bg-orange-400 hover:rounded-md'> <FaInstagram /> </p></a>
            </div>
        </footer>
    )
}

export default Rodape;