This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Branching-strategi:
Strategien tar utgangspunkt i “GitFlow”-strategien til GitHub (fra 3:08 i [Professional Guides: Workflow Strategies - YouTube](https://www.youtube.com/watch?v=aJnFGMclhU8), men lurt å se hele) og består av to faste branches og tre midlertidige branch-typer.
​
## Faste branches
De to faste branchene er *Development* og *Production*. Alle de midlertidige branchene springer ut fra, og ender opp i, en av disse to.
​
### Development / Dev.
Denne branchen er ment for å drive utvikling av ny funksjonalitet / features på. Den er ikke garantert at alltid fungerer, selv om dette er noe vi skal strebe etter og endringer som resulterer i et ukjørbart miljø skal varsles de andre og rettes opp i fortløpende. Man skal ikke commite direkte mot denne branchen, men benytte seg av Pull-requests fra en av de midlertidige branchene.
Fra denne branchen får man to midlertidige branches - *Feature* og *Release*.
​
### Production / Prod.
Denne branchen representerer det offisielle kjørbare produktet vårt slik det er hos sluttbrukerne våre. Denne branchen skal alltid være kjørbar og stabil, og den godtar ikke direkte commits - disse skal komme fra Pull Requester fra enten *Hotfix-*  eller *Release*-brancher der alle tester passerer.
Fra denne branchen får man en midlertidig branch - *Hotfix*
​
## Midlertidige branches
Det er tre typer midlertidige branches - *Feature*,  *Release* og *Hotfix*. Disse tre branchene springer alltid ut fra, og ender opp i, en av de to faste branchene.
​
### Feature
En Feature-branch brukes for å utvikle ny funksjonalitet i et isolert miljø, slik at man kan gjøre endringer som gjør programmet ukjørbart uten at det påvirker de andre utviklerene. Den skal alltid springe ut fra, og ende opp,  i *Development*-branchen.
​
### Release
En Release-branch brukes for å forberede en ny versjon av produktet som skal eksponeres mot sluttbrukere. Den springer ut av *Development* og merges inn i både *Production* og *Development* når den er klargjort, slik at endringer som gjøres ikke blir reversert av en senere Release som hentes fra Development. Klargjøringen består hovedsakelig av å fikse bugs og kjøre både manuelle og automatiserte tester.
​
### Hotfix
En Hotfix-branch brukes til å fikse feil som har kommet seg inn i *Production*-branchen. Den springer ut fra *Production* og ender opp i både *Production* og *Development*, slik at en senere Release ikke introduserer en tidligere rettet feil på nytt.
​
## Bruk av Feature-branches
1. Kjør kommandoen  `git checkout development` 
	* Bytter til *Development*-branchen dersom du ikke befinner deg på den
	
2. Kjør kommandoen  `git pull` 
	* Henter ned de nyeste oppdateringene på *Development*-branchen.
	
3. Kjør kommandoen  `git checkout -b feature/[FEATURE NAVN]` 
	* Oppretter en ny Feature-branch med navnet “feature/[FEATURE NAVN]” og skifter til den nylig oppdaterte ranchen.
	* F.eks. `git checkout -b feature/product-search`
	
4. Kjør kommandoen  `git pull origin development`
	* Dette henter ned siste versjon av *Development*-branchen inn i din Feature-branch. Selv om punkt 2 også gjør dette er det god praksis å gjøre dette også.
	
5. Utfør utviklingen av Featuren du jobber med. Commit ofte med gode Commit Messages.

6.  Kjør kommandoen `git pull origin development`
	* Dette henter ned siste versjon av *Development*-branchen inn i din Feature-branch. Dette gjøres for å håndtere potensielle Merge-konflikter lokalt.
	* Denne kommandoen *MÅ* kjøres før du skal Merge din Feature-branch inn i Development, men kan gjerne kjøres underveis i utviklingen for en mer inkrementell håndtering av diverse 
	
6. Start en Pull-request på GitHub for din Feature-branch inn i *Development*-branchen.