# Form Wizard
This is a take home exercise project. The project is aimed at building a multi-step form (wizard) where a user can fill in information, get Price and buy an insurance Policy.

## Project Structure
The project is structured with three major sections as follows;

    -Views. Contains the components which are used for routing
    -Components. Contains reusable components e.g button, input fields components.
    -Store. This contains a simple composable file being used for global state management.
    -router. This contains the application routes.

## Technical choices and approach
Used Vue composition api over Options api because i wanted to manage state globally across components without using state management libraries like Vuex for a small task.
