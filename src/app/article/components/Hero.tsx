import React from "react";

const Hero = () => {
  return (
    <section className="h-screen bg-slate-600">
      <div className="relative top-72 mx-auto flex h-fit w-full max-w-5xl flex-col">
        <div className="flex w-full items-center justify-center">
          <h1 className="font-serif text-4xl font-bold text-white">Article</h1>
          <span className="border-1 w-full border border-white"></span>
        </div>
        <p>Where you learn more about how Krona. can grow your business</p>
      </div>
    </section>
  );
};

export default Hero;
