function validaFaleConosco(){

	var nome=document.frminscricao.txtnome.value;
	var expRegnome= new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
	if (!expRegnome.test(nome)){
		alert("Preencha o Campo Nome completo!!!");
		document.frminscricao.txtnome.focus();
		return false;
	}

	var fone=document.frminscricao.txtfone.value;
	var expRegfone= new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
	if (!expRegfone.test(fone)){
	alert("Preencha o Campo Telefone ou formato inválido!!!");
	document.frminscricao.txtfone.focus();
	return false;
}
	var email=document.frminscricao.txemail.value;
	var expRegemail= new RegExp("/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/");
	if (!expRegemail.test(email)){
		alert("Preencha o Campo Email ou formato inválido!!!");
		document.frminscricao.txtemail.focus();
		return false;
}
	}


function verificaMotivo(motivo) {

	// Capturamos a estrutura da div cujo ID é opcaoProduto na variável elemento
	var elemento = document.getElementById("opcaoInscricao");

	// Se o valor da variável motivo for "PR"

	if(motivo=="FC"){
		//Criamos um elemento (tag) <select> e guardamos na variável homônima
		var select = document.createElement("select");
		//Setamos nesse novo select o atributo 'name' com o valor 'selproduto'
		select.setAttribute("name","selproduto");
		//Conteúdo atual da variável select:
		//<select name = "selproduto"></select>

		//Criamos um elemento (tag) <option> e guardamos na variável homônima
		var option = document.createElement("option");
		// Setamos nesse novo select o atributo 'value' com o valor vazio
		option.setAttribute("value"," ");

		// Criamos um nó de texto "Escolha" e gravamos na variável 'texto'
		var texto = document.createTextNode("Escolha")
		// Colocamos o nó de texto criado como "filho" da tag option criada
		option.appendChild(texto);
		// Conteúdo atual da variável option:
		//<option value=" ">Escolha </option>
		// Colocamos o option criado como "filho" da tag select criada

		select.appendChild(option);
		//Conteúdo atual da variável select:
		//<select name "selproduto"><option value=" ">Escolha</option></select>select>

		var option = document.createElement("option");
		option.setAttribute("value", "AR");

		var texto = document.createTextNode("Ar Condicionado")
		option.appendChild(texto);
		select.appendChild(option);

		var option = document.createElement("option");
		option.setAttribute("value","AQ");

		var texto = document.createTextNode("Aquecedor")
		option.appendChild(texto);
		select.appendChild(option);

		elemento.appendChild(select);

	}else{
		if(elemento.firstChild)
			elemento.removeChild(elemento..firstChild)
	}

}