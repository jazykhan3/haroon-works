import logo from "../../../assets/icons/Logo.svg";
function Footer(props) {
  return (
    <footer className="bg-white py-8 px-4 border-t border-gray-100 font-labil-grotesk">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Orizn Logo" className="w-auto h-8" />
            </div>
            <p className="text-sm text-gray-500">
              2025 © Orizn AI, All rights Reserved
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-gray-500 tracking-wide">
                Quick Links
              </h3>
              <div className="flex flex-col gap-2 items-start">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  About
                </a>
                <a
                  href="#work"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Work
                </a>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Services
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-gray-500 tracking-wide">
                Connect with us
              </h3>
              <div className="flex flex-col gap-2 items-start">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
                >
                  X<span className="text-xs">↗</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
                >
                  Linkedin
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 items-start">
              <h3 className="text-sm font-medium text-gray-500 tracking-wide">
                Others
              </h3>
              <div className="flex flex-col gap-2 items-start">
                <a
                  href="#terms"
                  className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
                >
                  Terms & Conditions
                  <span className="text-xs">↗</span>
                </a>
                <a
                  href="#privacy"
                  className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
                >
                  Privacy Policy
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
