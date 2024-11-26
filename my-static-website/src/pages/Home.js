import React from 'react';

function Home() {
    return (
        <section>
            <h1>Welcome to My Website</h1>
            <p>
                Hello, my name is Ethan Daniels, and this is my personal website. 
                Some of my hobbies include staying active through rugby and weightlifting. 
                I currently play rugby at UMD and have been involved in sports for as long as I can remember. 
                Participating in team sports from a young age sparked my passion for weightlifting, which remains 
                a significant part of my life. While I primarily lift to enhance my athletic performance, weightlifting 
                has become much more than just training—it's a personal passion.
            </p>

            {/* Add Pictures */}
            <div 
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '10px',
                    margin: '20px 0',
                }}
            >
                <img 
                    src="/images/professional-photo.jpg" 
                    alt="Ethan playing rugby" 
                    style={{
                        width: '100%',
                        borderRadius: '8px',
                    }}
                />
                <img 
                    src="/images/professional-photo2.jpg" 
                    alt="Ethan weightlifting" 
                    style={{
                        width: '100%',
                        borderRadius: '8px',
                    }}
                />
                <img 
                    src="/images/hobby1.jpg" 
                    alt="Ethan training" 
                    style={{
                        width: '100%',
                        borderRadius: '8px',
                    }}
                />
                <img 
                    src="/images/hobby2.jpg" 
                    alt="Ethan at a sports event" 
                    style={{
                        width: '100%',
                        borderRadius: '8px',
                    }}
                />
            </div>

            {/* Add Video */}
            <div>
                <h2>Check Out My Video</h2>
                <video 
                    width="100%" 
                    controls 
                    style={{ borderRadius: '8px', margin: '20px 0' }}
                >
                    <source src="/videos/welcome-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}

export default Home;
