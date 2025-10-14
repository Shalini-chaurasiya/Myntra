/*const header1 = document.createElement('h1');
header1.innerText = "Hello Code Army";
header1.style.backgroundColor = "aqua";
header1.style.fontSize = "30px"; 
header1.style.color = "black";


const root = document.getElementById('root');
root.append(header1);
*/

//Another alternative
//const styles={fontSize:"30px", backgroundColor:"blue", color:"white"}

/*const React = {
  createElement: function(tag, styles, children){
    const element = document.createElement(tag);

    if(typeof children === 'object'){
        for(let val of children)
            element.append(val);
    }
    else
    element.innerText = children;

    for(let key in styles){
      element.style[key] = styles[key];
    }
    return element;
  }
}
const ReactDOM = {
  render: function(element, root){
    root.append(element);
  }
}

const header1 = React.createElement('h1', {fontSize: "30px", backgroundColor: "blue", color: "white"}, "Hello Coder Army");
const header2 = React.createElement('h2', {fontSize: "30px", backgroundColor: "red", color: "black"}, "Kaise ho sab log");

const li1=React.createElement('li',{}, "HTML");
const li2=React.createElement('li',{}, "CSS");
const li3=React.createElement('li',{}, "JS");

const UL = React.createElement('ul', {fontSize:"30px", backgroundColor:"blue", color:"white"},[li1, li2, li3]);

/*const root = document.getElementById('root');
root.append(header1);
root.append(header2);*/

/*ReactDOM.render(header1, document.getElementById('root'));
ReactDOM.render(header2, document.getElementById('root'));
ReactDOM.render(UL, document.getElementById('root'));*/