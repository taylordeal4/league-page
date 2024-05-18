/*   STEP 1   */
export const leagueID = "1086848843544674304"; // your league ID
export const leagueName = "A League of Our Own"; // your league name
export const dues = 75; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to A League of Our Own Fantasy Football League!</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
 //   {
 //     "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
 //     "name": "Taylor",
 //     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
 //     "location": "null", // (optional)
 //     "bio": "Lorem ipsum...",
 //     "photo": "/managers/Taylor.jpg", // square ratio recommended (no larger than 500x500)
 //     "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
 //     "favoriteTeam": "null", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
 //     "mode": "null", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
 //     "rival": {
 //       name: "Jerry", // Can be anything (usually your rival's name)
 //       link: null, // manager array number within this array, or null to link back to all managers page
 //       image: "/managers/Jerry.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
 //     },
 //     "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
 //     "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
 //     "rookieOrVets": "null", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
 //     "philosophy": "Embrace the Chaos. Like a botched snap turned into a game-winning scramble, I thrive in the chaos of fantasy football. Unexpected injuries? Last-minute trades? Bring it on! We'll turn chaos into championships faster than you can say "Hail Mary".",
 //     "tradingScale": 10, // 1 - 10
 //     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
 //   },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    {
      "managerID": "995915607222693888",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Taylor",
      "tookOver": null, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": null, // (optional)
      "bio": "Commissioner of A League of Our Own FFL",
      "photo": "/managers/Taylor.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2012, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Jerry", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Jerry.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4034, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    
