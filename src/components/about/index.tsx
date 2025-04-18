/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="sm:px-20 sm:pb-20 px-5 pb-5 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize">
          Web Crafter & Cyber Sentinel
          </h2>
          <p className="font-light text-sm sm:text-md md:text-base">
          My journey blends two worlds: intuitive design and strong security. With a love for UI/UX and a sharp eye for cybersecurity, I specialize in building tech that&apos;s both beautiful and battle-ready. Every project I create is a fusion of design, data, and defense. whether it&apos;s casting QR-based authentication spells, developing IoT-based solutions, or designing smart, user-friendly dashboards. My mission is clear: make the web safer, smarter, and beautifully functional. Let&apos;s connect realms securely.
            
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl">
          UI/UX | Cybersecurity
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
          4+
            <sub className="font-semibold text-base"> Hands-on with real-world projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">Freelance Project
              </p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                Created a smart agriculture solution (Agro Eye) using 
                  <b className="font-extrabold"> Raspberry Pi, sensors</b> and
                  <b className="font-extrabold"> TensorFlow</b>
                </li>
                <li>
                  Implemented my knowledge in<b className="font-extrabold">Python</b>{" "}
                  and
                  <b className="font-extrabold"> IoT architecture, ML Models</b> to predict crop requirements.
                </li>
                <li>
                This is crucial for crops like<b className="font-extrabold">Ginseng </b> , which require precise conditions, especially for use in sectors like the<b className="font-extrabold"> medical industry.</b> 
                </li>
              </ul>
              <p className="float-end font-semibold text-xs">
                July 2024 - November 2024
              </p>
            </div>
          
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://drive.google.com/file/d/1Mp6GweKPU_mLUGyr8VNP931rCxEV1vnC/view"
            target="_blank"
          >
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">
              Salesforce – Virtual Internship
                <span className="font-semibold text-base">Salesforce Developer</span>
              </p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                Learned CRM design, built scalable solutions on the Salesforce platform
                  
                </li>
                <li>
                Practiced <b className="font-extrabold"> problem-solving</b> and
                  <b className="font-extrabold"> UI development</b> for real-wrold bussiness cases.
                </li>
               
              </ul>
              <p className="float-end font-semibold text-xs">
                November 2024 - January 2025
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">
                
                
              </p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                
              </ul>  
            </div>
          
        </ItemLayout>

        

        

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=ai,bootstrap,css,dart,express,figma,firebase,flutter,git,github,githubactions,html,js,jquery,linux,kali,solidity,mongodb,netlify,nodejs,python,react,replit,tailwind,threejs,ts,vercel,vite,vscode`}
            alt="AmitAmrutiya"
            loading="lazy"
          />
        </ItemLayout>


        
      </div>
    </section>
  );
};

export default AboutDetails;