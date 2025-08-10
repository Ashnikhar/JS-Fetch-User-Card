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
