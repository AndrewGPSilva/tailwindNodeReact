import { FaFacebook, FaTiktok, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

function Rodape() {
    const anoAtual = new Date().getFullYear();
    return (
        <footer className=" flex justify-between text-start bg-black text-white py-4 position: fixed bottom-0 w-full">
            <div>
                <h1 className="ml-1">&copy; { anoAtual } Andrew Silva, Dev Back-End.</h1>
            </div>
            <div className='flex'>
                <a href=''><p className='text-blue-900 text-2xl px-2.5 hover:bg-orange-400 hover:rounded-md'> <FaFacebook /> </p></a>
                <a href=''><p className='text-white text-2xl px-2.5 hover:bg-orange-400 hover:rounded-md'> <FaTiktok /> </p></a>
                <a href=''><p className='text-blue-500 text-2xl px-2.5 hover:bg-orange-400 hover:rounded-md'> <FaTwitter /> </p></a>
                <a href=''><p className='text-blue-900 text-2xl px-2.5 hover:bg-orange-400 hover:rounded-md'> <FaLinkedin /> </p></a>
                <a href=''><p className='text-white text-2xl px-2.5 hover:bg-orange-400 hover:rounded-md'> <FaGithub /> </p></a>
                <a href=''><p className='text-red-600 text-2xl px-2.5 hover:bg-orange-400 hover:rounded-md'> <FaInstagram /> </p></a>
            </div>
        </footer>
    )
}

export default Rodape;