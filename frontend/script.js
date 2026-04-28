async function get_atividades() {
    const res = await fetch(
        'http://localhost:3001/atividades',
        /* {
        method : 'GET',
        headers : {'content-type': 'application/json'},
        body : ''
        }*/
    );

    let atividades = await res.json();
    console.log(atividades);
}

function render_atividades(atividades){
    //nome html dps vero principal
    const principal = document.getElementById('info')
    let conteudohtml = ''

    for(i = 0; i <= atividades.length; i++){
        conteudohtml += ''
    }
}
get_atividades();