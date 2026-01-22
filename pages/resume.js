import Link from "next/link";
import Head from "next/head";

export default function Resume() {
  const pdfPath = "/Pramukh_Resume_DE_Professional.pdf";

  return (
    <>
      <Head>
        <title>Resume - Pramukh Chandra Molugu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-[#0a0e1a] text-white px-6 py-10">
        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");
          body {
            font-family: "Inter", sans-serif;
          }
          .card {
            background: rgba(26, 31, 53, 0.6);
            border: 1px solid rgba(59, 130, 246, 0.25);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
            border-radius: 18px;
            overflow: hidden;
          }
          .btn {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            padding: 12px 18px;
            border-radius: 999px;
            font-weight: 600;
            color: white;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          .btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 10px 30px rgba(59, 130, 246, 0.35);
          }
          .subtle {
            color: #9ca3af;
          }
        `}</style>

        <div className="max-w-6xl mx-auto">
          {/* Back link */}
<Link href="/" className="subtle hover:text-white transition-colors mb-4 inline-block">
  ← Back to Home
</Link>

<h1 className="text-5xl font-bold mb-6">Resume</h1>

{/* Download button - below title, left aligned */}
<a className="btn mb-8 inline-flex" href={pdfPath} download>
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M7 10l5 5 5-5" />
    <path d="M12 15V3" />
  </svg>
  Download Resume
</a>
          {/* PDF Viewer */}
          <div className="card">
            <div className="w-full" style={{ height: "85vh" }}>
              <iframe
                src={pdfPath}
                title="Resume PDF"
                width="100%"
                height="100%"
                style={{ border: "none" }}
              />
            </div>
          </div>

          <p className="subtle mt-4 text-sm">
            If the PDF doesn’t render in your browser, use the download button.
          </p>
        </div>
      </div>
    </>
  );
}
