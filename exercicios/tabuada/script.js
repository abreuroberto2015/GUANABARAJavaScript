var tab = document.getElementById('seltab')

function tabuada() {
    let num = document.getElementById('txtn')
    if (num.value.length == 0) {
        alert('Digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <=10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // Importante para o PHP
            tab.appendChild(item)
            c++
        }
    }
}

function limpar() {
    tab.innerHTML = '<option>Digite outro valor</option>'
}
