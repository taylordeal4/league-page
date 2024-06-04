<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneOneOne, oneTwo, oneTwoOne, oneTwoTwo, oneTwoThree, oneTwoFour, oneTwoFive, oneThree, oneFour, oneFive, oneSix;
    let two, twoOne, twoTwo, twoThree;
    let three, threeOne, threeTwo, threeThree, threeFour, threeFive, threeSix, threeSeven, threeEight, threeNine, threeTen;
    let four, fourOne, fourTwo, fourThree, fourFour, fourFive, fourSix, fourSeven, fourEight, fourNine, fourTen;
    let five, fiveOne, fiveTwo, fiveThree, fiveFour, fiveFive;
    let six, sixOne, sixTwo, sixThree, sixFour;
    let seven, sevenOne, sevenTwo, sevenThree, sevenFour;
    let eight, eightOne, eightTwo, eightThree, eightFour, eightFive, eightSix, eightSeven;
    let nine, nineOne, nineTwo, nineThree, nineFour, nineFive, nineSix, nineSeven, nineEight;
    let ten, tenOne, tenTwo, tenThree, tenFour;

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
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenTwo)}>7.2 Format</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenThree)}>7.3 Absenteeism</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenFour)}>7.4 Draft Order Selection</h4>


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
    
    <p>Taylor, hereinafter referred to as “The Commissioner” has accepted the responsibility and privilege of serving the league members of A League of Our Own and to oversee and administer League activities.</p>
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

    <h3 class="subSectionHeading" bind:this={oneFour}>1.4 Disciplinary Actions</h3>
    <p>In the case of conduct deemed by the Commissioner not to be in the best interests of A League of Our Own disciplinary actions against team managers may include any one or more of the following:</p>
    <div class="subBlock">
    <p>1) A reprimand.</p>
    <p>2) A formal warning.</p>
    <p>3) A forfeit of a specific draft pick.</p>
    <p>4) Suspension or removal of a Manager from A League of Our Own.</p>
    <p>5) Cash Penalty determined by the Commissioner and approved by a majority league vote; or such other actions as the Commissioner may deem appropriate.</p>
    </div>  

    <h3 class="subSectionHeading" bind:this={oneFive}>1.5 Removal</h3>
    <p>The Commissioner does not have autonomous rule over the league and may be removed from office through a unanimous vote by league members.</p>

    <h3 class="subSectionHeading" bind:this={oneSix}>1.6 Review of Commissioner Decisions</h3>
    <p>Any action of the Commissioner taken pursuant to this Article, regardless of whether or not it is specifically designated as “reviewable”, may be overturned under the following process:</p>
    <div class="subBlock">
    <p>1) Team managers interested in the outcome of the Commissioner’s decision (i.e., the team that would receive the direct benefit of an overturned vote and any other team(s) directly involved in the challenged transaction and/or act) are deemed interested parties and are not eligible to participate in a vote to overturn that decision. For further clarity, each team’s interest in the general competitiveness of each other team shall not constitute an “interest” in the outcome of a decision.</p>
    <p>2) One-third of team managers eligible to cast a vote to overturn must agree to a petition for reconsideration or a vote upon the challenged decision. That petition must be made within one week of the formal posting of the challenged decision on the league chat of the Sleeper app, by tagging the Commissioner. For further clarity, without such a petition being made, there shall be no review of a Commissioner’s decision.</p>
    <p>3) If the Commissioner does not reconsider the decision, a vote shall be held.</p>
    <p>4) The Commissioner and all interested parties may make such representations to the team managers as they may wish in support of their preferred outcome.</p>
    <p>5) The decision of the Commissioner may be overturned only upon a two-thirds majority vote of eligible team managers.</p>
    <p>6) If such a majority is not achieved, the decision of the Commissioner stands.</p>
    <p>7) If such a majority is achieved, the decision of the Commissioner is vacated. For further clarity, this shall not preclude further action by the Commissioner upon the same challenged act.</p>
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

    <h3 bind:this={threeTwo}>3.2 Managers</h3>
    <p>The managers of each team for the 2024-25 season are established as follows:</p>
<ul>
        <li>Taylor (Commissioner)</li>
        <li>Robby</li>
        <li>Emily</li>
        <li>Jake</li>
        <li>Nick</li>
        <li>Jerry</li>
        <li>Matt</li>
        <li>Randy</li>
        <li>Denisa</li>
        <li>Mustafah</li>
    </ul>

    <h3 bind:this={threeThree}>3.3 Eligibility</h3>
    <p>All interested members from the previous season have the right to retain their team as long as they have not been suspended or removed by the Commissioner.</p>

    <h3 bind:this={threeFour}>3.4 Suspension/Removal</h3>
    <p>Suspensions and or removals will be instituted by the Commissioner based on a majority league vote. The league vote excludes the manager in question.</p>

    <h3 bind:this={threeFive}>3.5 Offseason Voting</h3>
    <p>Each offseason each manager may be required to cast votes in respect of such matters as would include, but not be limited to:</p>
    <div class="subBlock">
    <p>1) The election of a Commissioner.</p>
    <p>2) The amount of the annual league dues.</p>
    <p>3) Revisions to bonus categories as defined in Section 4.1.</p>
    <p>4) The amendment of this Constitution in respect of matters that shall include but not be limited to:</p>
    </div>  
    <p>All of which shall require a simple majority vote by means of a poll on the Sleeper app or in person so long as all team managers are represented; with the exception of subsection (d.), which shall require a two-thirds majority vote. All votes will remain open for three (3) days after the creation of the poll. Upon expiration of the voting window all votes will be counted, and a ruling will be made by the Commissioner pursuant to the authority granted him/her in Section 1.2.</p>

    <h3 bind:this={threeSix}>3.6 Regular Season Voting</h3>
    <p>During the regular season, managers may be required to cast votes in respect of such matters as would include, but are not limited to:</p>
    <div class="subBlock">
    <p>1) Referenda or opinion polls as required by the Commissioner for his own guidance; and</p>
    <p>2) Reviews of the Commissioner’s decisions within the regular season.</p>
    </div>  

    <h3 bind:this={threeSeven}>3.7 Minimum Voting Requirements</h3>
    <p>There is no minimum quorum or representation requirement for a regular season, offseason, or Constitutional Amendment vote.</p>

    <h3 bind:this={threeEight}>3.8 Pre-season Amendments</h3>
    <p>Any manager may suggest rule modifications to the Commissioner before/at the league’s Draft Day. A simple majority vote of all managers may amend this constitution.</p>

    <h3 bind:this={threeNine}>3.9 Amendments In-Season</h3>
    <p>This Constitution may not be amended during the Regular Season except by unanimous vote of the team managers by means of a poll on the Sleeper app or in person. All votes will remain open for three (3) days after the creation of the poll. Upon expiration of the voting window all votes will be counted, and a ruling will be made by the Commissioner pursuant to the authority granted him/her in Section 1.2.</p>

    <h3 bind:this={threeTen}>3.10 Withdrawl of Managers</h3>
    <p>Managers may withdraw from A League of Our Own at any time between the commencement of the offseason and August 15th within that offseason without penalty. Replacement managers will be found and appointed by the Commissioner.</p>

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

    <h3 bind:this={fourThree}>4.3 Scoring</h3>
    <p>Passing</p>
 <ul>
        <li>Passing Yards: +0.04 per yard (25 yards = 1 pt)</li>
        <li>Passing TD: 4</li>
        <li>2-Pt Conversion: 2</li>
        <li>Pass Intercepted: -2</li>
        <li>Pick 6 Thrown: -4</li>
        <li>Pass Completed: 0.10</li>
        <li>QB Sacked: -1</li>
        <li>40+ Yard Pass TD Bonus: 2</li>
    </ul>
    <p>Rushing</p>
 <ul>
        <li>Rushing Yards: +0.10 per yard (10 yards = 1 pt)</li>
        <li>Rushing TD: 6</li>
        <li>2-Pt Conversion: 2</li>
        <li>Rush Attempts: 0.10</li>
        <li>QB Sacked: -1</li>
        <li>40+ Yard Rush TD Bonus: 2</li>
    </ul>
    <p>Receving</p>
 <ul>
        <li>Reception: 0.50</li>
        <li>Recieving Yards: +0.10 per yard (10 yards = 1 pt)</li>
        <li>Receiving TD: 6</li>
        <li>2-Pt Conversion: 2</li>
        <li>40+ Yard Reception TD Bonus: 2</li>
    </ul>
    <p>Kicking</p>
 <ul>
        <li>PAT Made: 1</li>
        <li>PAT Missed: -3</li>
        <li>FG Made (0-39 yards): 3</li>
        <li>FG Made (40-49 yards): 4</li>
        <li>FG Made (50+ yards): 5</li>
        <li>FG Missed (0-39 yards): -3</li>
        <li>FG Missed (40+ yards): -1</li>
    </ul>
    <p>Defense</p>
 <ul>
        <li>Defense TD: 6</li>
        <li>Points Allowed (14-20): -1</li>
        <li>Points Allowed (21-27): -2</li>
        <li>Points Allowed (28-34): -3</li>
        <li>Points Allowed (35+): -4</li>
        <li>Points Per Point Allowed: -0.10</li>
        <li>350-399 Total Yards Allowed: -1</li>
        <li>400-449 Total Yards Allowed: -2</li>
        <li>450-499 Total Yards Allowed: -3</li>
        <li>500-549 Total Yards Allowed: -4</li>
        <li>550+ Total Yards Allowed: -5</li>
        <li>3 and Out: 0.25</li>
        <li>4th Down Stop: 0.50</li>
        <li>Sacks: 1</li>
        <li>Interceptions: 2</li>
        <li>Fumble Recovery: 1</li>
        <li>Tack for Loss: 0.50</li>
        <li>Safety: 4</li>
        <li>Forced Fumble: 1</li>
        <li>Blocked Kick: 3</li>
        <li>Pass Defended: 0.25</li>
        <li>2-Pt Conversion Returns: 4</li>
    </ul>
    <p>Special Teams</p>
<ul>
        <li>Special Teams Player TD: 6</li>
        <li>Special Teams Player Forced Fumble: 1</li>
        <li>Special Teams Player Fumble Recovery: 1</li>
        <li>Player Punt Return Yards: +0.04 per yard (25 yards = 1 pt)</li>
        <li>Player Kick Return Yards: +0.04 per yard (25 yards = 1 pt)</li>
    </ul>
    <p>Misc.</p>
<ul>
        <li>Fumble Lost: -2</li>
        <li>Fumble Recovery TD: 6</li>
    </ul>

    <h3 bind:this={fourFour}>4.4 Divisions</h3>
    <p>The league is organized into two divisions made up of five teams each.</p>
    <div class="subBlock">
    <p>1) The Divisions will be decided based on the results of the Draft Order. Teams will be seeded one through 10 based on results, all odd numbered teams will be placed in Division 1. All even numbered teams will be placed in Division 2.</p>
    </div>  

    <h3 bind:this={fourFive}>4.5 Regular Season Schedule</h3>
    <p>The league's regular season begins Week 1 and ends Week 14 of the NFL season. The Commissioner allows Sleeper to set the schedule automatically, except for Week 1 – this will be Revenge Week. Sleeper sets the regular season schedule on the following principle: each team plays every divisional team twice, and each non-divisional team once. There is no tiebreaker for regular season matchups.</p>

    <h3 bind:this={fourSix}>4.6 Wins & Tiebreakers</h3>
    <p>Weekly head-to-head matchups are won by the team with the higher point total for that given week. Matchups that end in a tie are recorded as a tie except for playoff and Championship games as described in Section 9.2.</p>

    <h3 bind:this={fourSeven}>4.7 Free Agent Acquisition</h3>
    <p>Free Agent players are acquired via weekly Free Agent Waiver Wire. Waiver wire order is determined by a continual rolling list. Waivers process and clear at 2 a.m. on Wednesdays.</p>
    <div class="subBlock">
    <p>1) When players are dropped after waivers, players are available to pick up immediately until the next week’s game beings.</p>
    <p>2) Waiver claims are processed in waiver priority order and each successful claim moves a manager to the end of the waiver priority list.</p>
    <p>3) There is no season acquisition limit. Each team manager is entitled to make an unlimited number of trades and/or add/drops each season.</p>
    </div>  

    <h3 bind:this={fourEight}>4.8 Trades</h3>
    <p>Any team manager may engage in any number of transactions with any number of other team managers at any time, provided that the transactions would not be contrary to the best interests of fantasy football. Each trade, once submitted, shall be subject to a one-day review period which the Commissioner will review, before processing the trade. Only the Commissioner can veto a trade, but only in extremely rare cases where a trade cannot be reasonably defended as mutually beneficial from the perspective of both parties.</p>
    <div class="subBlock">
    <p>1) If the Commissioner is involved in the trade, the Assistant to the Commissioner will act in lieu of the Commissioner and review the trade. If the trade includes the Commissioner and Assistant to the Commissioner, the trade will be reviewed by a random league member.</p>
    </div>  

    <h3 bind:this={fourNine}>4.9 Forbidden Trades</h3>
    <p>Draft picks and “players to be named later” are non-transferable and may not form any part of the value in a transaction.</p>

    <h3 bind:this={fourTen}>4.10 Trade Deadline</h3>
    <p>The deadline for making trades is set to Wednesday, at 11:59 p.m., during the 11th week of the season.</p>

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

    <h3 bind:this={fiveTwo}>5.2 Payments</h3>
    <p>The $75 entry fee shall be collected via Venmo by August 16th.</p>

    <h3 bind:this={fiveThree}>5.3 Non-Payment</h3>
    <p>Failure to submit league dues will result in suspension or removal from the league.</p>

    <h3 bind:this={fiveFour}>5.4 End of Season Payouts</h3>
    <p>Payouts are to be made by the Commissioner no more than one week after the conclusion of the 2024-25 Super Bowl.  Payouts shall be made as follows:</p>
<ul>
        <li>1st Place: $300</li>
        <li>2nd Place: $150</li>
        <li>Squid Game Winner: $50</li>
        <li>Weekly Challenge Bonus: $0-$70 ($5/each)</li>
        <li>Weekly High Score Bonus: $0-$70 ($5/each)</li>
    </ul>

    <h3 bind:this={fiveFive}>5.5 Additional Fee(s)</h3>
    <p>Loser of The Toilet Bowl must pay a $25 fee for the League Champion plaque. This fee is due to the Commissioner at the conclusion of Week 16’s Toilet Bowl matchup.</p>


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

    <h3 bind:this={sixFour}>6.4 Squid Game</h3>
    <p>For each week (weeks 1-9), the team with the lowest weekly total score will be eliminated from the Squid Game competition. The last team manager standing at the end of Week 9 will receive a $50 bonus added to their bank.</p>

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

    <h3 bind:this={eightOne}>8.1 Active Roster</h3>
    <p>A team's active roster consists of fifteen (15) player slots. The starting roster consists of twelve (12) slots – ten (10) offensive players, one (1) kicker, and one (1) defensive team. Managers must always field a complete team.</p>
    <div class="subBlock">
    <p>1) Managers may not permit players on Injured Reserve to be in their active lineup for more than one (1) week from the time of his designation to the Injured Reserve.</p>
    <p>2) Failure to abide by the responsibilities laid out in Section 8 will subject the team manger to disciplinary action at the Commissioner’s discretion pursuant to Section 1.2 and will be reviewable pursuant to Section 1.5.</p>
    <p>3) If a team manager is inactive for a period of two weeks, consecutive or non-consecutive, that neglect will constitute an offense under Section 9.4. After two occurrences, the Commissioner reserves the right to make changes to fill the roster and reassign ownership of the team for purposes of competitive balance.</p>
    </div>

    <h3 bind:this={eightTwo}>8.2 Roster Positions</h3>
    <p>Each team will have the following roster slots:</p>
  <ul>
        <li>QB (2)</li>
        <li>RB (2)</li>
        <li>WR (3)</li>
        <li>TE (1)</li>
        <li>FLEX WR/RB/TE (2)</li>
        <li>K (1)</li>
        <li>DEF (1)</li>
    </ul>

    <h3 bind:this={eightThree}>8.3 Position Designation</h3>
    <p>Occasionally, the NFL may change the designation of a particular player from one position to another or a player may line up in multiple positions throughout the game. For example, a TE may be switched to a QB and vice versa (*cough* Taysom Hill *cough*). For the purposes of A League of Our Own, we will follow what Sleeper designates.</p>

    <h3 bind:this={eightFour}>8.4 Bench</h3>
    <p>Each team has a bench of five (5) players.</p>

    <h3 bind:this={eightFive}>8.5 Injured Reserve</h3>
    <p>Each team has two (2) IR slots that are available throughout the season.</p>

    <h3 bind:this={eightSix}>8.6 Roster Limits</h3>
    <p>There is only one roster limitation for A League of Our Own – each team is only allowed three (3) Quarterbacks. All teams may freely add or drop players following the annual league draft until the season’s conclusion.</p>

    <h3 bind:this={eightSeven}>8.7 Roster Lock</h3>
    <p>Player lineup changes lock on a per-player basis, set for the start of each player’s individually scheduled game time. If an owner has technical or logistical problems setting their lineup, please contact the Commissioner for help.</p>

<h2 class="sectionHeading" bind:this={nine}>Section 9: The Playoffs</h2>

    <h3 bind:this={nineOne}>9.1 Playoff Bracket</h3>
    <p>The playoffs shall begin on Week 15 of the NFL regular season. There are three (3) rounds of playoffs. Each playoff round shall be one (1) week.</p>

    <h3 bind:this={nineTwo}>9.2 Qualifying</h3>
    <p>The six (6) teams with the highest win percentage upon the last date before the commencement of the playoffs shall qualify for the playoffs.</p>
    <div class="subBlock">
    <p>1) In the event that any teams should be tied in respect of win percentage, the tiebreaker shall be the Total Points For (PF) during the regular season.</p>
    <p>2) Matchups that end in a tie are recorded as a tie with the exception of playoff and Championship matches. Tiebreakers for playoffs are determined by, ‘Best regular season record vs. opponent wins.’ The win will be awarded to the team with the best overall matchup winning percentage against opponent during the regular season.</p>
    </div>

    <h3 bind:this={nineThree}>9.3 Division Winners</h3>
    <p>The team in each of the two divisions with the best winning percentage is the division winner and receives an automatic playoff berth and a first week playoff Bye. If two or more teams tie for the lead in a division, total points scored in the season will be the tiebreaker.</p>

    <h3 bind:this={nineFour}>9.4 League Championship</h3>
    <p>: In Week 17 the final two remaining teams compete in a one-week matchup for fantasy immortality. The winner is declared as A League of Our Own Fantasy League Champion!</p>

    <h3 bind:this={nineFive}>9.5 Toilet Bowl Bracket</h3>
    <p>The four (4) teams that do not make the playoffs will compete in the Toilet Bowl. The Toilet Bowl shall begin on Week 15 of the NFL regular season. There are two (2) rounds. Each round shall be one (1) week.</p>
    <div class="subBlock">
    <p>1) The teams play to avoid battling for last place. The Losing team from each round gets flushed to the next round.</p>
    <p>2) The losing team of the Week 16 Toilet Bowl matchup will become the Toilet Bowl Chump.</p>
    </div>

    <h3 bind:this={nineSix}>9.6 League Champion Trophy</h3>
    <p>The winner of A League of Our Own will be presented with the league trophy at the draft before the start of the season. The winner of the previous season is responsible for safely transporting and/or delivering the trophy to the draft. The team manager who finishes in 10th place will be responsible for paying for the champion’s plaque that will be applied to the trophy, as referenced in Section 5.4.</p>

    <h3 bind:this={nineSeven}>9.7 Championship Ring</h3>
    <p>The winner will also receive a Championship ring, and display case, to wear or display with pride. The ring will be presented to the League Champion during the Super Bowl Party, or weekend of.</p>

    <h3 bind:this={nineEight}>9.8 Toilet Bowl Trophy</h3>
    <p>The team manager who loses The Toilet Bowl will be disgracefully awarded a consolation trophy.</p>

<h2 class="sectionHeading" bind:this={ten}>Section 10: Offenses</h2>

    <h3 bind:this={tenOne}>10.1 Nature of Offenses</h3>
    <p>This Article deals with activities that are deemed to go beyond the score of irregularities or minor contraventions of the Constitution and constitute wrongful conduct worthy of more severe sanction.</p>

    <h3 bind:this={tenTwo}>10.2 Commencement of Offense Proceedings</h3>
    <p>The Commissioner, on his/her own initiative or following the receipt of a complaint, whether anonymous or public, may, after satisfying himself/herself that the complaint has merit, announce that a Team or its Manager has committed an offense, and the penalty for that offense.</p>
    <div class="subBlock">
    <p>1) The Commissioner is authorized to investigate alleged offenses if he/she deems it necessary to do so, and Managers are required to assist in such investigations by providing truthful statements to the Commissioner if requested to do so.</p>
    </div>

    <h3 bind:this={tenThree}>10.3 Types of Offenses</h3>
    <p>The following shall be classified as an offense:</p>
    <div class="subBlock">
    <p>1) Bribery: Provides another party with value other than in-game value in exchange for in-game value.</p>
    <p>2) Collusion: Agrees with another party to limit open competition in the game by deceiving, misleading or defrauding others in order for a party, who may or may not be a party to the collusion, to obtain an unfair market advantage. Collusion shall be assumed in any case where on Manager acts for more than one team at the same time.</p>
    <p>3) Tanking: Tanking occurs when a team intentionally loses a game or drops players to alter the competitive balance of the league. Teams are prohibited from losing a game to alter playoff matchups and from dumping valued players into the player pool after giving up on a disappointing season.</p>
    <p>4) Churning: Churning occurs when a team adds and drops players on waivers for the sole purpose of making them unavailable to other teams, which is prohibited.</p>
    <p>5) Disrespect: Makes insulting, aggressive, discomforting, or derogatory comments to another party that a reasonable person would consider in excess of friendly “trash talk”.</p>
    <p>6) Harassment: Repeatedly contacts another party or contacts another party through a specific means of communication, despite that party’s request that they not do so.</p>
    <p>7) Non-Competitive Behavior: Demonstrates an intention not to compete that goes beyond mere negligence. Under extreme circumstances, a recurring refusal to engage in reasonable transactions may be considered non-competitive behavior.</p>
    <p>8) Nuisance: Repeatedly complains about the operation of A League of Our Own to the extent that it amounts to harassment of the Commissioner or markedly decreases the enjoyment of others.</p>
    <p>9) General Anti-Avoidance Provision (GAAP): Engages in conduct not other prohibited by this Constitution but is generally acknowledged to be shitty.</p>
    </div>

    <h3 bind:this={tenFour}>10.4 Penalties</h3>
    <p>Any manager found guilty by league majority of an offense is susceptible to the most extreme penalties provided for in Section 1,3, including permanent suspension without refund.</p>
    <div class="subBlock">
    <p>1) Decisions concerning an offense and its penalty are reviewable pursuant to Section 1.5.</p>
    </div>

  <ul>
    <li>This Constitution was last updated on: Thursday, May 23rd, 2024</li>
    </ul>

</div>
