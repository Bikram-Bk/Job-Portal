import ApplyButton from "@/app/components/Helper/ApplyButton";
import JobCard from "@/app/components/Helper/JobCard";
import { authOptions } from "@/auth";
import JobData from "@/data";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const JobDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const singleJob = JobData.find((job) => job.id.toString() === id);
  const session = await getServerSession(authOptions);

  const firstFourJob = JobData.slice(0, 4);

  if (!singleJob) {
    return (
      <div className="mt-20 mb-12 w-[80%] mx-auto text-center font-semibold text-red-600"></div>
    );
  }

  return (
    <div className="mt-20 mb-12 ">
      <div className="block sm:flex items-center justify-between w-[80%] mx-auto">
        <div className="flex-[0.7]">
          <JobCard job={singleJob} />
        </div>
        {session && <ApplyButton />}
        {!session && (
          <Link href="/signup">
            <button className="px-8 py-3 bg-emerald-600 rounded-lg text-white">
              Sign Up To Apply
            </button>
          </Link>
        )}
      </div>
      <div className="mt-16 w-[80%] mx-auto">
        <h1 className="text-[20px] font-semibold ">Job Description</h1>
        <p className="mt-4 text-black text-opacity-70 text-justify leading-relaxed">
          We are looking for talented professionals in various technology roles
          including Software Developers, DevOps Engineers, Frontend and Backend
          Developers, Fullstack Developers, and Web Designers. Candidates will
          collaborate to design, develop, and maintain scalable and efficient
          applications, infrastructure, and user interfaces that drive
          innovation and business success. Strong problem-solving skills,
          teamwork, and adaptability to evolving technologies are essential.
        </p>

        <h1 className="text-[20px] mt-8 font-semibold ">Key Responsibility</h1>
        <div className="mt-4 text-black text-opacity-70 text-justify leading-relaxed">
          <ul className="mt-4 list-disc list-inside">
            <li className="mt-4 text-black text-opacity-70">
              Develop, test, and maintain software applications and systems
              across frontend, backend, and fullstack environments.
            </li>
            <li className="mt-4 text-black text-opacity-70">
              Design and implement scalable APIs, databases, and infrastructure
              automation for continuous deployment.
            </li>
            <li className="mt-4 text-black text-opacity-70">
              Build responsive and user-friendly interfaces that provide a
              seamless user experience.
            </li>
            <li className="mt-4 text-black text-opacity-70">
              Collaborate with cross-functional teams including product
              managers, designers, and QA to deliver high-quality solutions.
            </li>
            <li className="mt-4 text-black text-opacity-70">
              Monitor, troubleshoot, and optimize application and system
              performance.
            </li>
            <li className="mt-4 text-black text-opacity-70">
              Follow best practices for coding, security, and documentation.
            </li>
            <li className="mt-4 text-black text-opacity-70">
              Stay updated with emerging technologies and industry trends to
              continually improve skills and solutions.
            </li>
          </ul>
        </div>

        <h1 className="text-[20px] mt-8 font-semibold ">Skills</h1>
        <ul className="mt-4 ">
          <li className="mt-4 text-black text-opacity-70">React </li>
          <li className="mt-4 text-black text-opacity-70">Next JS</li>
          <li className="mt-4 text-black text-opacity-70">Tailwind CSS</li>
          <li className="mt-4 text-black text-opacity-70">TypeScript</li>
          <li className="mt-4 text-black text-opacity-70">Next Auth</li>
        </ul>
        <h1 className="text-[20px] mt-8 font-semibold ">Related Job</h1>
        <div className="mt-4">
          {firstFourJob.map((job) => {
            return (
              <Link
                href={`/job/jobdetails/${job.id}`}
                className="space-y-6"
                key={job.id}>
                <JobCard job={job} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
