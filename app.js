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
    const resultScreen = document.querySelector('#resultados');

    const div = document.createElement('div');
    div.innerText = `${input.desc} - ${input.valor} - ${input.tipo} - ${input.dataPag}`;

}  )



