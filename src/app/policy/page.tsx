export default function PolicyPage() {
  return (
    <main className="pt-30 max-w-3xl mx-auto py-12 px-6 text-white text-left">
      <h1 className="text-5xl font-bold mb-10 leading-tight">
        Video Usage Policy
      </h1>

      <section className="space-y-8 leading-relaxed text-lg">
        <p>
          By using our platform to download videos, you acknowledge and agree to
          the following terms and conditions regarding how the downloaded content
          may be used.
        </p>

        <p>
          All downloaded videos are provided strictly for{" "}
          <span className="font-semibold">personal, non-commercial use</span>. This
          means you may store them locally, view them offline, and share them
          privately with friends or family, as long as there is no financial gain
          involved.
        </p>

        <p>
          You may <span className="font-semibold">not</span> upload, share, or
          distribute downloaded videos on any platform that involves monetization —
          including, but not limited to, YouTube, Facebook, Instagram, TikTok, or
          other social media channels — unless you have obtained{" "}
          <span className="font-semibold">explicit written permission</span> from
          the original creator.
        </p>

        <p>
          For any commercial or public use of downloaded content, you must contact
          the video creator directly to request permission. Commercial use includes
          any scenario where the video is part of promotional material,
          advertisements, public broadcasts, or paid events.
        </p>

        <p>
          Failure to comply with these terms may lead to account suspension,
          removal of access to our services, and potential legal action. If you are
          unsure whether your intended use is allowed, we strongly recommend
          reaching out to the creator for clarification before proceeding.
        </p>
      </section>
    </main>
  );
}
