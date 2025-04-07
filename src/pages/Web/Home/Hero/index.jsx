import { Container } from "@/components";
import React from "react";

export const Hero = () => {
  return (
    <>
      <div className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to Our Boilerplate React App
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              This is a sample page using our custom Layout component with
              Header and Footer.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};
