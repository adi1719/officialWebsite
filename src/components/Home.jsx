import React, { useEffect, useState } from "react";
import backVideo from "../assets/home_page__video.mp4";
import Carousel from "./UI/Carousel";
import Loading from "./Loading";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://current-affairs-api.p.rapidapi.com/current-affairs?country=in";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "7e56c256e2mshe9cf5df927f18aap15112ejsn58f3616cca84",
          "X-RapidAPI-Host": "current-affairs-api.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const filteredValue = result.current_affairs.filter((item) => {
          return item.author && item.urlToImage;
        });
        console.log(filteredValue);
        setData(filteredValue);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return load ? (
    <Loading />
  ) : (
    <div className="hero min-h-screen">
      <div
        className="relative flex h-screen  
        flex-col items-center justify-center overflow-hidden font-inter text-white"
      >
        <video
          src={backVideo}
          autoPlay="{true}"
          loop
          muted
          className="absolute min-h-full  
            w-auto min-w-full max-w-none"
        ></video>
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-tr from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-tl from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-br from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-0 right-0 h-full w-full bg-gradient-to-bl from-black via-transparent to-transparent opacity-80"></div>

        <div className="hero-overlay z-20 m-4 bg-opacity-60 text-center text-2xl font-medium tracking-wide ">
          A NITA Club
        </div>
        <div className="hero-content text-neutral-content z-20 text-center">
          <div className="mx-auto my-auto max-w-lg ">
            <h1 className="mb-5 text-5xl font-bold">Civil Services Society</h1>
            <p className="mb-5 px-4">
              Ready to embark on your journey to becoming a future leader? Take
              the first step and join the CSS today!
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full flex flex-col items-center justify-center px-8 py-16 sm:p-24 text-center text-white"
        style={{ background: "#000" }}
      >
        <h4 className="text-3xl font-bold sm:text-5xl">#OurMotto</h4>
        <p className="container lg:w-3/4 text-sm sm:text-lg text-justify font-inter pt-3 sm:pt-6 sm:leading-7">
          The CSS Club is dedicated to supporting civil service aspirants by
          offering a platform for engaging discussions and seeking advice on
          various subjects related to civil examinations. Our mission includes
          creating a centralized repository of study materials, book
          recommendations, and online resources crucial for UPSC preparation. In
          addition to providing essential study materials, we organize guest
          lectures and workshops conducted by experienced professionals and
          Civil Service exam toppers. Our aim is to share effective preparation
          tips, exam strategies, and insights to empower our members. We foster
          a collaborative environment where members actively exchange
          information about the latest updates, changes in the UPSC examination
          pattern, and relevant news to ensure everyone stays well-informed. At
          the heart of the CSS Club's theme is the commitment to unveil the
          potential of hidden aspirants, providing them with opportunities to
          contribute meaningfully to the nation's progress.
        </p>
      </div>

      <section className="hero flex h-[750px] overflow-hidden items-center justify-center bg-white">
        <div className="container text-xl text-orange-700 ">
          <Carousel value={data} />
        </div>
      </section>
    </div>
  );
}

export default Home;
