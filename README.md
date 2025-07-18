# Front-End Developer Technical Test

Users can search based on the keywords they enter, and the application will then display search results containing, at a minimum, the article title, author, and publication date. Articles in the search results can be clicked, opening a new browser tab that takes you to the article's detail page on The New York Times website.

This application uses the Article Search API from: https://developer.nytimes.com/

deployment with: https://vercel.com/

---

## Screenshots

![App Screenshot](https://github.com/mamsky/Front-End-THT/blob/master/src/assets/images/Screenshot.png?raw=true)

---

## Installation

````bash
git clone https://github.com/mamsky/Front-End-THT
cd Front-End-THT
npm install
## Running Tests

To run tests, run the following command

```bash
  npm run test
  &
  npm run test-ui
````

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
