import { BPButton, BPCheckbox, BPInput, BPLabel } from "@/components";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password, rememberMe });
  };

  return (
    <div className="w-full md:w-1/2 flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <h3 className="font-bold mb-6 text-center">Welcome Back</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <BPLabel htmlFor="email">Email</BPLabel>
            <BPInput
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <BPLabel htmlFor="password">Password</BPLabel>
            <BPInput
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <BPCheckbox
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe((prev) => !prev)}
            />

            <BPLabel
              htmlFor="rememberMe"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </BPLabel>
          </div>
          <BPButton type="submit" className="w-full">
            Log In
          </BPButton>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};
