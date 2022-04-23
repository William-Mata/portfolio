var nome = document.getElementById('nome');
var subTitulo = document.getElementById('subTitulo');
var texts = ['Seja Bem-vindo(a)!', 'Desenvolvedor Full Stack', 'Desenvolver é Arte', 'Desenvolver é Inovar', 'Desenvolver é Essencial', 'Desenvolver é Solucionar Problemas De Forma Inteligente'];


window.onload = () => {
    document.getElementById('text').style.display = "flex";
    var text = "WILLIAM DE MATA DA SILVA".split('');
    text.forEach((letra, w) => {
        setTimeout(() => {
            nome.innerHTML += letra;

        }, 50 * w)
    })

    setTimeout(() => {
        document.getElementById('text').style.display = "inline-block";
        start(texts);
    }, 10000)

}

function writerText(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(() => {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 500); 
        }
        var next = char.pop();
        subTitulo.innerHTML += next;
    }, 100);
}

function cleanText(done) {
    var char = subTitulo.innerHTML;
    var nr = char.length;
    var typer = setInterval(() => {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        subTitulo.innerHTML = char.slice(0, nr);
    }, 100);
}

function start(conteudos) {
    
    var now = -1;
    function next() {
        if (now < conteudos.length - 1) now++;
        else now = 0;
        var str = conteudos[now];
        writerText(str, function () {
            cleanText(next);
        });
    }
    next(next);
    
}

