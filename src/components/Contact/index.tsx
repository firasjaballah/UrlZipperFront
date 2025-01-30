"use client";
import NewsLatterBox from "./NewsLatterBox";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
const Contact = () => {
  const [longUrl, setLongUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [expiresIn, setExpiresIn] = useState(0);
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  // Store API response
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShortenedUrl(""); // Reset previous result
    setError(""); // Reset previous error

    try {
      const response = await axios.post("https://urlzipper.onrender.com/shorten", {
        longUrl,
        customAlias,
        expiresIn,
      });
      console.log("QR",response.data.qrCode)
      setShortenedUrl(response.data.shortUrl); 
      setQrCode(response.data.qrCode)
    } catch (err: any) {
      console.log({ err });
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <section id="contact" className="md:py-30 overflow-hidden py-16 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Need a simple, custom short URL that expires? We’ve got you covered!
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                {/* Our support team will get back to you ASAP via email. */}
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 ">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your long url
                      </label>
                      <input
                        type="text"
                        required
                        value={longUrl}
                        onChange={(e) => setLongUrl(e.target.value)}
                        placeholder="Enter long URL"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="text"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your custom alias
                      </label>
                      <input
                      required
                        type="text"
                        value={customAlias}
                        onChange={(e) => setCustomAlias(e.target.value)}
                        placeholder="Enter alias"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="number"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Expires in (seconds)
                      </label>
                      <input
                      required={true}
                        type="number"
                        onChange={(e) => setExpiresIn(Number(e.target.value))}
                        placeholder="Enter expiration time"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Get your shortenedUrl
                    </button>
                  </div>
                  <div className="mt-4 w-full px-4">
                    {shortenedUrl && (
                      <p className="text-green-600">
                        Shortened URL:{" "}
                        <a
                          href={shortenedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          {shortenedUrl}
                        </a>
                      </p>
                    )}
                    {qrCode && (
                      <div className="mt-4">
                        <Image 
                          src={qrCode}
                          alt="QR Code"
                          className="mt-2 h-32 w-32"
                          width={128}
                          height={128}
                        />
                      </div>
                    
                    )}
                    {error && <p className="text-red-600">{error}</p>}
                  </div>
                  {/* <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
