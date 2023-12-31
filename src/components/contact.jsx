import { Mail, Phone , MapPin, Github, Instagram, Linkedin } from "lucide-react"
import "../App.css"

export default function Contact() {
    return(
        <div>
            <section className="bg-black text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1 style={{color:"#4f46e5"}} className=" bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
      Get in Touch with Us
      </h1>
      <p className="mx-auto w-full mt-4 max-w-xl sm:text-xl/relaxed">
      Reach Out for Opportunities, Collaboration, or Just to Say Hello!
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <div className="stacked  bg-gray-900 ">
            <h3 style={{color:"#4f46e5"}} className="text-black font-semibold text-2xl my-2">Contact Me</h3>
            <h3 className="flex flex-row font-semibold my-2 text-white">
              <Phone stroke="#4f46e5" />Call: +91 8668369314 
            </h3>
            <h3 className="flex flex-row font-semibold text-base text-white my-2">
              <Mail stroke="#4f46e5" />Mail:Pariharsachin5002@gmail.com
            </h3>
        </div>
        <div className="stacked  bg-gray-900">
        <h3 style={{color:"#4f46e5"}} className="text-white font-semibold text-2xl my-2">Address:</h3>
        <h3 className=" w-full flex flex-row justify-center font-semibold text-lg text-gray-100 my-3">
              <MapPin stroke="#4f46e5" /> Ram nagar , Rahatani <br />Pune : 411017
            </h3>
        </div>
        <div className="stacked  bg-gray-900">
        <h3 style={{color:"#4f46e5"}} className="text-black  font-semibold text-2xl my-2">Social:</h3>
        <div className="flex flex-row w-full justify-center">
         <a className="mx-5" href="https://github.com/Sheenu-exe"><Github height={60} width={60} stroke="#4f46e5"/></a>
         <a className="mx-5" href="https://www.instagram.com/sachinn.code/"><Instagram height={60} width={60} stroke="#4f46e5"/></a>
         <a className="mx-5" href="https://www.linkedin.com/in/sachin-parihar-008180264/"><Linkedin height={60} width={60} stroke="#4f46e5"/></a>
         <a href=""></a>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}
