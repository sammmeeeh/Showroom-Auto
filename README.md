# Showroom

A small Angular app to browse a showroom of cars, built for TP2.

## Features
- List of cars displayed as cards
- Search by brand
- "See more" button to show the description of a car
- Favorites with a counter in the header

## Components
- `HeadBar`: title and favorites counter
- `SearchBar`: search input and list of cards
- `CarCard`: one car (photo, brand, model, price, heart, "See more")
- `CarDetails`: description of the selected car

Data goes down with `@Input()` and events go up with `@Output()`.

## Run the project
```bash
npm install
ng serve
```
Then open http://localhost:4200

## Built with
Angular, Font Awesome
