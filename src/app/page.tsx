import Link from 'next/link';

export default function Home() {

  return (
    <div className="">
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 [letter-spacing:-2px] leading-tight">
        Download your favorite music<br />
        fast, easy, without limits
      </h1>

    <Link className="rounded-full px-6 py-2 bg-white text-black m-2" href="download">Get Started</Link>
    <Link className="rounded-full px-6 py-2 bg-black/1 border border-white/30 text-white/30 m-2" href="about">Learn More</Link>

    </div>
  );
}
