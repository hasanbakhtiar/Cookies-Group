


var list = (<ul>
    <li style={{"color":"red"}}>Hello</li>
    <li>Hello</li>
    <li>Hello</li>
    <li>Hello</li>
</ul>)
var mytext = <h1>Hello everyone</h1>


var temp = (<div>
    {list}
    {list}
    {list}
    {list}
    {list}
    {mytext}
</div>);

ReactDOM.render(temp,document.querySelector('#root'));