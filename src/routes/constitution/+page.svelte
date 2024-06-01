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
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneThree)}>1.3 Assitant to the Commissioner</h4>
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
</div>
