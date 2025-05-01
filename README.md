# Smart Shopping List

A responsive, user-friendly web application to manage your grocery shopping. Add items to your list, mark them as purchased into your pantry archive, and restore or clear past items. Built with **HTML5**, **CSS3**, and **vanilla JavaScript**, the app persists data in **localStorage** and features a clean, semantic structure with three linked pages.

---

## Table of Contents
1. [Features](#features)
2. [Pages](#pages)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [Future Improvements](#future-improvements)
8. [Contributing](#contributing)
9. [License](#license)
10. [link](#link)
---


## Features

- **Add Items**: Enter name, category, quantity, and optional notes.  
- **Current List View**: Items grouped by category; mark as “Purchased.”  
- **Pantry Archive**: View purchased items with date, restore or clear archive.  
- **Form Validation**: Inline error messages ensure valid input.  
- **Responsive Design**: Single-column on mobile; multi-column grid on tablets/desktops.  
- **Persistent Storage**: Data saved in `localStorage` across sessions.  
- **Semantic HTML**: Uses `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`.  
- **Clean UI**: Shared stylesheet and consistent color scheme with CSS variables.  

---

## Pages

1. **List** (`index.html`)  
   - Shows active shopping items grouped by category.  
   - Each item card displays name, quantity, notes, and a “Purchased” button.

2. **Add Item** (`add.html`)  
   - Form to add new items with validation for required fields.  
   - Categories include Produce, Dairy, Bakery, Meat, and Pantry.

3. **Pantry** (`pantry.html`)  
   - Archive of purchased items, showing purchase date.  
   - Options to restore items to the list or clear the entire archive.

---

## Tech Stack

- **HTML5** for semantic markup  
- **CSS3** (Flexbox, Grid, media queries) for responsive layouts  
- **JavaScript (ES6+)** for DOM manipulation, event handling, and `localStorage`  
- No external frameworks—lightweight, pure vanilla implementation

---

## Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/smart-shopping-list.git
   cd smart-shopping-list
   ```  
2. **Serve files locally** (optional but recommended)  
   - With Node.js:  
     ```bash
     npx http-server .
     ```  
   - With Python 3:  
     ```bash
     python3 -m http.server 8000
     ```  
3. **Open your browser**  
   Navigate to `http://localhost:8080/index.html` (or port 8000) to start.

---

## Usage

1. **List View**  
   - View all current items.  
   - Click **Purchased** to archive an item.

2. **Add Item**  
   - Fill out **Name**, **Category**, **Quantity**, and **Notes**.  
   - Submit to add to the current list.

3. **Pantry**  
   - See all archived items with purchase dates.  
   - Click **Restore** to move back to the list.  
   - Click **Clear Archive** to empty the pantry (confirmation required).

---

## Project Structure

```
smart-shopping-list/
├── index.html           # List view
├── add.html             # Add Item form
├── pantry.html          # Pantry/archive view
├── styles.css           # Shared CSS styles
├── script.js               # Shared JavaScript logic
├── README.md            # Project documentation
```

---

## Future Improvements

- **Edit Items**: Allow modifying existing entries.  
- **Search & Filter**: Quickly find items by name or category.  
- **Theming**: Light/dark mode support.  
- **Data Sync**: Integrate with a backend for cross-device persistence.  
- **Accessibility**: ARIA labels, keyboard navigation, and screen-reader optimization.

---

## Contributing

1. Fork the repository  
2. Create a branch: `git checkout -b feature/YourFeature`  
3. Make your changes and commit: `git commit -m "feat: add awesome feature"`  
4. Push to your fork: `git push origin feature/YourFeature`  
5. Open a pull request

---

## License

Copyright (c) 2025 Mohamed Abdinasir

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
authors OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
## link
https://github.com/mohamedabdinasir1/smart-shopping-list-2