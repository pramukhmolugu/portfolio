import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume - Pramukh Chandra Molugu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-[#0f172a] text-white">
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
          }

          .back-link {
            color: #60a5fa;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .back-link:hover {
            color: #3b82f6;
          }

          .download-btn {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
          }

          .download-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
          }

          .pdf-container {
            background: #1e293b;
            border-radius: 12px;
            padding: 16px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Back to Home Link */}
          <Link href="/" className="back-link text-lg mb-6 inline-block">
            ← Back to Home
          </Link>

          {/* Page Title */}
          <h1 className="text-5xl font-bold mb-8">Resume</h1>

          {/* Download Button */}
          <a 
            href="/Pramukh_Resume_DE_Professional.pdf" 
            download
            className="download-btn mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>

          {/* PDF Viewer */}
          <div className="pdf-container">
            <iframe
              src="/Pramukh_Resume_DE_Professional.pdf"
              width="100%"
              height="1000px"
              style={{ border: 'none', borderRadius: '8px' }}
              title="Resume PDF"
            />
          </div>
        </div>
      </div>
    </>
  );
}
