# Remys

Die App „Remy’s“ richtet sich an alle, die gerne kochen und neue Rezepte ausprobieren möchten, sowie an Familien, die ihre Mahlzeiten planen wollen. 
Unsere Zielgruppe umfasst alle Altersgruppen ab 16 Jahren und bietet jedem die Möglichkeit, kulinarische Kreativität zu entfalten und die Essensplanung zu erleichtern.

## Inhaltsverzeichnis

- [Installation](#installation)
- [Verwendung](#verwendung)
- [Navigationsstruktur](#navigationsstruktur)
- [Wichtige Dateien und Ordner](#wichtige-dateien-und-ordner)
- [Problemlösung](#problemlösung)
- [Mitwirkende](#mitwirkende)
- [Lizenz](#lizenz)

## Installation

1. Klone das Repository:
    ```bash
    git clone https://github.com/thisisjuliiia1/MOB.git
    ```
2. Navigiere in das Projektverzeichnis:
    ```bash
    cd Remys
    ```
3. Installiere die Abhängigkeiten:
    ```bash
    npm install
    ```
4. Starte die App:
    ```bash
    npm start
    ```

## Verwendung

- **Home Screen**: Hier werden alle verfügbaren Rezepte angezeigt.
- **Liked Recipes**: Liste der favorisierten Rezepte.
- **Calendar**: Zeigt einen Kalender zur Planung von Mahlzeiten an.
- **Create Recipe**: Formular zur Erstellung neuer Rezepte.

### Rezept erstellen

1. Navigiere zum "Create Recipe" Bildschirm.
2. Fülle das Formular mit den Rezeptdetails aus.
3. Klicke auf "Save Recipe", um das Rezept zu speichern.

### Rezeptdetails ansehen

1. Wähle ein Rezept auf dem Home Screen oder in der Liked Recipes Liste aus.
2. Die Detailansicht zeigt alle Informationen zum ausgewählten Rezept.

### Rezepte favorisieren

1. In der Detailansicht eines Rezepts, klicke auf das Herz-Symbol, um das Rezept zu liken.
2. Das Rezept wird zur Liked Recipes Liste hinzugefügt.

### Rezepte im Kalender planen
1. Navigiere zum Kalenderbildschirm.
2. Wähle ein Datum aus, um ein Rezept für diesen Tag zu planen.
3. Klicke auf das "+"-Symbol, um ein Rezept auszuwählen.
4. Wähle ein Rezept aus der Liste aus.
5. Das Rezept wird im Kalender für das ausgewählte Datum angezeigt.

## Navigationsstruktur

- **Stack Navigator**:
    - `WelcomeScreen`
    - `Home`
    - `RecipeDetail`
    - `Calendar`
    - `CreatedRecipeDetail`

- **Drawer Navigator**:
    - `HomeScreen`
    - `LikedRecipesScreen`
    - `CalendarScreen`
    - `CreateRecipeScreen`

## Wichtige Dateien und Ordner

- `src/components/`:
    - `categories.js`: Komponenten zur Anzeige von Rezeptkategorien.
    - `loading.js`: Lade-Komponenten.
    - `recipes.js`: Komponenten zur Anzeige von Rezepten.
- `src/constants/`:
    - `index.js`: Definiert die Navigation, die in der App verwendet werden.
- `src/context/`:
    - `LikedRecipesContext.js`: Kontext für das Liken und Verwalten von Rezepten.
- `src/helpers/`:
    - `image.js`: Hilfsfunktionen zur Bildverarbeitung.
- `src/navigation/`:
    - `index.js`: Definiert die Navigationsstruktur der App.
- `src/screens/`:
    - `CalendarScreen.js`: Bildschirm zur Anzeige des Kalenders.
    - `CalendarStyles.js`: Stile für den Kalenderbildschirm.
    - `CreatedRecipeDetailScreen.js`: Bildschirm zur Anzeige von Details selbst erstellter Rezepte.
    - `CreateRecipeDetailStyles.js`: Stile für die Detailansicht selbst erstellter Rezepte.
    - `CreateRecipeScreen.js`: Bildschirm zur Erstellung neuer Rezepte.
    - `CreateRecipeScreenStyles.js`: Stile für den Bildschirm zur Erstellung neuer Rezepte.
    - `HomeScreen.js`: Hauptbildschirm der App.
    - `HomeScreenStyles.js`: Stile für den Hauptbildschirm.
    - `LikedRecipesScreen.js`: Bildschirm zur Anzeige der favorisierten Rezepte.
    - `LikedRecipeStyles.js`: Stile für den Bildschirm der favorisierten Rezepte.
    - `RecipeDetailScreen.js`: Bildschirm zur Anzeige der Details eines Rezepts.
    - `RecipeDetailStyles.js`: Stile für die Detailansicht eines Rezepts.
    - `WelcomeScreen.js`: Begrüßungsbildschirm der App.


## Mitwirkende

- [Julia Braun](https://github.com/thisisjuliiia1)
  [Lea Lindenhofer](https://github.com/leakwm)


