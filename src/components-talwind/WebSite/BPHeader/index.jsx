import { BPButton, Container } from "@/components";
import { navigation } from "@/constants/data";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const BPHeader = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <Container>
        <nav className="py-4 sm:py-6 lg:py-8" aria-label="Top">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-gray-900">
                Logo
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              {navigation?.map((item) => (
                <Link
                  key={item?.name}
                  to={item?.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  {item?.name}
                </Link>
              ))}
              <BPButton onClick={() => navigate("/login")}> Login</BPButton>
            </div>
            <div className="flex md:hidden">
              <BPButton
                variant="ghost"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? "close" : "open"}
              </BPButton>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden" id="mobile-menu">
              <div className="space-y-1 pb-3 pt-2">
                {navigation?.map((item) => (
                  <Link
                    key={item?.name}
                    to={item?.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item?.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-gray-200 pb-3 pt-4">
                <BPButton className="w-full">Sign In</BPButton>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};
