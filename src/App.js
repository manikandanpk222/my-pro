import './App.css';
import TablePagination from './TablePagination'; 

function App() {
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    // Add more items as needed
  ];

  return (
    <div>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    <products></products>
    <div>
   
    {/* <Button variant="outline-primary">Primary</Button> */}

    <TablePagination data={data} itemsPerPage={2} />

    </div>
    </header>
    </div>
  
  );
}

export default App;
