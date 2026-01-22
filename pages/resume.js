import Link from "next/link";
import { useRouter } from "next/router";

export default function Resume() {
  const router = useRouter();

  // Works on BOTH Vercel and GitHub Pages (if you ever add a basePath later)
  const pdfUrl = `${router.basePath}/Pramukh_Resume_DE_Professional.pdf`;

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back to Home */}
        <Link href="/" className="text-blue-300 hover:text-blue-200 inline-block">
          ← Back to Home
        </Link>

        {/* Page Title */}
        <h1 className="text-5xl font-bold mt-6 mb-8">Resume</h1>

        {/* Download Button */}
        <a
          href={pdfUrl}
          download
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Download Resume
        </a>

        {/* PDF Viewer */}
        <div className="mt-8 rounded-xl overflow-hidden border border-white/10 bg-white shadow-xl">
          <iframe
            src={pdfUrl}
            title="Resume PDF"
            className="w-full"
            style={{ height: "85vh", border: "none" }}
          />
        </div>
      </div>
    </div>
  );
}
