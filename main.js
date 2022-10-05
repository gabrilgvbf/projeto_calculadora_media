    const form= document.getElementById('form-atividade');
    const imgAprovado='<img src="./images/aprovado.png" alt="emoji celebrando" />'
    const imgReprovado='<img src="./images/reprovado.png" alt="emoji decepcionado" />'
    const atividades=[];
    const notas=[];
    const spanAprovado='<span class="resulado aprovado">Aprovado</span>';
    const spanReprovado='<span class="resulado reprovado">Reprovado</span>';
    const notaMinima=parseFloat(prompt("Digite a nota miníma "));

    let linhas='';
    form.addEventListener('submit', function(e){
        e.preventDefault();

        adicionarLinha()
        atualizarTabela()
        atualizaMediafinal()
    
    });


    function adicionarLinha() {
    const inputNomeAtividade= document.getElementById('nome-atividade');
    const InputNotaAtividade=document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} ja foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(InputNotaAtividade.value))
    
        let linha='<tr>';
        linha+= `<td>${inputNomeAtividade.value}</td>`;
        linha+=`<td>${InputNotaAtividade.value}</td>`;
        linha+=`<td>${InputNotaAtividade.value>=notaMinima ? imgAprovado:imgReprovado}</td>`;
        linha+='</tr>';
        linhas+=linha;
    
    }

    inputNomeAtividade.value='';
    InputNotaAtividade.value='';
    
        
    }
    function atualizarTabela(){
        const corpoTabela=document.querySelector('tbody');
    corpoTabela.innerHTML=linhas;
    }

    function atualizaMediafinal(){
    const mediaFinal=calculaMediaFinal();
    document.getElementById('media-final-valor').innerHTML=mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML=mediaFinal>=notaMinima?spanAprovado:spanReprovado;
       
    }


    function calculaMediaFinal(){
        let somadasnotas =0;

        for (let i=0;i<notas.length;i++){
            somadasnotas+=notas[i]
        }

        return media= somadasnotas/notas.length

    }