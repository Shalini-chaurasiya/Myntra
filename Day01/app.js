const element = React.createElement("h1", {id:"first", className:"Shalu",style:{backgroundColor:"blue", color:"pink"}}, "Hello Coder Army");
const element2 = React.createElement("h2", {id:"second", className:"Shalu",style:{backgroundColor:"black", color:"white"}}, "Ap sab kaise ho?");

const div1 = React.createElement("div",{},[element, element2]);

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
//Reactroot.render(element);
//Reactroot.render(element2);

Reactroot.render(div1);