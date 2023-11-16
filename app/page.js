import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <div className="container m-auto flex flex-row items-center h-screen justify-center">
        <Navbar />

        <div className="ml-5">
          <h1 className="text-5xl font-bold">
            Click the button to see the
            <span className="text-red-500"> Nav</span>
          </h1>
        </div>
      </div>
    </>
  );
}
