
import React from 'react'; // For importing React itself
import ReactDOM from 'react-dom/client'; // For importing ReactDOM for rendering in a web browser

const elem = <span>This is react Element</span>

const Title = () => (
<h1 id="heading" tabIndex="5">
    {elem}
    Namaste React using JSX 🚀 </h1>
)

const number = <h1>1000000</h1>

//console.log(jsxheading);

const HeadingComponent = () => (
    <div id='head'>
    <Title/>
    <Title></Title>
    {Title()}
    {number}
    {1000 + 2000}
    {alert("Hii Come Here! Inside")}
    {console.log("djkjhfkhaifhidfifjiahfiu")}
 <h1 className='heading'>This is react Functional Component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);