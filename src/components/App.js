import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import LogItem from './LogItem';

const App = () => {
  const [logs, setLogs] = useState([]);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Log Text</th>
            <th>User</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <LogItem />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
