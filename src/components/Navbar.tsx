import { IconChevronDown } from "@tabler/icons-react";
import { Link, Route, Routes } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" h-14 flex items-center justify-between">
      <img src="../assets/sbox 1.svg" height={36} width={36}></img>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="flex items-center justify-stretch gap-2.5">
                <div className="flex flex-row gap-1">
                  <a>Product</a>
                  <IconChevronDown />
                </div>
                <div className="flex flex-row gap-1">
                  <a>Solution</a>
                  <IconChevronDown />
                </div>
                <div className="flex flex-row gap-1">
                  <a>Template</a>
                  <IconChevronDown />
                </div>
                <div className="flex flex-row gap-1">
                  <a>Pricing</a>
                </div>
              </div>
              <Link
                to="/signup"
                className="w-20 h-8 bg-neutral-50 bg-opacity-5 rounded-2xl border border-zinc-300 border-opacity-40 justify-center items-center inline-flex"
              >
                <div className="text-teal-400 text-sm font-medium font-['JetBrains Mono'] ">
                  Signup
                </div>
              </Link>
            </>
          }
        />
      </Routes>
    </div>
  );
}
