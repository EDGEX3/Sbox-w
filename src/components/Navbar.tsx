import { IconChevronDown } from "@tabler/icons-react";
import { Link, Route, Routes } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" h-14 flex items-center justify-between">
      <Link to="/">
      <img src="../assets/sbox 1.svg" height={36} width={36}></img>
      </Link>
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
                to="/auth/signup"
                className="w-20 h-8 bg-neutral-50 bg-opacity-5 rounded-2xl border border-zinc-300 border-opacity-40 justify-center items-center inline-flex"
              >
                <div className="text-teal-400 text-sm font-medium font-['JetBrains_Mono'] ">
                  Signup
                </div>
              </Link>
            </>
          }
        />
        <Route path="/auth/signup" element={
          <div className="AlreadyHaveAnAccountSignIn">
            <span className="text-gray-600 text-base font-normal tracking-tight">Already have an account?</span>
            <Link to="/auth/login" className="text-white text-base font-normal tracking-tight"> Log in →</Link>
          </div>}
        />
        <Route path="/auth/login" element={
          <div className="AlreadyHaveAnAccountSignIn">
            <span className="text-gray-600 text-base font-normal tracking-tight">I want to join!</span>
            <Link to="/auth/signup" className="text-white text-base font-normal tracking-tight"> Sign up →</Link>
          </div>}
        />
      </Routes>
    </div>
  );
}
