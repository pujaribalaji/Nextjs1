import React from "react";
import Navbar from "./components/navbar";
import Image from "next/image";
import logo from "./components/asserts/genmedia_logo-removebg-preview.png";
import image from "./components/asserts/image.svg";
import audio from "./components/asserts/audio.svg";
import video from "./components/asserts/video.svg";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <header className="bg-gray-300 flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-col justify-center items-center h-full">
          <Image
            style={{ marginTop: -40 }}
            src={logo}
            alt="logo"
            width={400}
            height={400}
          ></Image>
          <p className="my-0 text-gray-500" style={{ marginTop: -110 }}>
            Generate video,audio and images using our Generative AI.
          </p>
          <div className="bg-white rounded-lg p-2 text-center my-8">
            <a href="/about">About us</a>
          </div>
          <div>
            <h2 className="text-4xl my-12 font-bold">
              Ready to create mind-bending content?
            </h2>
            <p
              className="text-gray-500 text-center"
              style={{ marginTop: "-40px" }}
            >
              Our AI is eager to please.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", marginTop: "70px" }}>
          <div
            className="drop-shadow-2xl"
            style={{
              backgroundColor: "white",
              width: "300px",
              height: "450px",
              borderRadius: "30px",
              marginLeft: "100px",
            }}
          >
            <div className="flex flex-col justify-center items-center ">
              <h5 className="my-5 font-bold">Image Generater</h5>
              <Image
                className="my-0"
                src={image}
                alt="image"
                width={250}
                height={250}
              ></Image>
              <p className="text-start mx-2 my-3">
                Transform Your text prompts into <br></br>stunning visuals with
                our AI- <br></br>powered image generator.From <br></br>ideas to
                masterpieces,unlock the <br></br> world of visual storytelling.
              </p>
              <a href="/image" className="my-3 underline">
                Generate Now
              </a>
            </div>
          </div>
          <div
            className="drop-shadow-2xl"
            style={{
              backgroundColor: "white",
              width: "300px",
              height: "450px",
              borderRadius: "30px",
              marginLeft: "70px",
            }}
          >
            <div className="flex flex-col justify-center items-center ">
              <h5 className="my-5 font-bold">Image Generater</h5>
              <Image
                className="my-0"
                src={audio}
                alt="image"
                width={250}
                height={250}
              ></Image>
              <p className="text-start mx-3 my-3">
                Unleash the power of your words <br /> with your audio
                generator.Create <br /> soundscapes,music,and <br /> voiceovers
                that bring your ideas to <br /> life,one sound at a time
              </p>
              <a href="/audio" className="my-3 underline">
                Generate Now
              </a>
            </div>
          </div>
          <div
            className="drop-shadow-2xl"
            style={{
              backgroundColor: "white",
              width: "300px",
              height: "450px",
              borderRadius: "30px",
              marginLeft: "70px",
            }}
          >
            <div className="flex flex-col justify-center items-center ">
              <h5 className="my-5 font-bold">Image Generater</h5>
              <Image
                className="my-0"
                src={video}
                alt="image"
                width={250}
                height={250}
              ></Image>
              <p className="text-start mx-2 my-3">
                Turn Your narratives into cinematic <br />
                expreinces.Our video generator <br /> crafts engaging videos,{" "}
                <br />
                animations and narratives that <br /> captivate your audience.
              </p>
              <a href="/video" className="my-3 underline">
                Generate Now
              </a>
            </div>
          </div>
        </div>
        <div
          className="my-20 flex "
          style={{ backgroundColor: "#91C8E4", width: "auto", height: "450px" }}
        >
          <div className=" flex flex-col">
            <p className="text-5xl font-bold my-20 mx-20">Our Creations</p>
            <p
              className="text-xl text-start text-white mx-20"
              style={{ marginTop: "-30px" }}
            >
              We've helped individuals and companies <br /> alike to create
              unforgettable multimedia <br /> content.Feast your eyes on these{" "}
              <br /> examples!
            </p>
          </div>
          <div className=" flex flex-col">
            <p
              className="text-xl flex text-white"
              style={{ marginLeft: "250px", marginTop: "120px" }}
            >
              Artifical Symphony
            </p>
            <p
              className="flex flex-col text-white text-xl"
              style={{ marginLeft: "600px", marginTop: "-20px" }}
            >
              2022
            </p>
            <hr
              style={{ marginLeft: "250px", marginTop: "10px", width: "400px" }}
            />
            <p
              className="text-xl flex text-white"
              style={{ marginLeft: "250px", marginTop: "10px" }}
            >
              The Infinite Loop
            </p>
            <p
              className="flex flex-col text-white text-xl"
              style={{ marginLeft: "600px", marginTop: "-20px" }}
            >
              2021
            </p>
            <hr
              style={{ marginLeft: "250px", marginTop: "10px", width: "400px" }}
            />
            <p
              className="text-xl flex text-white"
              style={{ marginLeft: "250px", marginTop: "10px" }}
            >
              Pure Imagination
            </p>
            <p
              className="flex flex-col text-white text-xl"
              style={{ marginLeft: "600px", marginTop: "-20px" }}
            >
              2020
            </p>
            <hr
              style={{ marginLeft: "250px", marginTop: "10px", width: "400px" }}
            />
          </div>
        </div>
        <Footer />
      </header>
    </>
  );
}
