import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";
import Team from "./assets/team.png";
import Image from "next/image";
import Notion from "./assets/notion.png";
import Shopify from "./assets/shopify.png";
import Pipedrive from "./assets/pipedrive.png";
import Stripe from "./assets/stripe.png";
import Zendesk from "./assets/zendesk.png";
import Teams from "./assets/screenshot-bottom.png";
import candidate from "./assets/candidates.png";
import TypedAnimation from "./components/TypedAnimation";
import {
  ComputerDesktopIcon,
  CpuChipIcon,
  DocumentTextIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { ChartBarIcon, DocumentCheckIcon } from "@heroicons/react/24/solid";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-jobster-back min-h-[100vh] text-white">
      <Header />

      {/* hero  */}
      <section className="py-32">
        <div className=" flex flex-col gap-9 pb-32 mx-auto max-w-2xl text-center ">
          <h1 className="text-6xl font-bold">
            Onboard your global team in{" "}
            <TypedAnimation
              strings={[
                "Months.",
                "Weeks.",
                "Days.",
                "Hours.",
                "Minutes.",
                "Seconds.",
              ]}
            />
          </h1>
          <p className="text-lg text-jobster-gray-extra-light">
            We leverage AI to source, vet, match, and pay your team, so you
            don&apos;t have to.
          </p>
          <div className="flex gap-3 justify-center text-sm">
            <Link href={"/login"}>
              <button className="py-[10px] px-[14px] bg-jobster-indigo rounded-md hover:bg-jobster-indigo-extra-light font-sm font-medium">
                Hire a team
              </button>
            </Link>
            <Link href={"/login"}>
              <button className="py-[10px] px-[14px] flex items-center font-sm font-medium">
                <span>Apply for work</span>
                <ArrowSmallRightIcon className="w-6 font-bold" />
              </button>
            </Link>
          </div>
        </div>
        <div className="xl:w-2/3   mx-auto pt-12">
          <Image src={Team} alt="team" className="rounded-md" />
        </div>
      </section>

      {/* partners  */}
      <section
        id="partners"
        className="flex justify-between items-center backdrop-grayscale-0 partner w-2/3 mx-auto py-32"
      >
        <Image
          src={Notion}
          alt="notion logo"
          className="invert-[100%] grayscale-[100%] w-32"
        />
        <Image
          src={Shopify}
          alt="shopify logo"
          className="invert-[100%] grayscale-[100%] w-32"
        />
        <Image
          src={Pipedrive}
          alt="pipedrive logo"
          className="invert-[100%] grayscale-[100%] w-32"
        />
        <Image
          src={Stripe}
          alt="stripe logo"
          className="invert-[100%] grayscale-[100%] w-32"
        />
        <Image
          src={Zendesk}
          alt="zendesk logo"
          className="invert-[100%] grayscale-[100%] w-32"
        />
      </section>

      {/* team  */}
      <section id="teams" className="w-10/12 ml-auto flex pr-5 gap-32 py-32">
        <div className="w-1/3">
          <span className="text-jobster-indigo-extra-light font-medium">
            Push button, get talent
          </span>
          <h3 className="text-[36px] leading-tight font-bold mt-2">
            Specialized teams for your requirements.
          </h3>
          <p className="text-lg mt-6 mb-12 text-jobster-gray-extra-light">
            Mercor understands queries in natural language to assess millions of
            engineer profiles and instantly assemble the best global team.
          </p>
          <div className="space-y-10">
            <div className="flex gap-3 items-start">
              <div className=" text-jobster-indigo-light mt-1">
                <CpuChipIcon className="w-5 h-5" />
              </div>{" "}
              <p className="text-jobster-gray-extra-light">
                <span className="font-semibold text-white">AI Interview.</span>{" "}
                Candidates take a 20-minute AI interview which asks targeted
                technical questions about their background.
              </p>
            </div>{" "}
            <div className="flex gap-3 items-start">
              <div className=" text-jobster-indigo-light mt-1">
                <ChartBarIcon className="w-5 h-5" />{" "}
              </div>{" "}
              <p className="text-jobster-gray-extra-light">
                <span className="font-semibold text-white">
                  Github Analysis.
                </span>{" "}
                Our AI analyzes GitHub profiles to understand the quality,
                complexity, and relevance of a candidate&apos;s repositories.
              </p>
            </div>{" "}
            <div className="flex gap-3 items-start">
              <div className=" text-jobster-indigo-light mt-1">
                <DocumentCheckIcon className="w-5 h-5" />
              </div>{" "}
              <p className="text-jobster-gray-extra-light">
                <span className="font-semibold text-white">
                  Resume Analysis
                </span>{" "}
                We use AI-based resume parsing to find engineers that have elite
                professional and educational backgrounds.
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <Image src={Teams} alt="bottom" className="rounded-md" />
        </div>
      </section>

      {/* api  */}
      <section id="product" className="py-32">
        <div className=" w-2/3 mx-auto">
          <div className="w-1/2 text-center mx-auto">
            <span className="text-jobster-indigo-extra-light font-medium">
              Seamless onboarding
            </span>
            <h3 className="text-[36px] leading-tight font-bold mt-2">
              Elite engineering should be an API endpoint.
            </h3>
            <p className="text-lg mt-6 mb-12 text-jobster-gray-extra-light">
              Centralize the entire end-to-end pipeline for your global team.
            </p>
          </div>
          <div className="flex gap-5 pt-7">
            <div className="flex-1">
              <div className="flex gap-3 items-center">
                <ComputerDesktopIcon className="w-5 h-5 text-jobster-indigo-extra-light" />
                <span className="font-semibold">Engineer Vetting</span>
              </div>
              <p className="text-jobster-gray-extra-light mt-3">
                Have a 10x engineer on your standup, tomorrow. We source and vet
                millions of engineers so you can work with elite talent,
                immediately.
              </p>
            </div>{" "}
            <div className="flex-1">
              <div className="flex gap-3 items-center">
                <LockClosedIcon className="w-5 h-5 text-jobster-indigo-extra-light" />
                <span className="font-semibold">Payment Infrastructure</span>
              </div>
              <p className="text-jobster-gray-extra-light mt-3">
                We handle recurring payment details, currency conversions, and
                international money transfer headaches. Just put your card
                details into Stripe.
              </p>
            </div>{" "}
            <div className="flex-1">
              <div className="flex gap-3 items-center">
                <DocumentTextIcon className="w-5 h-5 text-jobster-indigo-extra-light" />
                <span className="font-semibold">Regulatory Compliance</span>
              </div>
              <p className="text-jobster-gray-extra-light mt-3">
                We&apos;re familiar with international labor and tax laws so you
                don&apos;t have to be. Mercor files the necessary paperwork to
                be compliant across multiple borders.
              </p>
            </div>{" "}
            <div className="flex-1">
              <div className="flex gap-3 items-center">
                <CpuChipIcon className="w-5 h-5 text-jobster-indigo-extra-light" />
                <span className="font-semibold">GPT Tools</span>
              </div>
              <p className="text-jobster-gray-extra-light mt-3">
                Every Mercor engineer receives free access to the best AI
                tooling, including GPT-4. We shortlist candidates based on their
                ability to use AI tools productively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* candidates  */}
      <section className="py-32" id="candidates">
        <div className="w-2/3 bg-[#202734] pl-28  mx-auto  rounded-3xl flex items-center gap-12 overflow-hidden">
          <div className="flex-1 space-y-7">
            <h3 className="text-3xl leading-tight font-bold ">
              Access hundreds of companies with one{" "}
              <TypedAnimation
                strings={["Resume.", "Application.", "Interview."]}
                loop={true}
              />
            </h3>
            <p className="mt-6  text-jobster-gray-extra-light">
              Engineers in the Mercor global talent pool receive opportunities
              at the highest caliber US startups.
            </p>
            <div className="pt-2">
              <Link href={"/login"}>
              <button className="py-[10px] px-[14px] text-sm font-medium bg-jobster-indigo-light rounded-md hover:bg-jobster-indigo-extra-light">
                Apply for work
              </button></Link>
            </div>
          </div>
          <div className="flex-1 pt-9">
            <Image
              src={candidate}
              alt="candidate"
              className="rounded-none rounded-tl-md"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
