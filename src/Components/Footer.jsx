import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        
        <footer className="bg-black text-gray-200 py-10 px-4 lg:px-20">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                
               
                <div className='flex flex-col items-center md:items-start gap-2'>
                    <div className='flex items-center gap-2'>
                        <Image src="/assests/daily-health-app.png" alt='Docure Logo' height={40} width={40} />
                        
                        <span className="text-3xl font-extrabold text-white">Docure</span>
                    </div>
                    <p className="text-sm opacity-80">Providing quality healthcare services for you.</p>
                </div>

                
                <div className="flex gap-4">
                    
                    <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-gray-300 transition-all">
                        <FaFacebook size={20} />
                    </a>
                    <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-gray-300 transition-all">
                        <FaXTwitter size={20} />
                    </a>
                    <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-gray-300 transition-all">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-gray-300 transition-all">
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>

            
            <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm opacity-70">
                &copy; {new Date().getFullYear()} Docure. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;