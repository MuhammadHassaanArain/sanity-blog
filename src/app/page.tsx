import Image from "next/image";
import Link from "next/link";
import Tutorials from "./tutorials/page";
import Testimonials from "./components/Testimonials";
export default function Home() {
  return (
   <div>
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome To Our Tech Blog
            <br className="hidden lg:inline-block" />
            Unique Coder
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <Link href={"/tutorials"}>Tutorials</Link>
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            <Link href={"/blog"}>Blog</Link>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/techblogheroimage.jpg"
            
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  <section>  <Tutorials/></section>
  <section><Testimonials /></section>
   </div>
  );
}
