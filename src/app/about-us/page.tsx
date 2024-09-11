import Image from "next/image";
import React from "react";

const AboutUsPage = () => {
  const content = [
    {
      id: 1,
      image: "/about-us/IMG_6002 1.png",
      text: "Goenakan Indonesia is a brand dedicated to making a positive impact on the environment through its eco-friendly products. With a strong commitment to environmental awareness, we have chosen to focus on offering reusable solutions that reduce waste and promote sustainability. Our extensive experience in supplying reusable and eco bottles to hotels reflects our dedication to providing eco-conscious options to businesses in the hospitality industry.",
    },
    {
      id: 2,
      image: "/about-us/IMG_6002 1.png",
      text: "What sets us apart is our flexibility in catering to the unique needs of our customers. We gladly accept custom orders, tailoring our products to meet specific requirements. Not only supplying the hotel amenities and promotional goods, we also do the digital printing. At our business, digital printing is not just a service; it's our passion and expertise. While engrave, UV print, and silk print have been our most sought-after services, we refuse to limit ourselves to just these three. We are committed to continuous growth and expansion to meet all your digital printing needs.",
    },
    {
      id: 1,
      image: "/about-us/IMG_6023 1.png",
      text: " Our aim is simple: to be your comprehensive digital printing solution. We have the technology, skills, and dedication to bring your vision to life. Your satisfaction is our priority, and we're here to ensure that every print is a masterpiece. Whether you're searching for digital printing services, eco-friendly products, or any promotional goods, included but not limited to hotel supplies, Goenakan Indonesia is your trusted partner for environmentally responsible solutions that leave a lasting impression.",
    },
  ];

  return (
    <main className="bg-[#e1dad6]">
      <div className="mx-auto py-20 w-full max-w-7xl space-y-10">
        <div className="flex justify-center">
          <h1 className="font-serif md:text-5xl text-3xl">About Us</h1>
        </div>

        <div className="space-y-16">
          {content.map((content, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-16"
            >
              {index % 2 === 0 ? (
                <div className="flex items-center flex-col  md:flex-row justify-center gap-24">
                  <div className="relative h-[25rem] w-[20rem]">
                    <Image
                      src={content.image}
                      alt="image"
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div className="w-[21rem]">
                    <p>{content.text}</p>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="flex items-center flex-col-reverse md:flex-row justify-center gap-24"
                >
                  <div className="w-[21rem]">
                    <p>{content.text}</p>
                  </div>
                  <div className="relative h-[25rem] w-[20rem]">
                    <Image
                      src={content.image}
                      alt="image"
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutUsPage;
