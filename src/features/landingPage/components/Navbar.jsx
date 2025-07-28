import { useState } from "react";
import { Button } from "antd";
import logo from "../../../assets/icons/Logo.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 p-2 font-labil-grotesk font-normal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={logo} alt="Orizn" className="h-8 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-[#f57900] font-medium transition-colors cursor-pointer bg-transparent border-none"
            >
              How it works?
            </button>
            <a
              href="#"
              className="text-gray-700 hover:text-[#f57900] font-medium transition-colors"
            >
              Other AI Tools
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              type="ghost"
              className="border border-gray-300 text-gray-700 hover:text-[#f57900] font-medium hover:bg-white px-6 py-6 rounded-xl font-labil-grotesk"
              onClick={() => {
                navigate("/onboarding");
              }}
            >
              Login
            </Button>
            <Button
              type="ghost"
              className="border border-gray-300 text-gray-700 hover:text-white hover:bg-black font-medium px-6 py-6 rounded-xl bg-black text-white font-labil-grotesk"
              onClick={() => navigate("/onboarding")}
            >
              Start for free
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-[#f57900] p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <div className="space-y-3">
                <button
                  onClick={() => {
                    scrollToSection('how-it-works');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-gray-700 hover:text-[#f57900] font-medium transition-colors py-2 cursor-pointer bg-transparent border-none text-left w-full"
                >
                  How it works?
                </button>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-[#f57900] font-medium transition-colors py-2"
                >
                  Other AI Tools
                </a>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                <Button
                  type="ghost"
                  className="w-full border border-gray-300 text-gray-700 hover:text-[#f57900] font-medium hover:bg-white py-6 rounded-xl font-labil-grotesk"
                  onClick={() => {
                    navigate("/onboarding");
                  }}
                >
                  Login
                </Button>
                <Button
                  type="ghost"
                  className="w-full border border-gray-300 text-gray-700 hover:text-white hover:bg-black font-medium px-6 py-6 rounded-xl bg-black text-white font-labil-grotesk"
                  onClick={() => navigate("/onboarding")}
                >
                  Start for free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
