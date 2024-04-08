import React from "react";

function Navbar() {
  return (
    <div>
      <div className="nav">
        <div className="logo"><a href="/"><img src="https://new.ubru.ac.th/web/wp-content/uploads/2023/03/logo-Rajabhat-New2048.png" alt="" srcset="" width={64} height={64}/></a></div>
        <div className="title-center">
          <h1>UBRU-SPORT</h1>
        </div>
        <div className="login">
          <button>
            <a href="/login" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Log in</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
