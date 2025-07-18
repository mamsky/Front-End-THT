# Front-End Developer Technical Test

Users can search based on the keywords they enter, and the application will then display search results containing, at a minimum, the article title, author, and publication date. Articles in the search results can be clicked, opening a new browser tab that takes you to the article's detail page on The New York Times website.

This application uses the Article Search API from: https://developer.nytimes.com/

deployment with: https://vercel.com/

---

## Screenshots

![App Screenshot](https://github.com/mamsky/Front-End-THT/blob/master/src/assets/images/Screenshot.png?raw=true)

---

## Installation

```bash
git clone https://github.com/mamsky/Front-End-THT
cd Front-End-THT
npm install
```

# Search Input Validation Testing

This document describes a testing approach for validating search input and handling invalid or no-result keywords in a Frontend Engineer Technical Test project.

---

## Overview

The testing covers the following cases:

- The page loads with the correct title.
- Article data is displayed correctly with the expected fields: headline, byline, publication date, abstract, and link.
- Search results are displayed correctly when searching for valid keywords (e.g., "Trump").
- Invalid search keywords trigger a user-friendly "No Articles Available" message.

---

## Automated Testing Details

The testing uses the Playwright framework and includes:

### 1. Page Title Testing

Verifies that the page title contains "THT Paste Prosmana" when the application loads.

### 2. Article Display Test

Checks that each article on the page displays:

- Title (truncated to 100 characters)
- Author name (or "By Anonymous" if empty, truncated to 40 characters)
- Publication date (formatted)
- Abstract (truncated to 160 characters, with ellipsis)
- Link to the full article

Using a mock article dataset (`mockArticle`) for verification.

### 3. Valid Keyword Search Test

Searches for the keyword `"trump"` and verifies that the displayed article matches the expectations of the mock data (same columns as above).

### 4. Invalid Keyword Search Test

Tests for multiple invalid or missing keywords (from the `keywordNotFound` array) by:

- Populating the search input with each invalid keyword.
- Verifying that the element with the ID `#article_not_found` is visible.
- Confirmation will display the message `- No Articles Available -`.

---

## Running the Test

Make sure your development server is running locally at:
http://localhost:5173/

Run the Playwright test with:

```bash
npm run test // terminal
&
npm run test-ui // display the ui
```

## Demo

Check out the live demo here:  
[https://front-end-tht.vercel.app/](https://front-end-tht.vercel.app/)

## Structure Folder

```
└── 📁Fe THT
    └── 📁src
        └── 📁assets                # resource statis seperti gambar atau style
        └── 📁DTOs                  # struktur data untuk artikel (Data Transfer Objects)
        └── 📁features              # Feature Components
            └── 📁article           # Komponen-komponen article
                └── 📁DataSources   # Data sources untuk mengakses data dari api.
                └── 📁Repository    # logika pengambilan data dari data source
            └── 📁components        # komponen-komponen yang lebih umum (misalnya: Layout, footer, sidebar)
            └── 📁UI                # berisi komponen UI.
                └── 📁pages         # halaman spesifik aplikasi
        └── 📁hook                  # Custom React hooks
        └── 📁services              # Abstraksi untuk layanan eksternal
        └── 📁tests                 # tempat file-file unit testing
            └── 📁mock              # Data mock untuk testing
            ├── article.spec.ts     # unit testing
        └── 📁utils                 # helper functions
    ├── .env.example                # contoh environment variabel
    ├── package.json                # Konfigurasi dependensi proyek
    ├── tsconfig.json               # Konfigurasi TypeScript
    └── vite.config.ts              # Konfigurasi Vite
```

---

## Features

- Keyword-based article search
- Display of article title, author, and published date
- External linking to article detail page on NYT site
- Responsive and user-friendly UI
- Utilizes The New York Times Article Search API

---

## Authors

- [@pasteprosmana](https://github.com/mamsky)
