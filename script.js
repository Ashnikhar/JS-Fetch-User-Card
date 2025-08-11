fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(data => {
    const container = document.createElement('div');
    container.className = `
      max-w-6xl mx-auto mt-10
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
      px-4
    `;
    
    data.users.forEach((user, index) => {
      const card = document.createElement('div');
      card.className = `
        bg-gray-800/60 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col items-center
        transform transition duration-500 hover:scale-105 hover:shadow-indigo-500/50
        opacity-0 translate-y-4
      `;

      // Delay animation per card
      setTimeout(() => {
        card.classList.remove("opacity-0", "translate-y-4");
        card.classList.add("opacity-100", "translate-y-0");
      }, index * 100); // staggered load effect

      // User image
      const img = document.createElement('img');
      img.className = 'h-20 w-20 rounded-full object-cover border-2 border-indigo-500 shadow-md';
      img.src = user.image;
      img.alt = `${user.firstName} avatar`;

      // Name
      const nameDiv = document.createElement('div');
      nameDiv.className = 'mt-4 text-lg font-semibold text-white truncate';
      nameDiv.textContent = `${user.firstName} ${user.lastName}`;

      // Email
      const emailP = document.createElement('p');
      emailP.className = 'text-gray-400 text-sm text-center break-words';
      emailP.textContent = user.email;

      // Company
      const companyP = document.createElement('p');
      companyP.className = 'text-gray-500 text-xs italic mt-1';
      companyP.textContent = user.company?.name || "No company";

      // Status
      const statusSpan = document.createElement('span');
      statusSpan.className = `
        inline-block mt-3 px-3 py-1 text-xs bg-indigo-600 text-white rounded-full
      `;
      statusSpan.textContent = user.status || 'Active';

      // Append
      card.appendChild(img);
      card.appendChild(nameDiv);
      card.appendChild(emailP);
      card.appendChild(companyP);
      card.appendChild(statusSpan);
      container.appendChild(card);
    });

    document.body.appendChild(container);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
