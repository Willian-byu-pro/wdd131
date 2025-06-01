const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');







      


button.addEventListener('click', function() {
    if (input.value.trim() !== '')  {

        const li = document.createElement('li')
        // Preenche o <li> com o valor do input usando textContent
        li.textContent = input.value;

        const deletButton = document.createElement('button')
        deletButton.textContent = '❌';


        // Evento para remover o item da lista quando clicar no ❌
        deletButton.addEventListener('click', function () {
           list.removeChild(li);
           input.focus();
        });

        
        li.append(deletButton);
        list.append(li);



        input.value = '';
        input.focus();
      }
    });