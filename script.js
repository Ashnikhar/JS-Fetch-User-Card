fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(data => {
    const container = document.createElement('div');
    container.className = `
      max-w-6xl mx-auto mt-10
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
      px-4
    `;
    
    data.users.forEach(user => {
      // Card container
      const card = document.createElement('div');
      card.className = `
        bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center
        hover:shadow-indigo-500/50 transition duration-300
      `; 
     
      // User image
      const img = document.createElement('img');
      img.className = 'h-20 w-20 rounded-full object-cover border-2 border-indigo-500';
      img.src = user.image;
      img.alt = `${user.firstName} avatar`;

      // User name
      const nameDiv = document.createElement('div');
      nameDiv.className = 'mt-4 text-lg font-semibold text-white truncate';
      nameDiv.textContent = `${user.firstName} ${user.lastName}`;

      // Email
      const emailP = document.createElement('p');
      emailP.className = 'text-gray-400 text-sm text-center break-words';
      emailP.textContent = user.email;

      // Status badge
      const statusSpan = document.createElement('span');
      statusSpan.className = `
        inline-block mt-2 px-3 py-1 text-xs bg-indigo-600 text-white rounded-full
      `;
      statusSpan.textContent = user.status || 'Active';

      // Append all to card
      card.appendChild(img);
      card.appendChild(nameDiv);
      card.appendChild(emailP);
      card.appendChild(statusSpan);

      // Add card to container
      container.appendChild(card);
    });

    document.body.appendChild(container);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
