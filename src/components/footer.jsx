import Logo from "../img/Gray (1)-PhotoRoom.png-PhotoRoom.png";
import Swal from "sweetalert2";
import { Instagram, Github ,Linkedin } from 'lucide-react';
import "../App.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Footer() {
  const Alert = () => {
    Swal.fire({
      title: "Terms",
      text: "Ask permission on mail before use.",
      icon: "info",
      confirmButtonText: "Cool",
      backdrop: "#00000041",
    });
  };
  return (
    <footer  data-aos="fade-up" className="px-4 py-12 dark:bg-gray-900 dark:text-gray-400">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 ">
            <img src={Logo} alt="" />
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8 cursor-pointer">
            <li>
              <a rel="noopener noreferrer" onClick={Alert}>
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a className="flex flex-row" rel="noopener noreferrer" href="https://www.instagram.com/sachinn.code/">
			<Instagram className="mr-1"/>Instagram
            </a>
          </li>
          <li>
            <a className="flex flex-row" rel="noopener noreferrer" href="https://github.com/Sheenu-exe">
			<Github className="mr-1"/>Github
            </a>
          </li>
          <li>
            <a className="flex flex-row" rel="noopener noreferrer" href="https://www.linkedin.com/in/sachin-parihar-008180264/">
            <Linkedin className="mr-1"/>LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
