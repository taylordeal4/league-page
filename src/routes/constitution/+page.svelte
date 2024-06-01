<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneOneOne, oneTwo, oneTwoOne, oneTwoTwo, oneTwoThree, oneTwoFour, oneTwoFive, oneThree;
    let two, twoOne, twoTwo, twoThree;
    let three, threeOne;
    let four, fourOne, fourTwo;
    let five, fiveOne;
    let six, sixOne, sixTwo, sixThree;
    let seven, sevenOne, sevenTwo, sevenThree;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">A LEAGUE OF OUR OWN CONSTITUTION</h1>
    
    <h2 class="noUnderscore">TABLE OF CONTENTS</h2>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Section 1: The Commissioner</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneOne)}>1.1 Agreement</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneTwo)}>1.2 Responsibilities</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneThree)}>1.3 Assistant to the Commissioner</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneFour)}>1.4 Disciplinary Actions</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneFive)}>1.5 Removal</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneSix)}>1.6 Review of Commissioner Decisions</h4>

    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Section 2: League Communications</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>2.1 Sleeper App</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoTwo)}>2.2 League Chat</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoThree)}>2.3 Private Channel</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Section 3: League Members</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>3.1 League Spots</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeTwo)}>3.2 Managers</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeThree)}>3.3 Eligibility</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeFour)}>3.4 Suspension/Removal</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeFive)}>3.5 Offseason Voting</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeSix)}>3.6 Regular Season Voting</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeSeven)}>3.7 Minimum Voting Requirements</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeEight)}>3.8 Pre-season Amendments</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeNine)}>3.9 Amendments In-Season</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeTen)}>3.10 Withdrawl of Managers</h4>

    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Section 4: League Settings</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>4.1 Format</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourTwo)}>4.2 Rosters</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourThree)}>4.3 Scoring</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourFour)}>4.4 Divisions</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourFive)}>4.5 Regular Season Schedule</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourSix)}>4.6 Wins & Tiebreakers</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourSeven)}>4.7 Free Agent Acquisition</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourEight)}>4.8 Trades</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourNine)}>4.9 Forbidden Trades</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourTen)}>4.10 Trade Deadline</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Section 5: League Finances</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.1 Entry Fee</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveTwo)}>5.2 Payments</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveThree)}>5.3 Non-Payment</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveFour)}>5.4 End of Season Payouts</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveFive)}>5.5 Additional Fees</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>Section 6: Bonus Categories</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixOne)}>6.1 Categories</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>6.2 Weekly Challenge Bonus</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>6.3 Weekly High Score Bonus</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixFour)}>6.4 Squid Game</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Section 7: The Draft</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>7.1 Scheduling</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>7.2 Format</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>7.3 Absenteeism</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixFour)}>7.4 Draft Order Selection</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(eight)}>Section 8: Roster Management</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightOne)}>8.1 Active Roster</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightTwo)}>8.2 Roster Positions</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightThree)}>8.3 Position Designation</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightFour)}>8.4 Bench</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightFive)}>8.5 IR</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightSix)}>8.6 Roster Limits</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightSeven)}>8.7 Roster Lock</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(nine)}>Section 9: The Playoffs</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineOne)}>9.1 Playoff Bracket</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineTwo)}>9.2 Qualifying</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineThree)}>9.3 Division Winners</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineFour)}>9.4 League Championship</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineFive)}>9.5 Toilet Bowl Bracket</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineSix)}>9.6 League Champion Trophy</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineSeven)}>9.7 Championship Ring</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineEight)}>9.8 Toilet Bowl Trophy</h4>


   <h3 class="noUnderscore clickable" on:click={() => goToSection(ten)}>Section 10: Offenses</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(tenOne)}>10.1 Nature of Offense</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(tenTwo)}>10.2 Commencement of Offense Proceedings</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(tenThree)}>10.3 Offenses</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(tenFour)}>10.4 Penalties</h4>
    
    <hr />

<h2 class="sectionHeading" bind:this={one}>Section 1: The Commissioner</h2>
    
    <h3 class="subSectionHeading" bind:this={oneOne}>1.1 Agreement</h3>
    
    <p>Taylor Deal, hereinafter referred to as “The Commissioner” has accepted the responsibility and privilege of serving the league members of A League of Our Own and to oversee and administer League activities.</p>
    <p>Now, therefore, in consideration of the mutual covenants and promises contained herein, the Participants agree to abide by the rules and regulations established by the Commissioner for the orderly and fair conduct of the League.</p>
    <p>This Agreement sets forth the terms and conditions governing the Participants’ involvement in the League under the leadership of the Commissioner.</p>

    <h3 class="subSectionHeading" bind:this={oneTwo}>1.2 Responsibilities</h3>
    
    <p>The functions of the Commissioner shall include:</p>
    <div class="subBlock">
    <p>1) To serve as the Chief Administrative, Dispute Resolution and Financial Officer of A League of Our Own.</p>
    <p>2) To appoint such persons to assist in the execution of the duties of the Commissioner as may be necessary in the Commissioner’s exclusive direction.</p>
    <p>3) To make decisions, or to appoint persons to make decisions, in respect of rule interpretations, administrative functions, financial transactions or disciplinary action, as may be necessary.</p>
    </div>

    <h3 class="subSectionHeading" bind:this={oneThree}>1.3 Assistant to the Commissioner</h3>

    <p>The Assistant to the Commissioner is a league member who serves at the pleasure of the Commissioner to provide counsel and assist with league administration. The Assistant to the Commissioner may act in place of the Commissioner, especially in cases of the Commissioner’s absence or conflict of interest.</p>
    <div class="subBlock">
    <p>1) Assistant Selection: Members in the league may volunteer to fill the role of the Assistant to the Commissioner. On Draft Day, if more than one person volunteers – the remaining members will vote to determine who will fill the role for the season.</p>
    </div>  

<h2 class="sectionHeading" bind:this={two}>Section 2: League Communications</h2>
    
    <h3 bind:this={twoOne}>2.1 Sleeper App</h3>
    <p>A League of Our Own is hosted on the Sleeper app. The league rules as listed below should align with the league settings on Sleeper. In any case where the league rules as listed here do not align with the rules as set up in Sleeper, the settings in Sleeper will take precedence if the league is mid-season. If the inconsistency is brought to the Commissioner’s attention in the offseason, these rules will be brought into alignment with the Sleeper settings.</p>

    <h3 bind:this={twoTwo}>2.2 League Chat</h3>
    <p>All league communications will be posted to the Sleeper app League Chat via the Commissioner. Members are to respond to league communications, when needed, at their earliest convenience to ensure the needs of the league are met – please confirm your notifications are set so you don’t miss any communication deadlines!</p>
    <div class="subBlock">
    <p>1) Off-Season Chat: During the off-season, if members do not respond to league communications posted in the Sleeper app, the Commissioner will send a text to remind them about current polls, questions, or reminders to ensure all information is adequately recorded.</p>
    </div>  

    <h3 bind:this={twoThree}>2.3 Private Channel</h3>
    <p>The league will have a private Channel on the Sleeper App to house the following: League Rules, League Voting, Weekly Challenge Payouts, and Weekly Updates. Members will be invited to join the private Channel via the Commissioner.</p>    
   
<h2 class="sectionHeading" bind:this={three}>Section 3: League Members</h2>

    <h3 bind:this={threeOne}>3.1 League Spots</h3>
    <p>A League of Our Own has a total of 10 manager spots for each season.</p>

    <h2 class="sectionHeading" bind:this={four}>Section 4: League Settings</h2>
    
    <h3 bind:this={fourOne}>4.1 Format</h3>
    <p>A League of Our Own shall be a 10-team head-to-head league with a Half Point Per Reception (PPR) format hosted by Sleeper.</p>    
  
    <h3 bind:this={fourTwo}>4.2 Rosters</h3>
    <p>Each team will have 17 available positions on their active roster. Roster positions are defined as follows:</p>
  <ul>
        <li>QB (2)</li>
        <li>RB (2)</li>
        <li>WR (3)</li>
        <li>TE (1)</li>
        <li>FLEX - WR/RB/TE (2)</li>
        <li>K (1)</li>
        <li>DEF (1)</li>
        <li>BENCH (5)</li>
        <li>IR (2)</li>
    </ul>

 <h2 class="sectionHeading" bind:this={five}>Section 5: League Finances</h2>
    
    <h3 bind:this={fiveOne}>5.1 Entry Fee</h3>
    <p>Dues for participation in A League of Our Own are hereby established. The annual league entry fee is $75 US Dollars for the 2024-25 season. Increases to the league dues will be voted on at the beginning of each season. Any increases will be applied to the playoff pool and survivor/bonus pools. The allocation of collective dues for 2024 is as follows:</p>
    <ul>
        <li>Playoff Pool: $450</li>
        <li>Squid Game: $50</li>
        <li>Weekly Challenge Bonus: $70</li>
        <li>Weekly High Score Bonus: $70</li>
        <li>Trophies: $110</li>
    </ul>

<h2 class="sectionHeading" bind:this={six}>Section 6: Bonus Categories</h2>
    
    <h3 bind:this={sixOne}>6.1 Categories</h3>
    <p>Bonus payouts will fall under three categories:</p>    
   <ul>
        <li>Weekly Challenge Bonus</li>
        <li>Weekly High Score Bonus</li>
        <li>Squid Game Winner</li>
    </ul>
    <p>Bonus categories can adjust in format and/or payout from year to year with league majority vote approval. All changes must be agreed upon before the start of the regular season. All bonus cash will be paid out at the end of each season.</p>

    <h3 bind:this={sixTwo}>6.2 Weekly Challenge Bonus</h3>
    <p>A $5 bonus prize will be awarded for the following weekly categories:</p>    
   <ul>
        <li>Week 1: Revenge Week - Largest margin of victory</li>
        <li>Week 2: The Replacements - Single highest scoring non-starter</li>
        <li>Week 3: Beast Mode - Most points by one active RB</li>
        <li>Week 4: Lucky Duck - Lowest score in a win</li>
        <li>Week 5: Uncle Rico - Most points by one active QB</li>
        <li>Week 6: Horseshoes & Hand Grenades - Narrowest margin of victory</li>
        <li>Week 7: Stevie Wonder - Starting QB with teh mist interceptions</li>
        <li>Week 8: Gotta Catch'em All - Most points by one active WR</li>
        <li>Week 9: Next Time Tiger - Highest score in a loss</li>
        <li>Week 10: I'm Wirey - Most points by an active K</li>
        <li>Week 11: One-Two Punch - Highest combined total of your RB1 and RB2 positions</li>
        <li>Week 12: Left Side, Strong Side - Most points by active DEF</li>
        <li>Week 13: The Secuirty Blanet - Most points by one active TE</li>
        <li>Week 14: You're Killing Me Smalls - Winning team with the lowest scoring active player</li>
    </ul>
        <p>If a tie occurs, the winner of the Weekly Challenge will be determined by Most Team Points scored during that week.</p>

    <h3 bind:this={sixThree}>6.3 Weekly High Score Bonus</h3>
        <p>A $5 bonus prize will be awarded each week to the team with the highest fantasy score during Weeks 1-14.</p>
    
<h2 class="sectionHeading" bind:this={seven}>Section 7: The Draft</h2>
    
    <h3 bind:this={sevenOne}>7.1 Scheduling</h3>
        <p>The draft is scheduled with input from league members, and the date and time are ultimately determined by the Commissioner. The draft is typically held during Labor Day weekend.</p>    
 
    <h3 bind:this={sevenTwo}>7.2 Format</h3>
        <p>The draft will be an offline, in-person snake format through seventeen rounds. Owner’s will have three (3) minutes to select their pick. When time expires, expect heckling from other league members. Only in extreme cases will we skip the owner who is not making their selection.</p> 
    
    <h3 bind:this={sevenThree}>7.3 Absenteeism</h3>
        <p>Draft attendance is strongly encouraged, yet optional. Participation, however, is mandatory. If a team manager cannot attend or participate, it is their responsibility to secure a proxy or draft their team remotely on draft day. A lack of participation for two or more consecutive seasons will result in disciplinary action. IF a manager is unable to attend, they may:</p>
     <div class="subBlock">
        <p>1) Login remotely to the draft via FanDraft to select their picks in real time along with the in-person draft. Member can also request to be present on Facetime/Zoom/Skype for the duration of the in-person Draft Day. </p>
        <p>2) Secure a proxy and send them to the draft. Proxys cannot draft remotely.</p>
    </div>
        <p>If neither of these options can be met – their roster will be auto picked by a bot. </p>

    <h3 bind:this={sevenThree}>7.3 Draft Order Selection</h3>

        <p>The Draft Order will be determined 1-2 week(s) before the LIVE in-person Draft Party. Teams will be seeded one (1) through ten (10) at random to determine their order in the draft.</p>

<h2 class="sectionHeading" bind:this={eight}>Section 8: Roster Management</h2>

</div>
