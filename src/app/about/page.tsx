export default function AboutPage() {
  return (
    <main className="pt-25 max-w-3xl mx-auto py-12 px-6 text-white text-left">
      <h1 className="text-5xl font-bold mb-10 leading-tight">
        About Us
      </h1>

      <section className="space-y-8 leading-relaxed text-lg">
        {/* Creator Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">The Creator</h2>
          <p>
            Hi, I’m <span className="font-semibold">Kaming</span>, the creator
            of this platform. I built this site to make downloading and enjoying your
            favorite videos simple, safe, and accessible for everyone. With a passion
            for technology and user-friendly design, I aim to create tools that are
            both powerful and easy to use.
          </p>
        </div>

        {/* Mission Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p>
            Our mission is to empower users by providing a reliable platform for
            downloading videos quickly and securely, while respecting the rights of
            creators. We believe in responsible content usage, and we encourage all
            users to follow fair use principles and copyright laws.
          </p>
        </div>

        {/* How to Use Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">How to Use</h2>
          <p>
            Using our platform is simple:
          </p>
          <ol className="list-decimal pl-6 mt-4 space-y-2">
            <li>Share the video and copy the url.</li>
            <li>Paste it into the search box on our download page.</li>
            <li>Click “Download” and enjoy your content offline.</li>
          </ol>
          <p className="mt-4">
            That’s it! No unnecessary steps or complicated setups — just fast and
            straightforward downloading.
          </p>
        </div>
      </section>
    </main>
  );
}