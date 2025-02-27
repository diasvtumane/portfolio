import React from "react";

const Resume = () => {
    return (
        <section
            id="resume"
            className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center px-6 py-16"
        >
            <h2 className="text-4xl font-bold mb-8">Resume</h2>
            <div className="max-w-5xl w-full bg-white p-8 rounded-lg shadow-lg">
                {/* Header */}
                <div className="border-b pb-4 mb-6">
                    <h1 className="text-3xl font-bold">Dias Burkitbayev</h1>
                    <h3 className="text-lg text-gray-500">
                        Product Engineer
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-4 text-gray-700">
                        {/* Download Button */}
                        <a
                            href="/resume.pdf"
                            download
                            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Profile */}
                <div className="mb-6">
                    <h3 className="text-xl font-bold border-b pb-2">Profile</h3>
                    <p className="text-gray-700 mt-2">
                        Since childhood, I have mastered computer skills very quickly. I had a dream to create my own artificial intelligence, which has become the main motivation for me in all aspects of life. I am a motivated and hardworking individual focused on achieving my goals.
                    </p>
                </div>

                {/* Employment History */}
                <div className="mb-6">
                    <h3 className="text-xl font-bold border-b pb-2">Employment History</h3>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold">Product Engineer, HockeyStack</h4>
                        <p className="text-gray-500">Jan 2025 – Present | San Francisco</p>
                        <p className="text-gray-700">
                            Building automation for customer success and sales teams. Working with the marketing team for custom applications.
                            <br />
                            <span className="font-bold">Skills:</span> SQL, RestAPI, Javascript, React.js, Node.js, AWS, Docker, Git
                        </p>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold">AI/Flex Developer, Aga Pito Studios, LLC</h4>
                        <p className="text-gray-500">Aug 2023 – May 2024 | Fort Wayne</p>
                        <p className="text-gray-700">
                            Developed a VR game using Unity as part of my Senior Capstone Project.
                            <br />
                            <span className="font-bold">Skills:</span> Unity, Python, C#, ML Toolkit, Raspberry Pi, Jira, GitHub
                        </p>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold">Internship Trainee, Kazakhtelecom JSC</h4>
                        <p className="text-gray-500">Jun 2020 – Aug 2020 | Almaty</p>
                        <p className="text-gray-700">
                            Receiving and registering emergency messages, detecting, analyzing, and generating problem tickets, primary diagnostics, identifying correlations for accidents and problem tickets, internship, the affiliated branch of Kazakhtelecom JSC.
                            <br />
                            <span className="font-bold">Skills:</span> React.js, Python, Express.js, Google Cloud
                        </p>
                    </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                    <h3 className="text-xl font-bold border-b pb-2">Skills</h3>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                        {/* Programming Languages */}
                        <li>
                            <strong>Programming Languages:</strong> Python, Java, JavaScript, SQL, C#, HTML/CSS
                        </li>
                        {/* Frameworks and Libraries */}
                        <li>
                            <strong>Frameworks/Libraries:</strong> React.js, Node.js, Express.js, Tailwind
                        </li>
                        {/* Tools and Platforms */}
                        <li>
                            <strong>Tools/Platforms:</strong> Unity, MongoDB, Google Cloud, AWS, Git, Docker
                        </li>
                    </ul>
                </div>

                {/* Education */}
                <div>
                    <h3 className="text-xl font-bold border-b pb-2">Education</h3>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold">
                            BS, Computer Science, Purdue University
                        </h4>
                        <p className="text-gray-500">Aug 2021 – Dec 2024 | Minor in Mathematics</p>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold">
                            BASc, Computer Science, George Mason University
                        </h4>
                        <p className="text-gray-500">Aug 2019 – Jun 2021</p>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold">
                            High School Diploma, National School of Physics & Math
                        </h4>
                        <p className="text-gray-500">Sep 2016 – Jun 2019 | Almaty</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
