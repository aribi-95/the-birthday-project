import { useState } from "react";

const wisdomPills = [
    "You’re not old, you’re just a deprecated version of yourself.",
    "If life gives you lemons, squeeze them in your own eye. It’s more fun.",
    "Age gracefully? Nah, just rot slower.",
    "MMMMMMMMMMMMMMMMMMMMIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII (intentionally broken interface, more annoying this way)",
    "If it’s not broken, take it apart anyway. Maki would.",
    "CSS is pain. Accept it. Suffer beautifully.",
    "You can’t debug your life with console.log, sadly.",
    "Yes, you deserve love. No, I don’t know why.",
    "Eat something before you die and respawn, genius.",
    "Sleep is for mortals. Oh wait… you *are* mortal.",
    "If you ever feel useless, remember: you can always reach the top shelf nobody else can.",
    "Summon thralls, not depression.",
    "You’re not a vampire. Daylight won’t kill you. Probably.",
    "If Mikan pukes, consider it free home décor.",
    "MMMMMMIIIIIIIIIIIIIIIII",
    "Don’t forget to shower. Even necromancers stink.",
    "Maki’s *mooo* is the only praise you’ll ever need.",
    "Dark humor: cheaper than therapy, twice as fun.",
    "You’re my favorite idiot sandwich. Now go eat something.",
    "Imagine this: you, saying something sweet. Shocking. Revolutionary.",
    "Keep that fancy mustache — Mikan needs more velvet to rub on.",
    "Raise skeletons, not expectations.",
    "When in doubt, salame al cioccolato.",
    "MMMIIII",
    "Guild Wars is eternal, but so is your unpaid sleep debt.",
    "Love your cats. They’re the only ones not judging… much.",
    "Depressed? Pet a cat. Or two. Or twelve.",
    "You’re not lazy, you’re energy-efficient.",
    "Be the chaos you want to see in the world.",
];

export default function About() {
    const [index, setIndex] = useState(0);

    const nextAdvice = () => {
        setIndex((prev) => (prev + 1) % wisdomPills.length);
    };

    return (
        <>
            <div className="about-container">
                <p>
                    This website was lovingly crafted as a gift for your 32
                    <sup>nd</sup> birthday by your failed aspiring developer
                    girlfriend.
                </p>
                <p>Thought the underwear was the real present? Pffft.</p>
            </div>

            <hr />

            <div className="advice-container">
                <h2>
                    <span>Bonus gift:</span>
                    <br />
                    <i>Wisdom pills for tired old sloths</i>
                </h2>

                <div
                    className="advice-box"
                    style={{
                        margin: "2rem auto",
                        padding: "1.5rem",
                        maxWidth: "500px",
                        fontSize: "1.3rem",
                        fontStyle: "italic",
                        backgroundColor: "#fff3e0",
                        borderRadius: "12px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    }}
                >
                    "{wisdomPills[index]}"
                </div>

                <button
                    className="next-advice-button"
                    onClick={nextAdvice}
                    style={{
                        padding: "10px 20px",
                        fontSize: "1rem",
                        cursor: "pointer",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "orange",
                        color: "white",
                        fontWeight: "bold",
                        boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
                    }}
                >
                    Show me another
                </button>
            </div>
        </>
    );
}
