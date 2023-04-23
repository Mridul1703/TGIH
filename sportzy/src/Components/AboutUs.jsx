import aboutUs from "../static/aboutus.png";

function AboutUs() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Welcome to Sportzy, A web based platform which lets you come
            together and enjoy similar interests in sports. Sportzy lets you
            find grounds, list them and match with people of similar interests.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full"
            src= {aboutUs}
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            We are a group of friends who are very passionate and enthusiastic about sports and games. We always wanted to play outdoor games but lack of sporting facilities and people to play with was a major issue. We wanted to create a platform where people can come together and enjoy similar interests in sports. Sportzy lets you find grounds, list them and match with people of similar interests.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
