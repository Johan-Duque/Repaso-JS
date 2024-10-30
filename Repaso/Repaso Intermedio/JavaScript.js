let res = 10;

let fragment = document.createDocumentFragment();

function createElements (type,classList,textContent,atributes) {
    let element = document.createElement(type);
    element.classList.add(classList);
    element.textContent = textContent;
    if(atributes) element.setAttribute("placeholder",atributes);
    fragment.appendChild(element);
    return element;
}

const server = [{
    nombre: "Johan Omar",
    correo: "correo_1@gmail.com",
    materia: "Fisica 1"
},{
    nombre: "Dariana Omar",
    correo: "correo_2@gmail.com",
    materia: "Fisica 2"
},{
    nombre: "Daniela Duque",
    correo: "correo_3@gmail.com",
    materia: "Fisica 3"
},{
    nombre: "Yumary Angelica",
    correo: "correo_4@gmail.com",
    materia: "Fisica 2"
},{
    nombre: "Omar Duque",
    correo: "correo_5@gmail.com",
    materia: "Fisica 1"
}];

switch(res) {

    // Eventos de Windows & IMGS
    case 1: const img = document.createElement("img");
    img.src = "../../../imagen5.jpg";
    document.body.appendChild(img);

    img.addEventListener("error",()=> {
        console.error("The image don't exist");
    });

    window.addEventListener("load",() => console.log("The web load correctly"));

    let input = document.createElement("input");
    input.setAttribute("type","text");

    img.addEventListener("click", (e) => {
        console.log(e);
        console.log(event);
        console.log(e.target);
        console.log(e.type);
    })

    document.body.appendChild(input);

    break;

    // Windows - intervals & timeouts
    case 2:   
    
    let info = ` <b style='color:green'>Dirreccion completa:</b> <b>${window.location.href}<b>  </br>  </br>
    <b style='color:green'>Protocol:</b> <b>${window.location.protocol}<b>  </br>  </br>
    <b style='color:green'>HostName:</b> <b>${window.location.hostname}<b>  </br>  </br>
    <b style='color:green'>PathName:</b> <b>${window.location.pathname}<b>  </br>  </br>
    `

    setTimeout(() => {
        document.write(info);
    }, 1000);

    break;

    // Mouse Evenets [Over - Out - Up]
    case 3: let button = document.createElement("button");
    document.body.appendChild(button);

    button.addEventListener("mouseover",() => {
        console.log("over");
    })

    button.addEventListener("mouseout",() => {
        console.log("out");
    })

    button.addEventListener("mousedown", () => {
        console.log("Clicking the button");
    })    

    button.addEventListener("mouseup", () => {
        console.log("living the button");
    });     

    break;

    // Keyboard event [KeyDown - Keypress - Keyup]
    case 4: let p = document.createElement("input");
    p.innerHTML = "HELLO";
    document.body.appendChild(p);

    p.addEventListener("keydown", (e) => {
        console.log("Una tecla fue presionada");
    });
    
    p.addEventListener("Keypress", (e) => {
        console.log("Una tecla fue presionada y soltada");
    });
    
    p.addEventListener("keyup", () => {
        console.log("Una tecla fue soltada");
    });

    break;

    // Event with e
    case 5: 

    let div_flex = document.createElement("div");
    div_flex.classList.add("flex-box");

    let h2_form = createElements("h2","h2-form","Formulario");
    let name = createElements("input","input_form","name: ");
    let email = createElements("input","input_form", "email: ");
    let materia = createElements("input","input_form");
    let button_send = createElements("button","send","send");

    div_flex.appendChild(fragment);
    document.body.appendChild(div_flex);

    function confirmation () {

        let error = 3;

        if(name.value.length > 5 && name.value.length < 20){
            error--;
        }
        if(email.value.length > 5 && email.value.length < 20){
            error--;
        }
        if(materia.value.length > 5 && materia.value.length < 20){
            error--;
        }

        return error;

    }

    button_send.addEventListener("click",(e) => {
        e.preventDefault();

        x = confirmation();

        if(x == 0){
            alert("Congratulations, welcome to the system");
            name.setAttribute("value","");
        } else {
            alert("The info is incorrect");
        }
    });

    break;

    // Arrays with Diccionary
    case 6: 

    let name_server = createElements("h2","title",server[0]["nombre"]);
    let email_server = createElements("h2","email",server[0]["correo"]);
    let materia_server = createElements("h2","materia",server[0]["materia"]);
    let button_server = createElements("button","button-server","Next Student");
    
    let h1 = document.createElement("h1");
    h1.textContent = "Estudents";
    h1.style.color = "#fff";
    h1.style.textAlign = "center";
    document.body.appendChild(h1);

    let container = document.createElement("div");
    container.classList.add("flex-box2");
    container.appendChild(fragment);

    document.body.appendChild(container);

    let i = 1;

        button_server.addEventListener("click", () => {
            if(i < 5) {
                let name = server[i]["nombre"];  
                let email = server[i]["correo"];  
                let materia = server[i]["materia"]; 
    
                name_server.textContent = name;
                email_server.textContent = email;
                materia_server.textContent = materia;
                i++;
            } else {
                name_server.style.display = "none";
                materia_server.style.display = "none";
                button_server.style.display = "none";
                email_server.textContent = "Finish the Server! No more content";
            }
        });

    break;

    // try - catch
    case 7: 

    const input_7 = createElements("input","input-7")
    const submit_7 = createElements("button","button-7","Submit");
    const div_7 = createElements("div","flex-box7");

    document.body.appendChild(fragment);
    
    let acumulador = 0, acumulador_2 = 0;
    
    submit_7.addEventListener("click", (e) => {
        
        e.preventDefault(); 
    
        try{
    
            if(acumulador_2 == 0){
                div_7.innerHTML = "";
            }
    
            if(input_7.value == ""){
                alert("Debes escribir un numero");
                div_7.innerHTML = ``;
                acumulador = 0;
                acumulador_2 = 0; 
            } else {
                acumulador += Number(input_7.value); 
                div_7.innerHTML += `<b style="font-size: 20px; padding-top: 20px; color: greenyellow">${input_7.value} + </b>`;
                acumulador_2++;
            }
    
            if(isNaN(input_7.value)){
                throw "ERROR";
            }
    
            input_7.value = "";
    
            if(acumulador_2 == 3){
                if(Math.round(acumulador/3) >= 7){
                    div_7.innerHTML = "La nota final es: " + Math.round(acumulador/3) +   `<p style="color: rgb(24, 225, 31)">[APROBADO]</p>`; 
                } else {
                    div_7.innerHTML = "La nota final es: " + Math.round(acumulador/3) + `<p style="color: red">[DESAPROBADO]</p>`; 
                }
                acumulador = 0;
                acumulador_2 = 0;       
            }
    
        }
    
        catch(e){
            console.error("Error de tipo [" + typeof e + "]");
            input_7.value = "";
            div_7.innerHTML = `<p style="color: red; font-size: 20px; padding-top: 10px">¡ERROR! Solo se aceptan datos numericos</p>`; 
            acumulador_2 = 0;
            acumulador = 0;
        }
    
    })

    break;

    // Caallbacks
    case 8: 

    function operation (a, b, op) {
        return setTimeout(()=> {
             op(a,b);
        },2000); 
    }

    operation(1,5,(a,b) => { console.log(a+b) });

    break;

    // Promeses
    case 9: 

    function promeses () {
        return new Promise ((resolve,reject) => {
            setTimeout(() => {
                resolve(server);
            },1000);
        })
    }

    promeses().then((server) => console.log(server));

    break;

    // Promeses & Async/Await
    case 10: 

    list = [1,2,3,4,5];

    function getList(text) {
        return new Promise ((resolve,reject) => {
            setTimeout(()=>{
                resolve(console.log(text));
            },2000);
        })
    }

    async function getList2 () {
        let one =   await  getList(list[0]); 
        let two =   await  getList(list[1]); 
        let three = await  getList(list[2]); 
        let four =  await  getList(list[3]); 
        let five =  await  getList(list[4]); 
    }

    getList2();

    break;

}

// ``
