import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function NotFound() {
  return (
    <>
      <div className="fixed w-full">
        <Navbar />
      </div>
      <div className="h-screen flex justify-center items-center">
        <h1>404 Page Not Found</h1>
      </div>
    </>
  );
}
