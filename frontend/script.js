async function get_atividades() {
    const form = document.getElementById('fa');
    const dados = new FormData(form);
    const valores = Object.fromEntries(dados.entries())
    console.log(valores)
    
    const res = await fetch(
        'http://localhost:3001/atividades',
         {
        method : 'GET',
        headers : {'content-type': 'application/json'},
        body : JSON.stringify(valores)
        }
    );
}
    async function get_atividades() {
        
        const res = await fetch(
            'http://localhost:3001/atividades'/*,
        {
            method      : 'GET',
            Headers     : {'content-type' : 'application/json'},
            body        : ''
        }*/
        );

    let atividades = await res.json();
    console.log(atividades);

    render_atividades(atividades)
    }




function render_atividades(atividades){
    const principal = document.getElementById('filtros');
    let conteudoHtml = "";

    for(let i = 0; i < atividades.length; i++){
        conteudoHtml += `
        <div class="atividade">
            ${atividades[i].tipo} |
            ${atividades[i].distancia_metros} | 
            ${atividades[i].duracao_minutos} | 
            ${atividades[i].co2_kg} CO²

            <button onclick="curtir(${atividades[i].id})">Curtir</button>

            <div id="box_comentarios_${atividades[i].id}" 
                 style="background:#f4f4f4; margin:5px 0; padding:5px; font-size:14px;">
            </div>

            <input type="text" 
                   id="input_comentario_${atividades[i].id}" 
                   placeholder="comentário...">

            <button onclick="comentar(${atividades[i].id})">Enviar</button>
        </div>`;
    }

    principal.innerHTML = conteudoHtml;
}

get_atividades();