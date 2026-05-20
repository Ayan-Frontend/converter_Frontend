import Navbar from "../components/Navbar";
import UploadZone from "../components/UploadZone";

export default function Converter() {
  return (
    <div>
      <Navbar />

      <div className="max-w-5xl mx-auto py-20 px-6">
        <UploadZone />
      </div>
    </div>
  );
}
