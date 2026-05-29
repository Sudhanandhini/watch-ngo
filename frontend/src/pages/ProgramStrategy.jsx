import pdfUrl from '../assets/images/WATCH-Strategy-2030.pdf?url';

export default function ProgramStrategy() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      {/* Embedded PDF viewer */}
      <div className="border border-gray-300 shadow-lg overflow-hidden" style={{ height: '600px' }}>
        <iframe
          src={pdfUrl}
          title="WATCH Strategy 2030"
          className="w-full h-full"
          type="application/pdf"
        />
      </div>

      {/* Download / view link */}
      <p className="mt-4 text-sm">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal hover:underline"
        >
          Click here to View <span className="font-bold">WATCH Strategy</span>
        </a>
      </p>
    </div>
  );
}
