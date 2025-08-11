
# User Cards Display — Fetch & Responsive UI with TailwindCSS

A simple JavaScript project that fetches user data from [DummyJSON](https://dummyjson.com/users) and displays it as responsive user cards using **TailwindCSS** utility classes for modern styling.

---

## Features

* Fetches user data asynchronously from a public API
* Displays user avatars, names, emails, and status badges
* Fully responsive grid layout adapting to different screen sizes
* Modern card design with hover shadow effects
* Uses pure JavaScript DOM manipulation (no frameworks required)
* Clean and minimal TailwindCSS-based styling



## Usage

1. Clone or download this repository.

2. Open `index.html` (or your HTML file with the script) in a modern browser.

3. The user cards will automatically fetch and display.

---

## Code snippet

```js
fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(data => {
    const container = document.createElement('div');
    container.className = `
      max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl 
      mx-auto mt-10
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
      px-4
    `;

    data.users.forEach(user => {
      const card = document.createElement('div');
      card.className = `
        bg-white rounded-xl shadow-md overflow-hidden flex items-center space-x-6 p-6
        hover:shadow-xl transition-shadow duration-300
      `;

      const img = document.createElement('img');
      img.className = 'h-20 w-20 rounded-full object-cover flex-shrink-0';
      img.src = user.image;
      img.alt = `${user.firstName} avatar`;

      const contentDiv = document.createElement('div');
      contentDiv.className = 'flex flex-col';

      const nameDiv = document.createElement('div');
      nameDiv.className = 'text-xl font-semibold text-gray-900 truncate';
      nameDiv.textContent = `${user.firstName} ${user.lastName}`;

      const emailP = document.createElement('p');
      emailP.className = 'text-gray-500 break-words';
      emailP.textContent = user.email;

      const statusSpan = document.createElement('span');
      statusSpan.className = `
        inline-block mt-2 px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full
        w-max
      `;
      statusSpan.textContent = user.status || 'Active';

      contentDiv.appendChild(nameDiv);
      contentDiv.appendChild(emailP);
      contentDiv.appendChild(statusSpan);

      card.appendChild(img);
      card.appendChild(contentDiv);
      container.appendChild(card);
    });

    document.body.appendChild(container);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
```

---

## Technologies

* JavaScript (ES6+)
* TailwindCSS (Utility-first CSS framework)
* DummyJSON (Mock user data API)

---

## How to customize

* Change the API URL to fetch data from another endpoint
* Modify TailwindCSS classes for different styling
* Add more user fields like phone, address, etc.
* Integrate with frameworks like React or Vue for advanced UI

---



