import React from "react";
import './welcome.css';
import ImageOne from './image_one.jpg';
import ImageTwo from './image_two.jpg';
import ImageThree from './image_three.jpg';

export default function Welcome()
{
    
    return(
        <>
            <div className="title-section">
            <div className="title-text">
                <div className="token-symbol">$RIZZOLUTION</div>
                <div className="token-name"></div>
            </div>
            <div className="title-image">
                <img src={ImageOne} />
            </div>
            <div className="title-desc-container">
                <div className="title-desc">
                    A memecoin for the degens who missed every moonshot—because someone&apos;s gotta HODL the Ls
                </div>
            </div>
        </div>
        <div className="buy-section">
            <div className="buy-now-button-container">
                <button
                    className="buy-now-button"
                    role="button"
                    onclick="goToLink('dexscreener.com/solana/br1ayy7pkljtrqfohjtvhf3phbkrntzad3zvk6bk8vxp')"
                >
                    Buy $RIZZOLUTION
                </button>
            </div>
            <div className="contract-address">CA: Ei2GwoXC6HKKseWrfJ6DwxJPZp3S12cgzz2ebi23pump</div>
        </div>
        <div className="roadmap-section">
  <div className="roadmap-meme">
    <img src={ImageTwo} alt="Roadmap Meme" />
  </div>
  <div className="spacer"></div>
  <div className="roadmap-text-container">
    <div className="roadmap-header">ROAD MAP</div>
    <div className="roadmap-text">
      <div className="roadmap-section-header">Phase 1: Ignite the Rizz</div>
      <div className="roadmap-section-item">
        <div>-</div>
        <div>Stealth launch. No bots, only vibes.</div>
      </div>
      <div className="roadmap-section-item">
        <div>-</div>
        <div>Meme warfare: recruit degens, roast NPCs.</div>
      </div>
      <div className="roadmap-section-header">Phase 2: Max Rizz Mode</div>
      <div className="roadmap-section-item">
        <div>-</div>
        <div>TikTokers + shitposters = trend domination.</div>
      </div>
      <div className="roadmap-section-item">
        <div>-</div>
        <div>Rizz so hard even NPCs FOMO.</div>
      </div>
      <div className="roadmap-section-item">
        <div>-</div>
        <div>10M MCAP or bust.</div>
      </div>
      <div className="roadmap-section-header">Phase 3: Giga-Rizz Era</div>
      <div className="roadmap-section-item">
        <div>-</div>
        <div>Memes go mainstream. Grandma’s aping in.</div>
      </div>
      <div className="roadmap-section-item">
        <div>-</div>
        <div>Proof of Rizz NFTs. Stay drippy, stay winning.</div>
      </div>
      <div className="roadmap-section-header">Phase 4: Final Rizzolution</div>
      <div className="roadmap-section-item">
        <div>-</div>
        <div>$RIZZOLUTION at $1 dream or nothing. SHIB who?</div>
      </div>
      <div className="roadmap-section-item">
        <div>-</div>
        <div>Retire more degens than your boss ever could.</div>
      </div>
    </div>
  </div>
</div>

        <div className="socials-section">
            <div className="socials-header">Follow up with the Rizz!</div>
            <div className="socials-icon-container">
                <button role="button" onclick="goToLink('t.me/RIZZOLUTIONCTO')">
                    <img src="./images/telegram-icon.svg" className="telegram-icon" />
                </button>
                <button role="button" onclick="goToLink('x.com/RIZZOLUTION_')">
                    <img src="./images/x-icon.svg" className="x-icon" />
                </button>
            </div>
        </div>
        <div className="degen-images-section">
            <div className="degen-image tooltip">
                <img src={ImageThree}/>
            </div>
        </div>
        </>
    )

}