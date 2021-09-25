import React from 'react';
import Product from './Product';

class RestList extends React.Component{

    constructor(props){
        super(props);
        this.state={products:[]};
    }

    componentDidMount(){
        //fetch data from Rest API
        fetch('http://localhost:9796/api/cakes')
        .then(
            async response=>{
                const data=await response.json();
                if(!response.ok){
                    const error=(data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                this.setState({products:data});
                console.log(data);
            })
            .catch(error=>{
                this.setState({ErrorMessage: error.toString()});
                console.log("There was error while fetching data"+ error);
            })
    }

    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
        };
    };

    render() {

        

        return (

            <div style={this.getStyle()}>
                {
                    this.state.products.map(item => (
                        <Product title={item.title}
                            description={item.description}
                            imageurl={item.imageurl}
                            unit_price={item.unit_price}
                            quantity_in_stock={item.quantity_in_stock}
                            likes={item.likes}
                        />
                    ))
                }
            </div>
        );
    }


}

export default RestList;