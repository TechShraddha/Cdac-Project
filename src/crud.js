
import React from 'react';
import './App.css';

function Crud() {
    return (
        <div className='App'>
            <h1>CRUD OPERATIONS</h1>

            <h2>INSERT CAKE</h2>
            <hr/>

            <div className='form'>

                <label>category_id:</label>
                <input type='text' name='category_id' /><br />
                <label>title:</label>
                <input type='text' name='title' /><br />
                <label>description:</label>
                <input type='text' name='description' /><br />
                <label>unit_price:</label>
                <input type='text' name='unit_price' /><br />
                <label>quantity_in_stock:</label>
                <input type='text' name='quantity_in_stock' /><br />
                <label>active:</label>
                <input type='text' name='active' /><br />
                <label>imageurl:</label>
                <input type='text' name='imageurl' /><br />
                <label>likes:</label>
                <input type='text' name='likes' />

                <button type="submit" className="btn btn-success">Submit</button>


            </div>
            <hr/>



        </div>
    );
}

export default Crud;