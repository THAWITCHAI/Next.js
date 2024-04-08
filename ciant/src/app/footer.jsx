import React from "react";
function Footer() {
  return (
    <div>
      <div className="footer">
        <ul>
          <li>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 
            font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent 
            rounded"
            >
              <a
                target="_blank"
                href="https://facebook.com/UbonRatchathaniRajabhatUniversity"
              >
                Facebook
              </a>
            </button>
          </li>
          <li>
            <button
              className="bg-transparent hover:bg-pink-500 text-pink-700 
            font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent 
            rounded"
            >
              <a target="_blank" href="https://www.ubru.ac.th/">
                WEB
              </a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
