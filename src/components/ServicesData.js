{ /*creating an array of servicesData objects*/ } {
    /*Array contains
       1. Gif
       2. heading
       3. Description about the services
       4. Redirect page link*/
}

{ /*1. ASL Tutorials*/ } { /*2. Chatbot Facility*/ } { /*3. Audio Captioning for external video resources*/ } { /*4. Providing core curriculum*/ }
const servicesData = [{
        imgSrc: "hello.gif",
        altText: "Sign Language GIF",
        heading: "ASL Tutorials",
        description: "Integrating sign language promotes inclusivity, empowering deaf and mute students for active participation. Bridging communication gaps, it nurtures academic success, social interaction, and cultural understanding, ensuring equitable learning for all.",
        linkTo: "/first-service", //redirect page
        gifDimensions: { width: "300px", height: "200px" },
    },
    {
        imgSrc: "chatbot.gif",
        altText: "Chatbot Facility",
        heading: "Chatbot Facility",
        description: "Integration of a chatbot that employs text-based communication techniques which revolutionizes interaction. Ensuring information dissemination, interactive question answering, and enriched conversations through various communication modes.",
        linkTo: "/chatbot-service", //redirect page
        gifDimensions: { width: "200px", height: "200px" },
    },
    {
        imgSrc: "youtube-phone.gif",
        altText: "Gamification of Lip Reading ",
        heading: "Gamification of Lip Reading ",
        description: "Engage in exciting games and acitivities like Guess the Phrase,where you decipher lip movements, Word Scramble to master diverse lip shapes. Elevate your lip reading and communication prowess through these entertaining and impactful activities.",
        linkTo: "/lip-reading", //redirect page
        gifDimensions: { width: "200px", height: "200px" },
    },
    {
        imgSrc: "curriculum.gif",
        altText: "School Curriculum",
        heading: "Expanded Core Curriculum",
        description: "Comprehensive curriculum, encompassing different subjects and grade levels. It facilitates learning through engaging lessons,videos, quizzes and assignments that cater to the student's specific grade, ensuring a tailored educational experience.",
        linkTo: "/expanded-core-curriculum", //redirect page
        gifDimensions: { width: "200px", height: "200px" },

    },
    {
        imgSrc: "tap-to-speak.gif",
        altText: "School Curriculum",
        heading: "Speech to Text and Text to Speech",
        description: "Instant transcription of spoken content into text, aiding those with hearing impairments .Ensuring effective interaction by converting textual input to spoken language, fostering inclusive and dynamic communication.",
        linkTo: "/tap-to-speak", //redirect page
        gifDimensions: { width: "200px", height: "200px" },
    }

];

export default servicesData;