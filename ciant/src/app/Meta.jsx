"use client";
import Link from "next/link";
import { useState } from "react";

function Meta() {
  const [name, setName] = useState("");
  return (
    <main>
      <div className="container mx-auto h-80 w-3/6">
        <div className="title-card font-mono">
          <h1 className="text-center">Welcome to UBRU Sport</h1>
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi hic,
            eveniet molestiae recusandae, veritatis temporibus, veniam iusto
            quisquam laudantium maiores laborum similique. Fuga accusantium
            expedita voluptatum officia deleniti nulla ea.
          </p>
        </div>
      </div>
      {/* <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <Link href="/register">Register</Link>
      </button> */}
    </main>
  );
}

export default Meta;
