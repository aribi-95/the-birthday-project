import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import makiImg from "../assets/maki.png";

export default function Home() {
    return (
        <div className="home-container">
            <div className="confetti-wrapper">
                <Confetti
                    className="confetti"
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={true}
                />
            </div>

            <h1 className="home-title">*mooo*</h1>
            <h3 className="home-subtitle">
                <u>Translation:</u>
                <br />
                🎉 Happy birthday! 🎉
                <br />
                <i>(Also, I demand pets)</i>
            </h3>

            <img className="maki-img" src={makiImg} alt="Maki the cat" />

            <div className="home-text">
                <p>
                    Happy birthday to my favorite human, my beloved idiot
                    sandwich, and hands down the best cat parent I’ve ever met.
                </p>
                <p>
                    Since you’re spending this birthday far away from your two
                    little balls of chaos, I figured I’d bring them to you —
                    well, kinda.
                </p>
                <p>
                    Go ahead, put those legendary gamer reflexes to the test in
                    the game up in the navbar. <br /> Catch Mikan while he’s
                    inside the central circle — or else he’ll bless your screen
                    with some premium vomit.
                </p>
                <p>
                    Prove to me that even a rusty, aging sloth like you still
                    has some speed left. <br /> Come on, show me what you’ve
                    got… if you’re not too lazy, that is.
                </p>
            </div>
        </div>
    );
}
