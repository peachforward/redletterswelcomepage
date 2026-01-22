"use client";
import { Clock } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-indigo-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20 lg:py-32">
          <div className="text-center space-y-12 animate-fade-up">
            <div className="space-y-6">
              {/* Badge */}
              {/* <div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
                              bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 
                              shadow-lg shadow-red-500/30"
              >
                <Clock className="h-5 w-5 text-white" />
                <span className="font-semibold text-white">COMING SOON</span>
              </div> */}

              {/* Heading */}
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto">
                The Best Church Jobs
                <span className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
                  <br />is coming back{" "}
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                RedLetterJobs is re-launching soon — bigger and better than ever!
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdsvMXLPUVeXtYwKj61KN7ep6Jzv4Ptenk4e_bbuxOovvRliA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className=" capitalize inline-block px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 
                           text-white font-semibold shadow-lg shadow-red-500/30 hover:opacity-90 transition"
              >
                Upload your church resume{" "}
              </a>
            </div>

            {/* <CountdownTimer /> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-700">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 RedLetterJobs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
