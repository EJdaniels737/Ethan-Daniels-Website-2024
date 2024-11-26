import React from 'react';

function Projects() {
    return (
        <section>
            <h1>Our Projects</h1>
            <p>
                Take a look at some of the amazing projects we’ve worked on. These projects reflect our passion for innovation,
                creativity, and solving real-world problems. We strive to deliver outstanding results that make a difference.
            </p>
            <p>
                From web development to data analysis, and beyond, each project showcases a commitment to excellence and collaboration. 
                We believe in empowering individuals and organizations through technology and innovative solutions.
            </p>
            <h2>How to Cook a Perfect Medium-Rare Steak</h2>
            <p>
                Simplified Steps for a Medium-Rare Steak:
            </p>
            <ul>
                <li>Prep Steak: Pat dry, season with salt and pepper.</li>
                <li>Heat Pan: Use medium-high heat; add oil.</li>
                <li>Sear: Cook 2-3 minutes per side.</li>
                <li>Add Flavor: Add butter, herbs, and garlic; baste for 1-2 minutes.</li>
                <li>Check Temp: Aim for 130–135°F (medium-rare).</li>
                <li>Rest: Let steak sit for 5-10 minutes.</li>
                <li>Serve: Slice and enjoy!</li>
            </ul>

            {/* Add two videos */}
            <div>
                <h3>Watch These Videos for More Tips</h3>
                <video width="600" controls>
                    <source src="/videos/Perfect_Medium_Rare_Steak_Guide.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video width="600" controls>
                    <source src="/videos/watermarked_video0914c09dca9c64e2789f28a41cf596aa7.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Add five images */}
            <div>
                <h3>Visual Inspiration</h3>
                <img src="/images/Step1_AI.jpg" alt="Steak cooking process" />
                <img src="/images/Step2_AI.jpg" alt="Seasoned steak" />
                <img src="/images/Step3_AI.jpg" alt="Searing steak" />
                <img src="/images/Step4_AI.jpg" alt="Rested steak ready to slice" />
                <img src="/images/Step5_AI.jpg" alt="Served steak on plate" />
            </div>

            <h2>About This Project</h2>
            <p>
                This project I am currently working on has been developed through a combination of my own coding and the use of AI-integrated software. 
                Not only has the AI assisted in gradually developing the code for my website, but it has also contributed to creating the game, as well as 
                some of the videos and images. Some of the applications I used include but are not limited to: Node, React, JavaScript, HTML, Luma AI, 
                Claude.AI, ChatGPT4, OpenArt.AI, and lastly Visual Studio Code.
            </p>
        </section>
    );
}

export default Projects;
