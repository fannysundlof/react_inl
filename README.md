# Inlämninngsuppgift 1 Systemutveckling Ramverk

# V1 
Detta är en layout till en inredningsbutik där kunder kan boka tid för personlig konsultation kring inredning hemma. 

Det är en SPA (Singel Page Application) sida byggd med React för att göra sidan så snabb som möjligt för användaren. 

# Rapport Ramverk
## Varför React?

Vi använder ramverket React för att kunna skapa en SPA webbsida. När man använder en Singel page applications laddas hela sidan direkt istället för att varje gång måste hämta från servern. Json data och ajax skickas mellan klient och server istället för HTML filer, vilket går snabbare vid använding av sidan. 

React är bra att använda när man vill göra ändringar ofta på sin webbsida då det är lätt att förvalta. Risker med att använda react är att sidan laddas långsammare vid initial kontakt, SEOn är inte lika tydlig som en HTML-sidas och ingen webbläsarhistorik sparas på servern.  

Ramverk underlättar kodandet av Javascript och programmeraren slipper skirva lika mycket kod. Ramverk är även lättare att strukturera upp och därmed debugga. 

Det finns andra ramverk i Javascript men vi använder React eftersom i vill skapa en SPA sidan. 

# V2 

Vi har skapat ett CMS i Strapi där vi ska lagra våra produkter som hämtas genom ett API till sidan. Under testing heter detta APItest och APIcard i components

# V3

  Lägg till utloggning i headern 
  Admin kan (när inloggad) lägga till, ta bort och redigera produkter i Strapi databasen

# V4 

    Firebase 

    På UserLogin kan du: 
    - Skapa ett konto i firebase
    - Logga in med google eller facebook
    - reset password
    - logga in på konto i firebase

    På UserProfile kan du:
    -Delete konto
    -Logga ut
    -Se bokingar
    -Se skickade meddelanden
  
    I footer kan du:
    -Skicka meddelande (Spara data i firebase)
