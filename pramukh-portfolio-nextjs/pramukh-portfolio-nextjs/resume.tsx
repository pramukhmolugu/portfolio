// pages/resume.js
import Link from "next/link";
import { useRouter } from "next/router";

export default function ResumePage() {
  const router = useRouter();

  // IMPORTANT:
  // If you deploy with basePath (GitHub Pages), this fixes broken PDF URLs.
  const pdfUrl = `${router.basePath}/Pramukh_Resume_DE_Professional.pdf`;

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-sm text-gray-300 hover:text-white">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mt-6 mb-6">Resume</h1>

        <a
          href={pdfUrl}
          download
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition"
        >
          Download Resume
        </a>

        <div className="mt-8 rounded-xl overflow-hidden border border-white/10 bg-black/30">
          {/* Best embed method: iframe */}
          <iframe
            src={pdfUrl}
            title="Resume PDF"
            className="w-full"
            style={{ height: "85vh" }}
          />
        </div>
      </div>
    </div>
  );
}
