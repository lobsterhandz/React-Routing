# Marvel Comic Book Library -- Jose Murillo

The **Marvel Comic Book Library** is a React-based single-page application that allows users to explore Marvel characters and comics. Users can browse a list of characters and comics, view detailed information about individual characters and comics, and navigate seamlessly through an intuitive interface.

## Features

### 1. **Home Page**
- Displays a welcome message.
- Provides navigation to the `Browse Characters` and `Comics` pages.

### 2. **Browse Characters**
- View a grid of Marvel characters.
- Load more characters using pagination.
- Click on a character to view detailed information.

### 3. **Character Details**
- Displays detailed information about a selected character.
- Includes the character's name, description, and associated comics.
- Provides a back button to return to the character list.

### 4. **Comics Page**
- View a grid of Marvel comics.
- Load more comics using pagination.
- Click on a comic to view detailed information.

### 5. **Comic Details**
- Displays detailed information about a selected comic.
- Includes the comic's title, description, and creators.
- Provides a back button to return to the comics list.

### 6. **404 Page**
- Displays a friendly error message for undefined routes.
- Includes a link to return to the home page.

## Installation

### Prerequisites
- Node.js and npm installed on your machine.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/marvel-comic-book-library.git
   ```

2. Navigate to the project directory:
   ```bash
   cd marvel-comic-book-library
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your Marvel API credentials:
   ```env
   VITE_PUBLIC_KEY=your_marvel_api_public_key
   VITE_HASH=your_marvel_api_hash
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open the application in your browser:
   ```
   http://localhost:5173
   ```

## File Structure
```
src/
|-- components/
|   |-- Header.jsx
|   |-- Home.jsx
|   |-- BrowseCharacters.jsx
|   |-- CharacterDetails.jsx
|   |-- Comics.jsx
|   |-- ComicDetails.jsx
|   |-- NotFound.jsx
|-- App.jsx
|-- App.css
```

## Technologies Used
- **React**: Frontend framework.
- **React Router**: For navigation and dynamic routing.
- **Axios**: For making API requests.
- **Marvel API**: To fetch characters and comics data.
- **Vite**: For fast development and build setup.

## API Configuration
To fetch data from the Marvel API, you need:
1. A [Marvel API account](https://developer.marvel.com/).
2. Generate your `Public Key` and `Hash` for authentication.

Add these credentials to the `.env` file as described above.

## Contributing
Feel free to fork this repository and submit pull requests for new features, bug fixes, or enhancements.

### Steps to Contribute
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- **Marvel API**: For providing access to their character and comic data.
- **React Community**: For the excellent tools and documentation.

---

Feel free to explore the Marvel universe with the Marvel Comic Book Library!

