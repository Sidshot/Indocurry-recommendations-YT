document.addEventListener('DOMContentLoaded', () => {
    const contentGrid = document.getElementById('contentGrid');
    const filtersWrapper = document.getElementById('filtersWrapper');
    const searchInput = document.getElementById('searchInput');
    const randomBtn = document.getElementById('randomBtn');

    // EMBEDDED DATA START
    const allData = [
        {
            "category": "💻 Competitive Programming & Dev (Codeforces/Android)",
            "channels": [
                {
                    "name": "take U forward",
                    "url": "https://www.youtube.com/@takeUforward",
                    "description": "(Striver) Essential for DSA and placement prep."
                },
                {
                    "name": "Codeforces",
                    "url": "https://www.youtube.com/@CodeforcesLive",
                    "description": "Official channel for the platform."
                },
                {
                    "name": "Errichto",
                    "url": "https://www.youtube.com/@Errichto",
                    "description": "Top-tier competitive programming tutorials."
                },
                {
                    "name": "Aditya Verma",
                    "url": "https://www.youtube.com/@TheAdityaVerma",
                    "description": "Famous for his Dynamic Programming playlist."
                },
                {
                    "name": "Tech Karan",
                    "url": "https://www.youtube.com/@TechKaran",
                    "description": "Specific focus on Custom ROMs and Android mods."
                },
                {
                    "name": "Munchy",
                    "url": "https://www.youtube.com/@Munchy",
                    "description": "Tutorials on installing Custom ROMs (Xiaomi/Redmi focus)."
                }
            ]
        },
        {
            "category": "Knowledge & Education",
            "channels": [
                {
                    "name": "Kurzgesagt – In a Nutshell",
                    "url": "https://www.youtube.com/c/kzgesagt",
                    "description": "Animated explainers about science, society, and future ideas."
                },
                {
                    "name": "CrashCourse",
                    "url": "https://www.youtube.com/c/crashcourse",
                    "description": "Fast-paced educational series covering many academic subjects."
                },
                {
                    "name": "Vsauce",
                    "url": "https://www.youtube.com/c/vsauce1",
                    "description": "Asks simple questions that lead to deep philosophical ideas."
                },
                {
                    "name": "TED-Ed",
                    "url": "https://www.youtube.com/teded",
                    "description": "Short animated lessons explaining interesting ideas and questions."
                },
                {
                    "name": "CGP Grey",
                    "url": "https://www.youtube.com/wcgpgrey",
                    "description": "Clear explanations of political, social, and organizational systems."
                },
                {
                    "name": "Big Think",
                    "url": "https://www.youtube.com/c/bigthink",
                    "description": "Expert insights on psychology, philosophy, and future thinking."
                },
                {
                    "name": "The School of Life",
                    "url": "https://www.youtube.com/c/theschooloflife",
                    "description": "Ideas about relationships, emotions, and self-understanding."
                },
                {
                    "name": "Half as Interesting",
                    "url": "https://www.youtube.com/c/halfasinteresting",
                    "description": "Explains unusual facts behind how modern systems work."
                },
                {
                    "name": "PolyMatter",
                    "url": "https://www.youtube.com/c/PolyMatter",
                    "description": "In-depth explainers on geopolitics and global economics."
                },
                {
                    "name": "Overly Sarcastic Productions",
                    "url": "https://www.youtube.com/c/OverlySarcasticProductionsChannel",
                    "description": "Animated, humorous explanations of mythology, literature, and history."
                },
                {
                    "name": "fern",
                    "url": "https://www.youtube.com/c/fern-tv",
                    "description": "Armchair documentaries on history, society, and world events."
                },
                {
                    "name": "neo",
                    "url": "https://www.youtube.com/c/neoyoutube",
                    "description": "Educational short documentaries on geography, politics, history, and society."
                },
                {
                    "name": "Jay and Mark",
                    "url": "https://www.youtube.com/c/JayForeman",
                    "description": "Humorous educational videos about geography, history, and London."
                },
                {
                    "name": "Tasting History with Max Miller",
                    "url": "https://www.youtube.com/c/TastingHistory",
                    "description": "Exploring world history through recreated ancient recipes."
                },
                {
                    "name": "LEMMiNO",
                    "url": "https://www.youtube.com/c/LEMMiNO",
                    "description": "Long-form videos about space and mysteries."
                }
            ]
        },
        {
            "category": "Science & Mathematics",
            "channels": [
                {
                    "name": "Numberphile",
                    "url": "https://www.youtube.com/user/numberphile",
                    "description": "Fascinating stories and puzzles about numbers and mathematics."
                },
                {
                    "name": "3Blue1Brown",
                    "url": "https://www.youtube.com/c/3blue1brown",
                    "description": "Visual explanations of mathematical concepts and intuition."
                },
                {
                    "name": "Physics Girl",
                    "url": "https://www.youtube.com/c/physicsgirl",
                    "description": "Physics concepts explained through experiments and demonstrations."
                },
                {
                    "name": "PBS Space Time",
                    "url": "https://www.youtube.com/c/pbsspacetime",
                    "description": "Deep dives into physics, space, and the nature of reality."
                },
                {
                    "name": "SmarterEveryDay",
                    "url": "https://www.youtube.com/c/smartereveryday",
                    "description": "Hands-on science and engineering explained through real-world experiments."
                },
                {
                    "name": "SciShow",
                    "url": "https://www.youtube.com/c/scishow",
                    "description": "Short videos explaining science news, facts, and discoveries."
                },
                {
                    "name": "Applied Science",
                    "url": "https://www.youtube.com/user/bkraz333",
                    "description": "Practical experiments exploring physics, chemistry, and materials."
                },
                {
                    "name": "AsapSCIENCE",
                    "url": "https://www.youtube.com/user/AsapSCIENCE",
                    "description": "Explains everyday science questions with simple visuals and humor."
                },
                {
                    "name": "mathologer",
                    "url": "https://www.youtube.com/c/Mathologer",
                    "description": "Mathematical concepts and explanations made engaging."
                },
                {
                    "name": "NileRed",
                    "url": "https://www.youtube.com/c/NileRed",
                    "description": "Chemistry experiments and explanations with colorful visuals."
                },
                {
                    "name": "PBS Eons",
                    "url": "https://www.youtube.com/c/eons",
                    "description": "Explores life’s history on Earth from ancient to modern times."
                },
                {
                    "name": "Deep Look",
                    "url": "https://www.youtube.com/user/KQEDDeepLook",
                    "description": "Ultra-close cinematography explaining nature and biology."
                },
                {
                    "name": "AntsCanada",
                    "url": "https://www.youtube.com/user/AntsCanada",
                    "description": "Cinematic storytelling and education about the fascinating world of ants."
                },
                {
                    "name": "Journey to the Microcosmos",
                    "url": "https://www.youtube.com/c/microcosmos",
                    "description": "Microscopic exploration of life and cells in nature."
                },
                {
                    "name": "Be Smart",
                    "url": "https://www.youtube.com/c/itsokaytobesmart",
                    "description": "Science and curiosity videos explaining how nature and the universe work."
                },
                {
                    "name": "Cleo Abram",
                    "url": "https://www.youtube.com/c/CleoAbram",
                    "description": "Optimistic science and technology explainers about future breakthroughs."
                },
                {
                    "name": "SEA",
                    "url": "https://www.youtube.com/c/sea_media",
                    "description": "Chill-out videos about all things space-related."
                },
                {
                    "name": "Epic Spaceman",
                    "url": "https://www.youtube.com/c/EpicSpaceman",
                    "description": "Simple, cinematic videos about the incredible Universe we live in."
                },
                {
                    "name": "minutephysics",
                    "url": "https://www.youtube.com/user/minutephysics",
                    "description": "Hand-drawn animations explaining physics concepts clearly."
                },
                {
                    "name": "Fermilab",
                    "url": "https://www.youtube.com/user/fermilab",
                    "description": "Official science videos explaining particle physics and forces."
                },
                {
                    "name": "The Slow Mo Guys",
                    "url": "https://www.youtube.com/user/theslowmoguys",
                    "description": "Captures everyday and unusual phenomena in ultra-slow motion."
                },
                {
                    "name": "TheBackyardScientist",
                    "url": "https://www.youtube.com/user/TheBackyardScientist",
                    "description": "Hands-on science experiments and explosive demonstrations."
                }
            ]
        },
        {
            "category": "Technology & Engineering",
            "channels": [
                {
                    "name": "Linus Tech Tips",
                    "url": "https://www.youtube.com/user/LinusTechTips",
                    "description": "In-depth reviews and explanations of computer hardware."
                },
                {
                    "name": "Marques Brownlee (MKBHD)",
                    "url": "https://www.youtube.com/user/marquesbrownlee",
                    "description": "Clean, high-quality reviews of consumer technology."
                },
                {
                    "name": "Mrwhosetheboss",
                    "url": "https://www.youtube.com/user/Mrwhosetheboss",
                    "description": "Technology reviews and comparisons explained for general audiences."
                },
                {
                    "name": "Engineering Explained",
                    "url": "https://www.youtube.com/user/EngineeringExplained",
                    "description": "Clear explanations of how cars and automotive technology work."
                },
                {
                    "name": "Technology Connections",
                    "url": "https://www.youtube.com/c/TechnologyConnections",
                    "description": "Explains everyday technology and why it works the way it does."
                },
                {
                    "name": "ElectroBOOM",
                    "url": "https://www.youtube.com/c/ElectroBOOM",
                    "description": "Electrical engineering concepts explained through dangerous-looking experiments."
                },
                {
                    "name": "Practical Engineering",
                    "url": "https://www.youtube.com/c/PracticalEngineeringChannel",
                    "description": "Explains real-world engineering behind infrastructure."
                },
                {
                    "name": "Computerphile",
                    "url": "https://www.youtube.com/user/Computerphile",
                    "description": "Computer science concepts explained by researchers and engineers."
                },
                {
                    "name": "Two Minute Papers",
                    "url": "https://www.youtube.com/user/keeroyz",
                    "description": "Summaries of cutting-edge research in AI and computer graphics."
                },
                {
                    "name": "Real Engineering",
                    "url": "https://www.youtube.com/c/RealEngineering",
                    "description": "Explains major engineering projects and technological systems."
                },
                {
                    "name": "Jared Owen",
                    "url": "https://www.youtube.com/user/jaredowen",
                    "description": "3D animations that visually explain how machines and structures work."
                }
            ]
        },
        {
            "category": "Art, Design & Creativity",
            "channels": [
                {
                    "name": "Proko",
                    "url": "https://www.youtube.com/user/ProkoTV",
                    "description": "Drawing and figure art lessons for artists of all levels."
                },
                {
                    "name": "Drawabox",
                    "url": "https://www.youtube.com/c/Drawabox",
                    "description": "Structured exercises for learning drawing fundamentals."
                },
                {
                    "name": "Marco Bucci",
                    "url": "https://www.youtube.com/user/marcobucci",
                    "description": "Painting, color, and visual storytelling explained clearly."
                },
                {
                    "name": "Satori Graphics",
                    "url": "https://www.youtube.com/c/SatoriGraphics",
                    "description": "Graphic design principles, tutorials, and visual breakdowns."
                },
                {
                    "name": "The Futur",
                    "url": "https://www.youtube.com/user/TheSkoolRocks",
                    "description": "Design, branding, and creative business education."
                },
                {
                    "name": "Ben Marriott",
                    "url": "https://www.youtube.com/c/BenMarriott",
                    "description": "Motion design and animation techniques explained simply."
                },
                {
                    "name": "School of Motion",
                    "url": "https://www.youtube.com/c/SchoolofMotion",
                    "description": "Motion design education and industry-focused tutorials."
                },
                {
                    "name": "Film Riot",
                    "url": "https://www.youtube.com/user/filmriot",
                    "description": "Filmmaking techniques, gear, and creative workflows."
                },
                {
                    "name": "Every Frame a Painting",
                    "url": "https://www.youtube.com/user/everyframeapainting",
                    "description": "Film scenes analyzed to explain visual storytelling."
                },
                {
                    "name": "Peter McKinnon",
                    "url": "https://www.youtube.com/user/petermckinnon24",
                    "description": "Photography and creative filmmaking techniques."
                },
                {
                    "name": "Sycra",
                    "url": "https://www.youtube.com/user/Sycra",
                    "description": "Art tutorials focused on drawing fundamentals and digital painting."
                },
                {
                    "name": "Alphonso Dunn",
                    "url": "https://www.youtube.com/user/alphonsodunn",
                    "description": "Step-by-step drawing and ink techniques for artists."
                },
                {
                    "name": "Jazza",
                    "url": "https://www.youtube.com/user/DrawWithJazza",
                    "description": "Art tutorials, character design, and creative challenges."
                }
            ]
        },
        {
            "category": "Music & Audio",
            "channels": [
                {
                    "name": "Adam Neely",
                    "url": "https://www.youtube.com/user/havic5",
                    "description": "Explores music theory, rhythm, and modern musical concepts."
                },
                {
                    "name": "Rick Beato",
                    "url": "https://www.youtube.com/user/pegzch",
                    "description": "Breaks down songs, music theory, and recording techniques."
                },
                {
                    "name": "Nahre Sol",
                    "url": "https://www.youtube.com/c/NahreSol",
                    "description": "Piano performance and composition explored across styles."
                },
                {
                    "name": "ANDREW HUANG",
                    "url": "https://www.youtube.com/user/songstowearpantsto",
                    "description": "Creative music production experiments and sound design."
                },
                {
                    "name": "Signals Music Studio",
                    "url": "https://www.youtube.com/c/SignalsMusicStudio",
                    "description": "Music theory and songwriting explained for musicians."
                },
                {
                    "name": "12tone",
                    "url": "https://www.youtube.com/c/12tone",
                    "description": "Visual explanations of music theory and song structure."
                },
                {
                    "name": "Produce Like A Pro",
                    "url": "https://www.youtube.com/c/ProduceLikeAPro",
                    "description": "Music production, mixing, and recording workflows."
                },
                {
                    "name": "Pensado’s Place",
                    "url": "https://www.youtube.com/user/PensadosPlace",
                    "description": "Professional insights into audio mixing and production."
                },
                {
                    "name": "In The Mix",
                    "url": "https://www.youtube.com/c/inthemix",
                    "description": "Clear tutorials on music production and DAW techniques."
                },
                {
                    "name": "Sideways",
                    "url": "https://www.youtube.com/c/Sideways440",
                    "description": "Explains how music works in films and storytelling."
                }
            ]
        },
        {
            "category": "Writing & Communication",
            "channels": [
                {
                    "name": "Lessons from the Screenplay",
                    "url": "https://www.youtube.com/c/LessonsfromtheScreenplay",
                    "description": "Explains storytelling and writing through film scripts."
                },
                {
                    "name": "Just Write",
                    "url": "https://www.youtube.com/c/JustWrite",
                    "description": "Analyzes writing techniques used in films and media."
                },
                {
                    "name": "Terrible Writing Advice",
                    "url": "https://www.youtube.com/c/TerribleWritingAdvice",
                    "description": "Uses satire to highlight common writing mistakes."
                },
                {
                    "name": "Hello Future Me",
                    "url": "https://www.youtube.com/c/HelloFutureMe",
                    "description": "Deep dives into worldbuilding and narrative craft."
                },
                {
                    "name": "ShaelinWrites",
                    "url": "https://www.youtube.com/user/ShaelinWrites",
                    "description": "Practical advice on writing, creativity, and productivity."
                },
                {
                    "name": "Writing with Jenna Moreci",
                    "url": "https://www.youtube.com/user/JennaMoreci",
                    "description": "Straightforward writing advice and publishing insights."
                },
                {
                    "name": "The Futur Academy",
                    "url": "https://www.youtube.com/c/TheFuturAcademy",
                    "description": "Communication, persuasion, and creative business messaging."
                },
                {
                    "name": "Charisma on Command",
                    "url": "https://www.youtube.com/user/ charismaoncommand",
                    "description": "Analyzes communication skills and social influence."
                },
                {
                    "name": "Thomas Frank",
                    "url": "https://www.youtube.com/user/electrickeye91",
                    "description": "Clear advice on productivity, learning, and communication."
                }
            ]
        },
        {
            "category": "Meta & Platform-Specific",
            "channels": [
                {
                    "name": "Creator Insider",
                    "url": "https://www.youtube.com/channel/UCGg-UqjRgzhYDPJMr-9HXCg",
                    "description": "Official YouTube updates on algorithms and features."
                },
                {
                    "name": "Colin and Samir",
                    "url": "https://www.youtube.com/c/ColinandSamir",
                    "description": "Deep dives into creators, platforms, and the creator economy."
                },
                {
                    "name": "Think Media",
                    "url": "https://www.youtube.com/user/THiNKmediaTV",
                    "description": "Practical advice for growing and monetizing YouTube channels."
                },
                {
                    "name": "TubeBuddy",
                    "url": "https://www.youtube.com/c/TubeBuddy",
                    "description": "YouTube growth tips, analytics, and best practices."
                },
                {
                    "name": "VidIQ",
                    "url": "https://www.youtube.com/c/vidIQ",
                    "description": "SEO, trends, and strategy for YouTube creators."
                }
            ]
        },
        {
            "category": "Making, DIY & Craft",
            "channels": [
                {
                    "name": "Adam Savage’s Tested",
                    "url": "https://www.youtube.com/user/testedcom",
                    "description": "Builds props, tools, and projects with professional craftsmanship."
                },
                {
                    "name": "This Old Tony",
                    "url": "https://www.youtube.com/c/ThisOldTony",
                    "description": "Machining and metalworking explained with humor and precision."
                },
                {
                    "name": "JimmyDiresta",
                    "url": "https://www.youtube.com/user/jimmydiresta",
                    "description": "Creative builds using wood, metal, and found materials."
                },
                {
                    "name": "I Like To Make Stuff",
                    "url": "https://www.youtube.com/user/iliketomakestuffcom",
                    "description": "Beginner-friendly DIY projects using tools and digital fabrication."
                },
                {
                    "name": "Make:",
                    "url": "https://www.youtube.com/user/makemagazine",
                    "description": "Hands-on projects covering electronics, tools, and maker culture."
                },
                {
                    "name": "GreatScott!",
                    "url": "https://www.youtube.com/user/greatscottlab",
                    "description": "Electronics projects and circuit design explained clearly."
                },
                {
                    "name": "Laura Kampf",
                    "url": "https://www.youtube.com/c/LauraKampf",
                    "description": "Creative DIY builds and clever workshop problem-solving."
                },
                {
                    "name": "frank howarth",
                    "url": "https://www.youtube.com/user/urbanTrashZ",
                    "description": "Woodworking projects with unique stop-motion storytelling."
                },
                {
                    "name": "Punished Props Academy",
                    "url": "https://www.youtube.com/user/punishedprops",
                    "description": "Prop-making tutorials for cosplay and film props."
                },
                {
                    "name": "Bobby Duke Arts",
                    "url": "https://www.youtube.com/user/BobbyDukeArts",
                    "description": "Sculpting and creative builds using unconventional materials."
                }
            ]
        },
        {
            "category": "Games & Interactive Media",
            "channels": [
                {
                    "name": "Game Maker’s Toolkit",
                    "url": "https://www.youtube.com/user/McBacon1337",
                    "description": "Explains game design concepts using real games as examples."
                },
                {
                    "name": "Extra Credits",
                    "url": "https://www.youtube.com/user/ExtraCreditz",
                    "description": "Short lessons on game design, history, and development theory."
                },
                {
                    "name": "Noclip",
                    "url": "https://www.youtube.com/c/Noclip",
                    "description": "Documentaries about game development and studio culture."
                },
                {
                    "name": "Ahoy",
                    "url": "https://www.youtube.com/user/XboxAhoy",
                    "description": "High-quality videos on video game history and design."
                },
                {
                    "name": "Design Doc",
                    "url": "https://www.youtube.com/c/DesignDoc",
                    "description": "Analyzes game mechanics and design decisions."
                },
                {
                    "name": "Digital Foundry",
                    "url": "https://www.youtube.com/user/DigitalFoundry",
                    "description": "Technical analysis of game performance and graphics."
                },
                {
                    "name": "Core-A Gaming",
                    "url": "https://www.youtube.com/c/CoreAGaming",
                    "description": "Explains competitive fighting games and esports concepts."
                },
                {
                    "name": "Razbuten",
                    "url": "https://www.youtube.com/c/Razbuten",
                    "description": "Thoughtful analysis of games, accessibility, and player experience."
                },
                {
                    "name": "People Make Games",
                    "url": "https://www.youtube.com/c/PeopleMakeGames",
                    "description": "Investigative reporting on games, studios, and industry practices."
                }
            ]
        },
        {
            "category": "Entertainment & Pop Culture",
            "channels": [
                {
                    "name": "Nerdwriter1",
                    "url": "https://www.youtube.com/user/Nerdwriter1",
                    "description": "Video essays analyzing movies, culture, and visual storytelling."
                },
                {
                    "name": "CinemaWins",
                    "url": "https://www.youtube.com/c/CinemaWins",
                    "description": "Highlights positive storytelling elements in movies."
                },
                {
                    "name": "Cinema Therapy",
                    "url": "https://www.youtube.com/c/CinemaTherapy",
                    "description": "Explores films through psychology and emotional themes."
                },
                {
                    "name": "Wisecrack",
                    "url": "https://www.youtube.com/user/WisecrackEDU",
                    "description": "Pop culture analysis through philosophy and critical theory."
                },
                {
                    "name": "ScreenCrush",
                    "url": "https://www.youtube.com/c/ScreenCrush",
                    "description": "Explains movie details, theories, and pop culture news."
                },
                {
                    "name": "Now You See It",
                    "url": "https://www.youtube.com/c/NowYouSeeIt",
                    "description": "Analyzes film language and visual storytelling techniques."
                },
                {
                    "name": "RedLetterMedia",
                    "url": "https://www.youtube.com/user/RedLetterMedia",
                    "description": "Critical discussions and reviews of movies and media."
                },
                {
                    "name": "Patrick (H) Willems",
                    "url": "https://www.youtube.com/c/PatrickHWillems",
                    "description": "Creative video essays on filmmaking and pop culture trends."
                },
                {
                    "name": "captainmidnight",
                    "url": "https://www.youtube.com/c/captainmidnight",
                    "description": "Explores storytelling, media history, and pop culture shifts."
                },
                {
                    "name": "Nexpo",
                    "url": "https://www.youtube.com/c/Nexpo",
                    "description": "Exploring the Internet’s dark side."
                }
            ]
        },
        {
            "category": "Lifestyle & Personal",
            "channels": [
                {
                    "name": "Matt D’Avella",
                    "url": "https://www.youtube.com/user/blackboxfilmcompany",
                    "description": "Minimalism, habits, and intentional living."
                },
                {
                    "name": "Better Ideas",
                    "url": "https://www.youtube.com/c/BetterIdeas",
                    "description": "Practical advice on self-improvement and mindset."
                },
                {
                    "name": "Ali Abdaal",
                    "url": "https://www.youtube.com/c/aliabdaal",
                    "description": "Productivity, learning, and personal growth strategies."
                },
                {
                    "name": "Nathaniel Drew",
                    "url": "https://www.youtube.com/c/NathanielDrew",
                    "description": "Thoughtful explorations of life, curiosity, and self-discovery."
                },
                {
                    "name": "The Minimalists",
                    "url": "https://www.youtube.com/user/TheMinimalists",
                    "description": "Minimalist living and intentional lifestyle discussions."
                },
                {
                    "name": "Rowena Tsai",
                    "url": "https://www.youtube.com/c/RowenaTsai",
                    "description": "Reflections on mindfulness, creativity, and personal growth."
                },
                {
                    "name": "Improvement Pill",
                    "url": "https://www.youtube.com/c/ImprovementPill",
                    "description": "Animated lessons on habits, discipline, and motivation."
                },
                {
                    "name": "Struthless",
                    "url": "https://www.youtube.com/c/Struthless",
                    "description": "Creative insights on mental health, productivity, and meaning."
                },
                {
                    "name": "Clark Kegley",
                    "url": "https://www.youtube.com/c/ClarkKegley",
                    "description": "Personal development advice focused on confidence and habits."
                },
                {
                    "name": "ProducerMichael",
                    "url": "https://www.youtube.com/c/ProducerMichael",
                    "description": "Luxury lifestyle videos featuring watches, mansions, and high-end living."
                },
                {
                    "name": "Outdoor Boys",
                    "url": "https://www.youtube.com/c/OutdoorBoys",
                    "description": "Family-oriented outdoor adventures featuring camping and survival."
                }
            ]
        },
        {
            "category": "Health & Fitness",
            "channels": [
                {
                    "name": "Jeff Nippard",
                    "url": "https://www.youtube.com/c/JeffNippard",
                    "description": "Evidence-based strength training and muscle science."
                },
                {
                    "name": "ATHLEAN-X™",
                    "url": "https://www.youtube.com/user/JDCav24",
                    "description": "Physical therapy–driven strength and injury prevention."
                },
                {
                    "name": "Renaissance Periodization",
                    "url": "https://www.youtube.com/c/RenaissancePeriodization",
                    "description": "Science-focused training, nutrition, and fat loss."
                },
                {
                    "name": "Doctor Mike",
                    "url": "https://www.youtube.com/c/DoctorMike",
                    "description": "Medical explanations of health, fitness, and wellness topics."
                },
                {
                    "name": "Physionic",
                    "url": "https://www.youtube.com/c/Physionic",
                    "description": "Exercise science explained with studies and data."
                },
                {
                    "name": "Strength Side",
                    "url": "https://www.youtube.com/c/StrengthSide",
                    "description": "Mobility, flexibility, and long-term joint health."
                },
                {
                    "name": "Natacha Océane",
                    "url": "https://www.youtube.com/c/NatachaOcéane",
                    "description": "Fitness experiments grounded in physiology and data."
                },
                {
                    "name": "Hybrid Calisthenics",
                    "url": "https://www.youtube.com/c/HybridCalisthenics",
                    "description": "Accessible bodyweight training for all levels."
                },
                {
                    "name": "Bob & Brad",
                    "url": "https://www.youtube.com/user/physicaltherapyvideo",
                    "description": "Practical physical therapy advice for pain and rehab."
                },
                {
                    "name": "Joseph Everett - WIL",
                    "url": "https://www.youtube.com/c/WhatILearned",
                    "description": "Research-based takes on health, diet, and habits."
                },
                {
                    "name": "Andrew Huberman",
                    "url": "https://www.youtube.com/c/AndrewHuberman",
                    "description": "Science-based videos on neuroscience and performance."
                }
            ]
        },
        {
            "category": "Society, Travel & Culture",
            "channels": [
                {
                    "name": "Geography Now",
                    "url": "https://www.youtube.com/user/GeographyNow",
                    "description": "Country profiles covering culture, geography, and politics."
                },
                {
                    "name": "RealLifeLore",
                    "url": "https://www.youtube.com/c/RealLifeLore",
                    "description": "Explains world events, history, and global systems clearly."
                },
                {
                    "name": "Wendover Productions",
                    "url": "https://www.youtube.com/c/Wendoverproductions",
                    "description": "Logistics, travel, and societal systems explained simply."
                },
                {
                    "name": "Vox Borders",
                    "url": "https://www.youtube.com/c/Vox",
                    "description": "Stories connecting culture, society, and geopolitics worldwide."
                },
                {
                    "name": "OverSimplified",
                    "url": "https://www.youtube.com/c/OverSimplified",
                    "description": "Animated historical summaries with cultural context."
                },
                {
                    "name": "Kings and Generals",
                    "url": "https://www.youtube.com/c/KingsandGenerals",
                    "description": "Military history and historical societies explained visually."
                },
                {
                    "name": "The Infographics Show",
                    "url": "https://www.youtube.com/c/TheInfographicsShow",
                    "description": "Animated explanations of global events, society, and culture."
                }
            ]
        },
        {
            "category": "Business & Career",
            "channels": [
                {
                    "name": "Harvard Business Review",
                    "url": "https://www.youtube.com/user/HarvardBusiness",
                    "description": "Insights on leadership, management, and organizational strategy."
                },
                {
                    "name": "Y Combinator",
                    "url": "https://www.youtube.com/c/ycombinator",
                    "description": "Startup advice from founders and experienced operators."
                },
                {
                    "name": "Stanford Graduate School of Business",
                    "url": "https://www.youtube.com/c/StanfordBusiness",
                    "description": "Lectures and talks on leadership and economics."
                },
                {
                    "name": "Company Man",
                    "url": "https://www.youtube.com/c/CompanyMan",
                    "description": "Explains business successes, failures, and brand strategy."
                },
                {
                    "name": "ColdFusion",
                    "url": "https://www.youtube.com/c/ColdFusion",
                    "description": "Stories about companies, innovation, and business history."
                },
                {
                    "name": "How Money Works",
                    "url": "https://www.youtube.com/c/HowMoneyWorks",
                    "description": "Clear explanations of how money, markets, and economic systems."
                },
                {
                    "name": "Patrick Boyle",
                    "url": "https://www.youtube.com/c/PatrickBoyleOnFinance",
                    "description": "Finance, investing, and market behavior explained calmly."
                },
                {
                    "name": "The Plain Bagel",
                    "url": "https://www.youtube.com/c/ThePlainBagel",
                    "description": "Investment and financial market education."
                },
                {
                    "name": "Economics Explained",
                    "url": "https://www.youtube.com/c/EconomicsExplained",
                    "description": "Big economic systems and concepts explained visually."
                },
                {
                    "name": "The Diary Of A CEO",
                    "url": "https://www.youtube.com/c/TheDiaryOfACEO",
                    "description": "Interviews and reflections on business, mindset, and entrepreneurial life."
                }
            ]
        },
        {
            "category": "Kids & Youth Education",
            "channels": [
                {
                    "name": "SciShow Kids",
                    "url": "https://www.youtube.com/user/scishowkids",
                    "description": "Science concepts explained simply for young learners."
                },
                {
                    "name": "CrashCourse Kids",
                    "url": "https://www.youtube.com/user/crashcoursekids",
                    "description": "Fun, animated lessons on science and engineering basics."
                },
                {
                    "name": "PBS Kids",
                    "url": "https://www.youtube.com/user/PBSKids",
                    "description": "Educational videos teaching math, science, and life skills."
                },
                {
                    "name": "Nat Geo Kids",
                    "url": "https://www.youtube.com/user/NationalGeographicKids",
                    "description": "Nature, animals, and geography for curious kids."
                },
                {
                    "name": "Art for Kids Hub",
                    "url": "https://www.youtube.com/user/ArtforKidsHub",
                    "description": "Step-by-step drawing lessons for children and families."
                },
                {
                    "name": "Numberblocks",
                    "url": "https://www.youtube.com/c/Numberblocks",
                    "description": "Math fundamentals taught through animated characters."
                },
                {
                    "name": "MinuteEarth",
                    "url": "https://www.youtube.com/user/minuteearth",
                    "description": "Short science stories about the natural world."
                },
                {
                    "name": "Homeschool Pop",
                    "url": "https://www.youtube.com/c/HomeschoolPop",
                    "description": "Simple lessons on history, science, and geography."
                },
                {
                    "name": "Simple History",
                    "url": "https://www.youtube.com/c/SimpleHistory",
                    "description": "Easy-to-follow animated history for younger audiences."
                }
            ]
        }
    ];
    // EMBEDDED DATA END

    let allChannels = [];

    // Flatten channels
    if (allData && allData.length > 0) {
        allData.forEach(cat => {
            cat.channels.forEach(channel => {
                allChannels.push({
                    ...channel,
                    category: cat.category
                });
            });
        });

        initFilters();
        renderContent(allChannels);
        initTilt();
    } else {
        contentGrid.innerHTML = '<p style="text-align:center; color: #555;">No signals found.</p>';
    }

    function initFilters() {
        if (!filtersWrapper) return;
        const categories = allData.map(d => d.category);

        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'tab-btn';
            btn.dataset.filter = cat;
            btn.textContent = cat.split('(')[0].trim();
            btn.addEventListener('click', () => handleFilterClick(btn, cat));
            filtersWrapper.appendChild(btn);
        });

        const allBtn = document.querySelector('[data-filter="all"]');
        if (allBtn) {
            allBtn.addEventListener('click', (e) => {
                handleFilterClick(e.target, 'all');
            });
        }
    }

    function handleFilterClick(activeBtn, filter) {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        activeBtn.classList.add('active');

        if (filter === 'all') {
            renderContent(allChannels);
        } else {
            const filtered = allChannels.filter(ch => ch.category === filter);
            renderContent(filtered);
        }
    }

    function renderContent(channels) {
        if (!contentGrid) return;
        contentGrid.innerHTML = '';

        if (channels.length === 0) {
            contentGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: #555; padding: 2rem;">No channels found matching criteria.</div>';
            return;
        }

        channels.forEach((channel, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.animation = `fadeIn 0.5s ease backwards ${index * 0.05}s`;

            card.innerHTML = `
                <div class="card-top">
                    <span class="badge">${channel.category.split('(')[0].trim()}</span>
                    <h3>${channel.name}</h3>
                    <p>${channel.description}</p>
                </div>
                <a href="${channel.url}" target="_blank" class="card-link">
                    Visit Channel
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
            `;

            contentGrid.appendChild(card);
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();

            if (term === '') {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                const allBtn = document.querySelector('[data-filter="all"]');
                if (allBtn) allBtn.classList.add('active');
                renderContent(allChannels);
            } else {
                const filtered = allChannels.filter(ch =>
                    ch.name.toLowerCase().includes(term) ||
                    ch.description.toLowerCase().includes(term) ||
                    ch.category.toLowerCase().includes(term)
                );
                renderContent(filtered);
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            }
        });
    }

    if (randomBtn) {
        randomBtn.addEventListener('click', () => {
            if (allChannels.length > 0) {
                const randomChannel = allChannels[Math.floor(Math.random() * allChannels.length)];
                window.open(randomChannel.url, '_blank');
            }
        });
    }

    function initTilt() {
        if (typeof VanillaTilt !== 'undefined') {
            VanillaTilt.init(document.querySelectorAll(".card"), {
                max: 5,
                speed: 400,
                glare: true,
                "max-glare": 0.1,
                scale: 1.01
            });
        }
    }
});
