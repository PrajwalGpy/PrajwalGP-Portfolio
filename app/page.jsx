"use client";

import { FaNode, FaReact } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiPostgresql, SiPrisma } from "react-icons/si";
import {
  SiMicrosoftexcel,
  SiPython,
  SiSqlite,
  SiTableau,
  SiPowerbi,
  SiJupyter,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import Image from "next/image";

import Container from "../components/ui/container";
import Card from "../components/card";
import LogoCard from "../components/logo-card";
import Badge from "../components/ui/badge";
import CursorFollow from "../components/cursorFollow";
import Contact from "../components/contact";

const HomePage = () => {
  return (
    <Container>
      <CursorFollow />
      <div className="flex flex-col gap-y-4 md:flex-row max-w-screen-lg mx-auto md:mt-8">
        {/* HERO */}
        <div className="md:w-full text-nowrap md:h-full md:sticky top-8">
          <section id="hero">
            <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6 mt-8">
              <div className="md:hidden absolute top-0 left-0 bg-accent w-56 h-6 rounded-full blur-3xl opacity-65" />
              <h3 className="text-xl font-semibold text-gray-200">
                Hello, I&apos;m 👋
              </h3>
              <h1 className="text-5xl font-bold bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                Prajwal Gopal Poojary
              </h1>
              <p className="text-sm md:text-base text-gray-400">
                A passionate{" "}
                <span className="text-accent">
                  Data Analyst / Business Analyst.
                </span>
              </p>
              <a
                href={`https://drive.google.com/file/d/1Hi60TuT_KzqpxPqFBbmS2g5aY48t7ULy/view?usp=sharing`}
                className="border text-center border-[#1D1D1D] py-4 px-6 rounded-lg w-40 text-sm text-accent/90"
              >
                Download CV
              </a>
            </div>
          </section>
          <div className="hidden md:block">
            <Contact />
          </div>
        </div>
        {/* ABOUT */}
        <div className="md:max-w-lg md:mx-auto md:mt-8">
          <section id="about">
            <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6">
              <h3 className="text-xl font-semibold text-gray-100">About</h3>
              <p className="text-sm md:text-base text-gray-400">
                My fascination with technology began in my childhood, where I
                developed an early interest in analyzing patterns and optimizing
                systems. This curiosity led me to pursue a{" "}
                <span className="font-semibold text-accent">BCA</span> degree,
                where I was introduced to the fundamentals of data and
                programming. During my studies, I encountered{" "}
                <span className="text-accent">
                  challenges in problem-solving
                </span>
                , which motivated me to refine my analytical thinking and
                technical skills.
              </p>
              <p className="text-sm md:text-base text-gray-400">
                Determined to grow, I joined the{" "}
                <span className="font-semibold text-accent">
                  Wipro TalentNext Program
                </span>
                , where I gained valuable insights into structured approaches to
                solving problems and applying technology effectively. This
                experience sparked my passion for{" "}
                <span className="font-semibold text-accent">data analysis</span>{" "}
                and the impact it has on driving informed decisions.
              </p>
              <p className="text-sm md:text-base text-gray-400">
                Today, I am skilled in tools like{" "}
                <span className="font-semibold text-accent">
                  Excel, SQL, Python, and Power BI
                </span>
                , and I enjoy uncovering insights from data to solve real-world
                challenges. My journey has taught me the importance of{" "}
                <span className="font-semibold text-accent">
                  resilience and continuous learning
                </span>
                , which I bring to every project I undertake.
              </p>
              <p className="text-sm md:text-base text-gray-400">
                I am eager to contribute to a forward-thinking team, leveraging
                my analytical skills to extract meaningful insights, enhance
                decision-making, and support business growth.
              </p>
              <p className="text-sm md:text-base text-gray-400">
                When I&apos;m not working with data, you&apos;ll find me
                exploring new technologies, gaming, or watching anime.
              </p>
            </div>
          </section>

          {/* EDUCATION */}
          {/* <section id="education">
          <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6">
            <h3 className="text-xl font-semibold text-gray-300">Education</h3>
            <Card>
              <div className="flex gap-4">
                <p className="text-sm text-gray-400">2020-2022</p>
                <div>
                  <p className="text-sm text-gray-200">BCK</p>
                  <p className="text-sm text-gray-400">asdhjasdkj asdjalksdj</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex gap-4">
                <p className="text-sm text-gray-400">2020-2022</p>
                <div>
                  <p className="text-sm text-gray-200">BCK</p>
                  <p className="text-sm text-gray-400">asdhjasdkj asdjalksdj</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex gap-4">
                <p className="text-sm text-gray-400">2020-2022</p>
                <div>
                  <p className="text-sm text-gray-200">BCK</p>
                  <p className="text-sm text-gray-400">asdhjasdkj asdjalksdj</p>
                </div>
              </div>
            </Card>
          </div>
        </section> */}
          {/* ABOUT */}
          <section id="about">
            <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6">
              <h3 className="text-xl font-semibold text-gray-100">Tools</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <LogoCard>
                  <SiMicrosoftexcel size={25} />
                  <p className="text-sm text-accent/50">Excel</p>
                </LogoCard>
                <LogoCard>
                  <SiPython size={25} />
                  <p className="text-sm text-accent/50">Python</p>
                </LogoCard>
                <LogoCard>
                  <SiSqlite size={25} />
                  <p className="text-sm text-accent/50">SQL</p>
                </LogoCard>
                <LogoCard>
                  <SiTableau size={25} />
                  <p className="text-sm text-accent/50">Tableau</p>
                </LogoCard>
                <LogoCard>
                  <SiPowerbi size={25} />
                  <p className="text-sm text-accent/50">Power BI</p>
                </LogoCard>
                <LogoCard>
                  <SiJupyter size={25} />
                  <p className="text-xs gap-4 text-center text-accent/50">
                    Jupyter Notebook
                  </p>
                </LogoCard>
                <LogoCard>
                  <SiPandas size={25} />
                  <p className="text-sm text-accent/50">Pandas</p>
                </LogoCard>
                <LogoCard>
                  <SiNumpy size={25} />
                  <p className="text-sm text-accent/50">NumPy</p>
                </LogoCard>
              </div>
            </div>
          </section>

          {/* PROJECT */}
          <section id="projects">
            <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6">
              <h3 className="text-xl font-semibold text-gray-100">Projects</h3>
              <a
                className="group"
                href="https://github.com/PrajwalGpy/Blinkit-Analysis-in-Power-BI"
                target="_blank"
              >
                <Card>
                  <div className="flex gap-4 items-center">
                    {" "}
                    {/* Added items-center to center the image and text vertically */}
                    <div className="relative min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg">
                      <Image
                        fill
                        alt="image"
                        src={"/Blinkit.webp"}
                        className="object-cover min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg opacity-80 md:group-hover:opacity-100 transition"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <p className="flex justify-between items-center text-semibold text-accent/80 md:group-hover:text-accent transition">
                        Blinkit Sales Analysis Project{" "}
                        <span className="opacity-50 md:group-hover:opacity-100 transition">
                          ↗
                        </span>{" "}
                      </p>
                      <p className="text-xs font-normal text-accent/50">
                        Analyzed grocery sales data and created dashboards in
                        Power BI and Excel to improve decision-making and
                        reporting efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-4">
                    <Badge>Power BI</Badge>
                    <Badge>Microsoft Excel</Badge>
                    <Badge>Data Analysis</Badge>
                    <Badge>Data Visualization</Badge>
                    <Badge>Dashboard Design</Badge>
                  </div>
                </Card>
              </a>
              <a
                href="https://github.com/PrajwalGpy/OLA-Data-Analyst-Project-Power-BI-And-SQL"
                target="_blank"
                className="group"
              >
                <Card>
                  <div className="flex gap-4 items-center">
                    <div className="relative min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg">
                      <Image
                        fill
                        alt="image"
                        src={"/Ola-Uber-Taxi.webp"}
                        className="object-cover min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg opacity-80 md:group-hover:opacity-100 transition"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <p className="flex justify-between text-semibold text-accent/80 md:group-hover:text-accent transition">
                        OLA Data Analyst Project{" "}
                        <span className="opacity-50 md:group-hover:opacity-100 transition">
                          ↗
                        </span>{" "}
                      </p>
                      <p className="text-xs font-normal text-accent/50">
                        Analyzed 100,000+ OLA rides, built dashboards to track
                        performance, and helped reduce cancellations by 10%.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-4">
                    <Badge>MySQL</Badge>
                    <Badge>Power BI</Badge>
                    <Badge>Microsoft Excel</Badge>
                    <Badge>Data Analysis</Badge>
                    <Badge>Data Visualization</Badge>
                    <Badge>Git/GitHub</Badge>
                  </div>
                </Card>
              </a>
              <a
                href="https://github.com/PrajwalGpy/ROAD-ACCIDENT-DA-PROJECT-Power-BI"
                target="_blank"
                className="group"
              >
                <Card>
                  <div className="flex gap-4 items-center">
                    <div className="relative min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg">
                      <Image
                        fill
                        alt="image"
                        src={"/car-collision.jpg"}
                        className="object-cover min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg opacity-80 md:group-hover:opacity-100 transition"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <p className="flex justify-between text-semibold text-accent/80 md:group-hover:text-accent transition">
                        Road Accident Analytics Dashboard{" "}
                        <span className="opacity-50 md:group-hover:opacity-100 transition">
                          ↗
                        </span>{" "}
                      </p>
                      <p className="text-xs font-normal text-accent/50">
                        Analyzed road accident data with Power BI to identify
                        safety trends and create decision-making dashboards.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-4">
                    <Badge>Power BI</Badge>
                    <Badge>Microsoft Excel</Badge>
                    <Badge>DAX (Data Analysis Expressions)</Badge>
                    <Badge>Data Visualization</Badge>
                    <Badge>Data Analysis</Badge>
                    <Badge>Dashboard Development</Badge>
                  </div>
                </Card>
              </a>
              <a
                href="https://github.com/PrajwalGpy/BANK-LOAN-REPORT-DA-Project-Excel"
                target="_blank"
                className="group"
              >
                <Card>
                  <div className="flex gap-4 items-center">
                    <div className="relative min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg">
                      <Image
                        fill
                        alt="image"
                        src={"/Bank Loan Performance.jpg"}
                        className="object-cover min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg opacity-80 md:group-hover:opacity-100 transition"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <p className="flex justify-between text-semibold text-accent/80 md:group-hover:text-accent transition">
                        Bank Loan Performance Analysis in Excel{" "}
                        <span className="opacity-50 md:group-hover:opacity-100 transition">
                          ↗
                        </span>{" "}
                      </p>
                      <p className="text-xs font-normal text-accent/50">
                        Analyzed bank loan data in Excel to track performance
                        and created dashboards for better loan decisions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-4">
                    <Badge>Microsoft Excel</Badge>
                    <Badge>Data Analysis</Badge>
                    <Badge>Data Visualization</Badge>
                    <Badge>Pivot Tables</Badge>
                    <Badge>KPIs Calculation</Badge>
                    <Badge>Slicers </Badge>
                  </div>
                </Card>
              </a>
            </div>
          </section>
          {/* CONTACT */}
          <div className="md:hidden">
            <Contact />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
