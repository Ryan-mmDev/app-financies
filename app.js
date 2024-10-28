const submitButton = document.querySelector('#button')

const db_valores = []

submitButton.addEventListener('click', function(){
    const input = {
        id: db_valores.length+1,
        desc: document.getElementById('entrada').value,
        valor: document.getElementById('valor').value,
        tipo: document.getElementById('opt-entrada').value,
        dataPag: document.getElementById('dataPag').value  
    }
    
    db_valores.push(input)
    console.log(input)
    
    const newInput = document.createElement('tr')

    const descCell = document.createElement('td')
    descCell.innerText = input.desc;
    newInput.appendChild(descCell)
    const valorCell = document.createElement('td')
    valorCell.innerText = input.valor;
    newInput.appendChild(valorCell)
    const dataCell = document.createElement('td')
    dataCell.innerText = input.dataPag;
    newInput.appendChild(dataCell)

    const resultScreen = document.querySelector('#resultados tbody');
    resultScreen.appendChild(newInput);
    
    
}  )



