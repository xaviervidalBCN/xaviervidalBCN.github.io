
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getRndInteger_noZero(min, max) {
	do
  		Numero= Math.floor(Math.random() * (max - min) ) + min;
	while (Numero == 0);
  
  	return Numero;
}

function Normalizar_signo(Expresion){
	if(typeof Expresion == "number"){
		if (Expresion > 0){
			return[Expresion.toString(), '+' + Expresion.toString()];	
		} else {
			return[Expresion.toString()];	
		}
	} else {
		return [Expresion];
	}
}

function Registrar_Respuesta(vec_Respuestas_Alternativas){
	
	// Dar formato de almacenamiento
	Respuestas_Altervativas = new Array();
	for (Resp of vec_Respuestas_Alternativas){
		Alter_text= new Array();
		Alter_text.push(Resp);
		Respuestas_Altervativas.push(Alter_text);
	}
	
	// Construir respuesta
	var Respuesta = new Array();
	Respuesta[1]= Respuestas_Altervativas;
	Respuesta[2]= "";

	// Guardar Respuesta
	I.push(Respuesta);
}


//Presentador de preguntas.
function PreguntaWeb(){
	var str_PreguntaWeb= '<font size="6"><script type="text/javascript">document.write(Pregunta())</script></font>'
		+ '<font size="5"> \\( x = \\) <span class="GapSpan" id="GapSpan__X__"><input type="text" autocomplete="off" id="Gap__X__" onfocus="TrackFocus(__X__)" onblur="LeaveGap()" class="GapBox" size="6"/></span></font>'
		+ '<font size="5"> \\( y = \\) <span class="GapSpan" id="GapSpan__Y__"><input type="text" autocomplete="off" id="Gap__Y__" onfocus="TrackFocus(__Y__)" onblur="LeaveGap()" class="GapBox" size="6"/></span></font>'
		//+' <font size="6"> \\( c = \\) <span class="GapSpan" id="GapSpan__Z__"><input type="text" autocomplete="off" id="Gap__Z__" onfocus="TrackFocus(__Z__)" onblur="LeaveGap()" class="GapBox" size="6"/></span></font>'
		+ '<br ><br >'

		
		var i= I.length;  //Número de la siguiente respuesta 
		var str__X__= i.toString();
		var str__Y__= (i+1).toString();
		var str__Z__= (i+2).toString();

		//Modificar la pregunta base.
		str_PreguntaWeb = str_PreguntaWeb.replace(/__X__/g, str__X__);
		str_PreguntaWeb = str_PreguntaWeb.replace(/__Y__/g, str__Y__);
		str_PreguntaWeb = str_PreguntaWeb.replace(/__Z__/g, str__Z__);

		return str_PreguntaWeb;

}


// Generador de preguntas.
function Pregunta(){
	var x= getRndInteger(-10, 10);
	var y= getRndInteger(-10, 10);

	// Generación de sistema compatible determinado.
	do {
		var a= getRndInteger_noZero(-5, 5);
		var b= getRndInteger_noZero(-5, 5);
		var c= getRndInteger_noZero(-5, 5);
		var d= getRndInteger_noZero(-5, 5);
		
		var e= a*x+b*y;
		var f= c*x+d*y;
	
	} while (a/c == b/d && b/d == e/f);

	var str_e= e.toString();
	var str_f= f.toString();

	var str_a= '';
	var str_b= '';
	var str_c= '';
	var str_d= '';

	// No mostrar coeficients 1
	if (a == 1){
		str_a= '';
	} else if(a == -1){
		str_a= '-';
	} else {
		str_a= a.toString();
	}

	if (b == 1){
		str_b= '';
	} else if(b == -1){
		str_b= '-';
	} else {
		str_b= b.toString();
	}

	if (c == 1){
		str_c= '';
	} else if(c == -1){
		str_c= '-';
	} else {
		str_c= c.toString();
	}

	if (d == 1){
		str_d= '';
	} else if(d == -1){
		str_d= '-';
	} else {
		str_d= d.toString();
	}

	// Mostrar signe positiu als coeficientes de la y
	if (b > 0){
		str_b = '+' + str_b;
	}

	if (d > 0){
		str_d = '+' + str_d;
	}

	
	var str_Pregunta= '\\( \\left. ' + str_a + 'x' + str_b + 'y  =' + str_e + '\\atop ' + str_c + 'x' + str_d +'y = '+ str_f + ' \\right\\} \\)';
    
	var val_Rest_1= Normalizar_signo(x);
    var val_Rest_2= Normalizar_signo(y);
    var val_Rest_3= Normalizar_signo("");


    //Almacenar Respuestas.
	Registrar_Respuesta(val_Rest_1);
	Registrar_Respuesta(val_Rest_2);
	//Registrar_Respuesta(val_Rest_3);
	
    //Entregar pregunta.
    return str_Pregunta

}