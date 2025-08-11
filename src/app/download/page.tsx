import Search from "./components/Search";

export default function DownloadPage() {
  return (
    <div className="pt-25">
      <h1 className="text-white text-3xl sm:text-4xl font-bold mb-8 [letter-spacing:-2px] leading-tight text-center">
        Download your favorite music<br />
        fast, easy, without limits
      </h1>

      <Search/>
    </div>
  );
}