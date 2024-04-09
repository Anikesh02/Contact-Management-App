import React from 'react';
import ReactDOM from 'react-dom';
class Mounting extends React.Component{
    constructor(props){
        super(props);
        this.state = {favouritefood: "rice"};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favouritefood: "pizza"});
        }, 1000)
    }
    static getDerivedStateFromProps(props, state){
        return {favouritefood: props.favfood};
    }
    render(){
        return (
            <h1>My Favourite Food is: {this.state.favouritefood}</h1>
        )
    }
}
ReactDOM.render(<Mounting/>, document.getElementById('root'))