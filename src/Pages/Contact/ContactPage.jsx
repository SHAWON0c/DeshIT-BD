import { Phone, Mail, Facebook, Linkedin, FolderPen } from "lucide-react";
import img from '../../assets/Images/Contact/img.png';
import TypingEffect from "../../Components/TypingEffect/TypingEffect";
import SmoothLetterFade from "../../Components/TypingEffect/SmoothLetterFade";
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F8] relative overflow-hidden">
      {/* Background Animated Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* logo bottom right side */}
        <div
          className="absolute top-72 right-72 bg-[#F588771C] rounded-full 0"
          style={{
            width: "72px",
            height: "72px",
            animation: "smallBounce 2s ease-in-out 2.5s infinite",
          }}
        ></div>

        {/* logo bottom side */}
        <div
          className="absolute  w-10 h-10 bg-[#F588771C] rounded-full "
          style={{
            animation: "slideIn45 1s ease-out forwards"
          }}
        />

        <div
          className="absolute top-80 right-3/8 w-10 h-10 bg-[#F588771C] rounded-full "
          style={{
            animation: "wiggleDiagonal 1.5s ease-in-out infinite",
          }}
        ></div>

        {/* left */}
        <div
          className="absolute top-20 left-52 w-20 h-20 bg-[#F588771C] rounded-full  animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* logo up side  */}
        <div
          className="absolute top-44 left-4/7 w-18 h-18 bg-[#F588771C] rounded-full "
          style={{
            width: "80px",
            height: "80px",
            animation: "scaleUp 1s ease-in-out infinite alternate",
          }}
        ></div>

        {/* top */}
        <div
          className="absolute -top-52 right-64 w-64 h-64 bg-[#F588771C] rounded-full "
          style={{ animationDelay: "3.5s" }}
        ></div>
      </div>

      {/* Contact Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text container */}
          <div className="animate-slide-in-left flex flex-col justify-center w-full h-full items-center text-center lg:items-start lg:text-left">
            <SmoothLetterFade 
            text="Get in touch with Us"

            tag="h1" 
             // lower = faster (good range: 20–60 for smoothness)

            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              {/* Get in touch with Us */}
            </SmoothLetterFade>
            <p className="text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed max-w-xl">
              Why I say old chap that is spiffing, young delinquent in my flat bloke buggered what a plonker.
            </p>
          </div>

          {/* Image container */}
          <div className="animate-slide-in-right flex justify-center lg:justify-end">
            <img
              src={img}
              alt="Contact illustration"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 px-4 sm:px-10 bg-white relative z-10">
        <div className="w-full mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-slide-in-left space-y-8 font-poppins lg:ml-72">
            <div>
              <h3 className="text-[20px] font-semibold text-gray-900 mb-4">Our Location</h3>
              <p className="text-gray-600 text-2xl">
                D/36, Block-E Lalmatiya, Dhaka
                <br />
                Dhaka 1207, Bangladesh
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Say Hello</h3>
              <div className="space-y-3">
                <div className="flex items-center text-red-400 text-2xl">
                  <Phone className="w-5 h-5 mr-3" /> +880 181 332 0587
                </div>
                <div className="flex items-center text-gray-600 text-2xl">
                  <Mail className="w-5 h-5 mr-3" /> info@deshit-bd.com
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6 animate-slide-in-right">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input placeholder="Name" className="w-full p-4 border bg-[#FDF8F8] border-gray-300 rounded-3xl" />
                <input placeholder="Email" type="email" className="w-full p-3 bg-[#FDF8F8] border border-gray-300 rounded-3xl" />
              </div>
              <input placeholder="Subject" className="w-full p-4 border bg-[#FDF8F8] border-gray-300 rounded-3xl" />
              <textarea
                placeholder="Your Comment"
                rows={6}
                className="w-full p-4 border border-gray-300 bg-[#FDF8F8] rounded-3xl resize-none"
              />
              <button
                type="submit"
                className="bg-[#FA7B70] text-white px-8 py-3 rounded-2xl button-bottom-shadow hover:translate-y-[-2px] transition-all duration-300"
              >
                Send Your Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
