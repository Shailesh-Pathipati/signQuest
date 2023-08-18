import React from 'react';
export default function ASL()
{
    return <div>
        <section id="main-content" style={{ padding: "20px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <iframe
                                title="Video 1"
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/VIDEO_ID_1"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                            <p>Introduction to Sign Language</p>
                        </div>
                        <div className="col-lg-4">
                            <iframe
                                title="Video 2"
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/VIDEO_ID_2"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                            <p>Common Phrases in Sign Language</p>
                        </div>
                        {/* Add more videos */}
                    </div>
                </div>
            </section>
    </div>
}