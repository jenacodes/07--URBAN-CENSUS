```markdown
# Urban Census Project

## Overview
This project is a simple web application that allows users to search for cities or states in Nigeria. It fetches data from a JSON file containing information about Nigerian states, including their official names, capitals, and populations. The application dynamically filters and displays matching results as the user types in the search input.

## Features
- **Dynamic Search**: As the user types in the search bar, the application filters and displays matching cities or states in real-time.
- **Highlighting**: The search term is highlighted in the displayed results for better visibility.
- **Population Display**: The population of each state is displayed alongside the state and capital names.
- **Responsive Design**: The application is designed to be responsive and works well on different screen sizes.

## Technologies Used
- **HTML**: For structuring the web page.
- **CSS**: For styling the web page and creating a visually appealing user interface.
- **JavaScript**: For fetching data, filtering results, and dynamically updating the DOM.
- **D3.js**: For fetching and parsing JSON data (though not extensively used in this project).

## How to Use
1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/jenacodes/urban-census.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd urban-census
   ```
3. **Open the Project**:
   - Open the `index.html` file in your preferred web browser.
4. **Search for Cities or States**:
   - Type in the search bar to filter cities or states. The results will update dynamically as you type.

## Project Structure
- **index.html**: The main HTML file that structures the web page.
- **style.css**: The CSS file that styles the web page.
- **script.js**: The JavaScript file that handles data fetching, filtering, and DOM manipulation.

## Code Explanation
- **Data Fetching**: The application fetches data from a JSON file hosted on GitHub using the `fetch` API.
- **Filtering**: The `findWordMatches` function filters the cities array based on the search term.
- **Displaying Results**: The `displayMatches` function dynamically updates the DOM to display the filtered results.

## Customization
- **Data Source**: You can replace the `dataUrl` in `script.js` with your own JSON data source.
- **Styling**: Modify `style.css` to change the appearance of the application.
- **Functionality**: Extend `script.js` to add more features, such as sorting or additional filters.

## License
This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it as per the license terms.

## Acknowledgments
- Data sourced from [iamspruce/intro-d3](https://github.com/iamspruce/intro-d3).
- Inspired by the [JavaScript30](https://javascript30.com/) course by Wes Bos.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## Contact
For any questions or suggestions, feel free to reach out to [jenakumoemmanuel@gmail.com](mailto:jenakumoemmanuel@gmail.com).

```

This `README.md` file provides a comprehensive overview of the project, including its features, technologies used, how to use it, and how to customize it. It also includes sections for licensing, acknowledgments, contributing, and contact information.