import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import './App.css';



const TableWithPagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => { 
    setCurrentPage(pageNumber);
  };

  const handleClick = () => {
    // navigate('/user');
    alert("Hello");
  };

  const handleSubmit = () =>{
    console.log("ok");
  }

  return (
    <div>
      
        <button className='button' onClick={handleClick}>Add User</button> 
        <input type='number'></input>
        <input type="datetime-local"/> 
        <input type="image"/>
        <br/>
        <hr/>
        <input type="url"></input>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id} style={{ border: '1px solid #ddd', padding: '8px' }}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
      <p>The href attribute specifies the URL of the page the link goes to.

If the href attribute is not present, the  tag will not be a hyperlink.

Tip: You can use href="#top" or href="#" to link to the top of the current page!</p>

<input type="password"></input>
<input type="radio"></input>
<input type="range"></input>
<input type="reset"></input>
<input type="search" ></input>
<input type="submit" ></input>
<hr/>
<Button onClick={handleSubmit}>Submit</Button>
      {/* Pagination */}
      <div style={{ marginTop: '10px' }}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)} style={{ margin: '5px' }}>
            {index + 1}
          </button>
        ))}
      </div>
      <Form><h2>Input</h2> 
      <Form.Control size="lg" type="text" placeholder="Large text" />
      <hr/>
      <Button className='but'> Submit</Button>

      <p>This text is red.</p>
      </Form>
    </div>
  );
};

export default TableWithPagination;
