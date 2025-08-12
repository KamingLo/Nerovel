import Link from 'next/link';

export default function Home() {

  return (
    <div className="">
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 [letter-spacing:-2px] leading-tight">
        Download your favorite music<br />
        fast, easy, without limits
      </h1>

    <Link
        href="download"
        className="rounded-full px-6 py-2 bg-white text-black m-2 
                   transition-all duration-300 ease-out 
                   hover:bg-white/70 hover:scale-105 hover:shadow-lg"
      >
        Get Started
      </Link>

      <Link
        href="about"
        className="rounded-full px-6 py-2 bg-transparent border border-white/30 text-white/70 m-2 
                   transition-all duration-300 ease-out 
                   hover:bg-white/20 hover:text-white hover:scale-105 hover:shadow-lg"
      >
        Learn More
      </Link>
    </div>
  );
}
