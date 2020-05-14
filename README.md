# RESTORE FOR REPAIRABLE

## For å kjøre prosjektet (Development Mode):
* Naviger til 'backend' modulen
* Kjør `mvn clean install`
* Kjør `mvn spring-boot:run`
* API serveren skal nå kjøre på `localhost:8080` - sjekk med `localhost:808/api/v1/helloworld`
* Åpne et nytt Terminal-vindu
* Naviger til 'frontend' mappen
* Kjør `yarn install`
* Kjør `yarn start`
* Standard nettleser vil nå åpne `localhost:3000` - denne vil refreshe når det gjøres endringer i filene i 'frontend' mappen
* For øyeblikket vil du få opp meldingen 'Det fungerte!' hvis du får forbindelse med API-serveren, eller 'Det fungerer ikke' hvis du ikke får det. 
* For å stenge ned tjenesten trykker du `control-C` i begge terminalvinduene

## For å bygge prosjektet:
* Naviger til 'backend' modulen
* Kjør `mvn clean package`
* Programmet bygger nå 'frontend' modulen og kopierer denne over i 'backend' sin 'resources/public/' mappe før den bygger 'backend' modulen som da inneholder 'frontend'-filene.
* For å kjøre programmet i "produksjonsmodus" kan du nå skrive `java -jar target/restore-application-exec.jar`
