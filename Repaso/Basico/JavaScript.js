let res = 9;

switch(res) {
    // ForBreak & Continue
    case 1: let array_1 = [4,5];
    let array_2 = [1,2,3,6,7];
    
    console.log(`------------`);
    
    forBreak:
    for(let i of array_2){
        console.log(`| Valor: ${i} |`)
        if(i == 3){
            for(let e of array_1){
                console.log(`| Valor: ${e} |`);
                continue forBreak;
            }
        }
    }
    
    console.log(`------------`);
    break;
    
    // Funciones y Funciones flechas
    case 2: function ViewMessage (msg) {
        alert(msg);
    }
    
    const ViewMessage_2 = (msg) => {
        alert(msg);
    }
    
    ViewMessage(`Hello! I'm johan and I like javascript`);
    ViewMessage_2(`Hello! this is the second message`);
    break;
    
    // Diccionarios y Arrays 
    case 3: let employees = {
        Johan:   ["Johan Duque",     "30.920.845", false],
        Yeshua:  ["Yeshua Parra",    "31.320.545", false],
        Breiner: ["Breiner Cuberos", "32.920.845", true],
        Dariana: ["Dariana Duque",   "30.221.145", false],
        Yumary:  ["Yumary Pereira",  "14.002.531", false],
    }
    
    let cont = 0, j = 0;
    
    do {
    
        cont = 0;
    
        let employees_names = prompt(`Can you give me your name`);
        let employees_DNI = prompt(`¡THANKS! Now can you give me the DNI`); 
    
        forBreak:
        for(let i in employees) {
    
            if(employees_names == employees[i][0] && employees_DNI == employees[i][1]){
                alert(`[ Hello ${employees_names} ] you status is ${employees[i][2]}`);
                cont = 0;
                if(employees[i][2] == false) {
                    employees[i][2] = true;
                    alert(`Now ${employees_names} you status is ${employees[i][2]}`);
                }
                continue forBreak;
            } else {
                cont ++;
            } 
    
        }
    
        if(cont == 5) {
            alert("Name o DNI are fakes");
        } else j++;
    
    } while (j < 5) ;
    break;

    // Operaciones MATH
    case 4: let x = 6, y = 2;
        console.log(`%cVariables a usar: x = ${x} & y = ${y}`,"color:blue; background: #fff; padding:15px; margin: 10px; border: 2px solid blue");
        let array = [`* Raiz Cuadrada de x: ${Math.round(Math.sqrt(x))}`, `* Raiz Cubica de x: ${Math.round(Math.cbrt(x))}`];
        console.table(array);
        break;

    // POO & Extends
    case 5: 

    class Vehicles {
        constructor(wheelss,lighst,engine){
            this.wheelss = wheelss;
            this.lighst = lighst;
            this.engine = engine;
        }
        accelerate(speed){
                console.log("%caccelerating...","color: blue; background: #fff; padding: 10px; margin: 5px; border: 2px solid blue");
        }              
        curb(speed){
            console.log("%cdecelerating...","color: blue; background: #fff; padding: 10px; margin: 5px; border: 2px solid blue");
        }
    }

    class Car extends Vehicles {
        constructor(wheelss,lighst,engine, speed){
            super(wheelss,lighst,engine);
            this.speed = speed;
        }
        Open_doors(){
            console.log("%cOpening the doors...","color: green; background: #fff; padding: 10px; margin: 5px; border: 2px solid green");
        }
    }

    class Motorcycle extends Vehicles {
        constructor(wheelss,lighst,engine, speed){
            super(wheelss,lighst,engine);
            this.speed = speed;
        }
        Start_motorcycle(){
            console.log("%cStarting the motorcycle...","color: green; background: #fff; padding: 10px; margin: 5px,; border: 2px solid green");
        }
    }

    console.log(` `);

    const car = new Car(`Black`,`white`,`300KM`,170);
    car.Open_doors();
    car.accelerate();

    console.log(` `);

    const motorcycle = new Motorcycle(`Black`,`white`,`300KM`,170);
    motorcycle.Start_motorcycle();
    motorcycle.accelerate();

    break;

    // DOM
    case 6: const div = document.createElement("div"); 

    div.textContent = "DIV WAS INSERTED FOR JS";
    document.body.appendChild(div);

    let fragment = document.createDocumentFragment();

    for(let i = 1; i <= 10; i++){
        let p = document.createElement("p");
        p.textContent = "Element id = " + i;
        p.classList.add("text");
        fragment.appendChild(p);
    }

    document.body.appendChild(fragment);

    const input = document.createElement("input");
    input.setAttribute("type","time");
    document.body.appendChild(input);

    break;

    // Groups - Groupscollapsed
    case 7: console.log("%cHello everyone!","color: blue; background: #fff; padding: 5px");

    console.groupCollapsed("Group 1");
    console.log("1"); console.log("2"); console.log("3"); console.group("Group 1.1"); console.log("4"); console.log("5");  console.groupEnd(); 

    console.groupEnd();
    console.group("Group 2");
    console.log("1"); console.log("2"); console.log("3"); console.log("4"); console.log("5"); 
    break;

    // 
    case 8: let employees_data = {
                Programers: ["Johan","Pedro","Angel"],
                Designers: ["Dariana","Yumary","Maria"]
            };

        function get_data(work) {
            for(let i in employees_data){
                if(work == i) {
                    let employer_section = employees_data[i].shift();
                    return [employer_section,"This is the first employer of " + work];
                }
            }
        }

    console.log(get_data("Programers")[0],get_data("Programers")[1]);
    console.log(employees_data);

    break;

    case 9: function create_products(name,model,price) {
        img =  `<img src="../../../imagen5.jpg"></img>`
        this.name =  `<p style="color:#000" >  <b>Name:</b> ${name}</p>`;
        this.model =  `<p style="color:#000"> <b>Model:</b> ${model}</p>`;
        this.price =  `<p style="color:#000"> <b>price:</b> $${price}</p>`;
        return [img,this.name,this.model,this.price];
    }

    let div_flex = document.createElement("div");
    div_flex.classList.add("flex-box");
    let fragment_flex = document.createDocumentFragment();
    let r ;

    for(let i = 0; i < 20; i++){

        let name = "Name of the product";
        let model = "Model of the product:";
        let price = "Price of the product:";

        let div_flex_box = create_products(name,model,price);
        let box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = div_flex_box[0] +  div_flex_box[1] +  div_flex_box[2] +  div_flex_box[3];
        fragment_flex.appendChild(box);
      
      }

    // For agrege objects: 

    /* do {

        let name = prompt("Name of the product: ");
        let model = prompt("Model of the product: ");
        let price = prompt("Price of the product: ");

        let div_flex_box = create_products(name,model,price);
        let box = document.createElement("div");
        box.innerHTML = div_flex_box[0] +  div_flex_box[1] +  div_flex_box[2] +  div_flex_box[3];
        fragment_flex.appendChild(box);

     r = confirm("Do you will like continue the program?");
     console.log(r);

    } while (r == true); */

    div_flex.appendChild(fragment_flex);
    document.body.appendChild(div_flex);

    break;

    default: console.error("Esa opcion no existe");
    break;

}

// ``
