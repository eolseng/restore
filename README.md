# RESTORE FOR REPAIRABLE

## For å kjøre prosjektet (Development Mode):
* Naviger til 'backend' modulen
* Kjør `mvn clean install`
* Kjør `mvn spring-boot:run -Dspring-boot.run.profiles=dev` ELLER start `src/test/kotlin/no/repairable/DevApplicationRunner.kt`
* API serveren skal nå kjøre på `localhost:8080` - sjekk med `localhost:808/api/v1/products`
* Åpne et nytt Terminal-vindu
* Naviger til 'frontend' mappen
* Kjør `yarn install`
* Kjør `yarn start`
* Standard nettleser vil nå åpne `localhost:3000` - denne vil refreshe når det gjøres endringer i filene i 'frontend' mappen
* For å stenge ned tjenesten trykker du `control-C` i begge terminalvinduene

## For å bygge prosjektet:
* Naviger til 'backend' modulen
* Kjør `mvn clean package`
* Programmet bygger nå 'frontend' modulen og kopierer denne over i 'backend' sin 'resources/public/' mappe før den bygger 'backend' modulen som da inneholder 'frontend'-filene.
* For å kjøre programmet i "produksjonsmodus" kan du nå skrive `java -jar target/restore-application-exec.jar`
