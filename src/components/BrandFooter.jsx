import { Code2 } from 'lucide-react';

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="w-4 h-4"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const BrandFooter = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white/80 backdrop-blur-md border-t border-gray-100/50 py-4 px-6 pb-safe-bottom">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="text-primary w-5 h-5" />
          <div className="flex items-center gap-1">
            <span className="font-mono font-bold text-lg">
              <span className="text-gray-600">&lt;</span>
              <span className="text-primary">CodeLumus</span>
              <span className="text-gray-600">/&gt;</span>
            </span>
            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full font-medium text-gray-600">dev</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-sm text-gray-500 font-mono">
            /* crafted with ☕️ */
          </span>
          <a
            href="https://x.com/codelumus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors rounded-full px-3 py-1.5 hover:bg-gray-100"
          >
            <XIcon />
            <span className="hidden sm:inline text-sm font-medium">@codelumus</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default BrandFooter; 