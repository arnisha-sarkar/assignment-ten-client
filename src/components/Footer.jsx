import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1E3A8A] text-gray-200 p-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">
              {/* {siteName.slice(0, 2)} */}
            </div>
            <div>
              {/* <div className="font-semibold">{siteName}</div> */}
              <div className="text-sm text-gray-400">
                AI-generated mystic tales
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div>
              <h5 className="font-medium">Company</h5>
              <ul className="text-sm">
                <li>
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium">Legal</h5>
              <ul className="text-sm">
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:underline">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h5 className="font-medium">Get in touch</h5>
            <p className="text-sm">hello@example.com</p>
            <div className="flex gap-3 mt-2">
              <a href="#" aria-label="Facebook">
                FB
              </a>
              <a href="#" aria-label="Twitter">
                TW
              </a>
              <a href="#" aria-label="Instagram">
                IG
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-6">
          {/* &copy; {year} {siteName}. All rights reserved. */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
