import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Bharathi_Thanikonda_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-surface-variant border-b border-primary/20 py-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Button>
              </Link>
              <div className="h-6 w-px bg-primary/20"></div>
              <h1 className="font-heading text-2xl font-bold gradient-text">Resume</h1>
            </div>
            <Button 
              onClick={handleDownload}
              className="gradient-bg text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      {/* PDF Viewer */}
      <main className="flex-1">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="/resume.pdf"
                className="w-full h-[calc(100vh-200px)] min-h-[600px]"
                title="Bharathi Thanikonda Resume"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
