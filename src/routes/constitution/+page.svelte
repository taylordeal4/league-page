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
    <p>1)To serve as the Chief Administrative, Dispute Resolution and Financial Officer of A League of Our Own.</p>
    <p>2)To appoint such persons to assist in the execution of the duties of the Commissioner as may be necessary in the Commissioner’s exclusive direction.</p>
    <p>3)To make decisions, or to appoint persons to make decisions, in respect of rule interpretations, administrative functions, financial transactions or disciplinary action, as may be necessary.</p>
    </div>

    <h3 class="subSectionHeading" bind:this={oneThree}>1.3 Assistant to the Commissioner</h3>

    <p>The Assistant to the Commissioner is a league member who serves at the pleasure of the Commissioner to provide counsel and assist with league administration. The Assistant to the Commissioner may act in place of the Commissioner, especially in cases of the Commissioner’s absence or conflict of interest.</p>
    <div class="subBlock">
    <p>1)Assistant Selection: Members in the league may volunteer to fill the role of the Assistant to the Commissioner. On Draft Day, if more than one person volunteers – the remaining members will vote to determine who will fill the role for the season.</p>
    </div>

    <h3 bind:this={oneFour}>1.4 Disciplinary Actions</h3>
    
    <p>FAAB Waiver wire system. Each team will begin the season with $100. $0 bids are allowed. Bids will process Thursdays and Sundays at 9AM EST.</p>

    <p>FAAB budgets will reset each season in January.</p>
    
    
    <h2 class="sectionHeading" bind:this={two}>Section 2 Drafting</h2>
    
    <h3 bind:this={twoOne}>2.1 Draft Order</h3>
    <p>The draft order each year will be a linear draft in reverse order of the previous year’s regular season standings.</p>

    <h3 bind:this={twoTwo}>2.2 Rookie Drafts</h3>
    <p>Rokkie drafts will consist of 3 round of drafting, with 5 minutes alotted for each pick. To make room for the incoming players, benches will be expanded by (5) spots. These spots will be removed in mid-August, at which point you will need to have cut the necessary players.</p>
    <p>Any spots not filled during the draft, can be filled immediately afterwards from the waiver wire.</p>
    
    <h3 bind:this={twoThree}>2.3 Draft Day Trades</h3>
    <p>If a trade is being made during the draft, one or both parties can alert the commissioner to pause the draft to allow for extra time to negotiate the trade.</p>
    
    <h2 class="sectionHeading" bind:this={three}>Section 3 Scoring System</h2>

    <h3 bind:this={threeOne}>3.1 Scoring System</h3>
    <p>The league scoring system breakdown is listed on the Sleeper fantasy app (for the most part, it follows typical .5PPR Scoring). The scoring system will never change without a majority league vote.</p>
    
    <h2 class="sectionHeading" bind:this={four}>Section 4 Postseason</h2>
    
    <h3 bind:this={fourOne}>4.1 Playoffs</h3>
    <p>At the end of the season 6 teams will make the playoffs. The first round of playoffs will commence in week 15. Each team that wins their division and the 4 wild card teams that finish with the best records, will receive a playoff berth. The 2 teams that win their division will receive a bye week in the first round of the playoffs. Each playoff matchup will only last one week and the winner will advance. Week 18 will not be used.</p>
    
    <h3 bind:this={fourTwo}>4.2 Seeding Tiebreakers</h3>
    <p>If two teams finish with the same record the tiebreakers will go as followed:</p>

    <ol>
        <li>Points For</li>
        <li>Head 2 Head Record</li>
        <li>Division Record</li>
        <li>Total Points Against</li>
        <li>Coin Flip</li>
        <li>Duel to the death</li>
    </ol>

    <h2 class="sectionHeading" bind:this={five}>Section 5 Tanking Policy</h2>
    
    <h3 bind:this={fiveOne}>5.1 League Tanking Policy</h3>
    <p>No team may intentionally leave starting roster spots empty. Any evidence of intentionally leaving roster spots empty in order to improve your draft position may be subject to punishment, including but not limited to the forfeiture of draft selections.</p>

    <h2 class="sectionHeading" bind:this={six}>Section 6 Replacing Managers</h2>
    
    <h3 bind:this={sixOne}>6.1 Removing Managers</h3>
    <p>Short of continuously failing to set a valid lineup, or confirmed collusion, no manager can be removed against their will. Participation, through the league chat, trade offers, and the waiver wire, is strongly encouraged but generally grounds for removal.</p>
    
    <h3 bind:this={sixTwo}>6.2 Replacing Managers</h3>
    <p>When a manager needs to be replaced, the commisiooners will try to find a suitable candidate with some connection to at least a portion of the existing managers. Priority will be placed on managers who are eager to take on a dynasty commitment and will be very active within the league.</p>
    
    <h3 bind:this={sixThree}>6.3 Replacement Incentive</h3>
    <p>In the event that a manager chooses to quit the league or is removed by a comissioner, an incoming manager is offered a 50% reductioon on their first year buy-in.</p>

    <h2 class="sectionHeading" bind:this={seven}>Section 7 League Finances</h2>
    
    <h3 bind:this={sevenOne}>7.1 League Dues</h3>
    <p>League dues are set at {dues}$. Dues are collected through <a href="https://www.leaguesafe.com/league/3949641">LeagueSafe</a> and collection will be sent out no later than the first of August. All managers must be fully paid up before the start of regular season. In the event that a manager fails to pay before the deadline, a 10% penalty will be addd to their payment and will go towards the payouts at the end of the year.</p>
    
    <h3 bind:this={sevenTwo}>7.2 Payout</h3>
    <p>League payout is structured as follows:</p>
    <ul>
        <li>1st place: {dues * 8}$</li>
        <li>2nd place: {dues * 3}$</li>
        <li>3rd place: {dues}$</li>
    </ul>
    <p>In the event that a manager was fined due to late payment, their extra fee will be added to the winner's payout. Similarly, if new managers come into the league and the payout is smaller, the difference will come out of the winner's prize.</p>
    
    <h3 bind:this={sevenThree}>7.3 Raising Dues</h3>
    <p>A ⅔ majority vote is required in order to raise league dues. In the event that a manager is no longer financially comfortable with the buyin, finding a co-manager to split the cost is reccomended.</p>

</div>
