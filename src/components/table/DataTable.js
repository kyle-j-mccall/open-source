import React from 'react';
import * as users from '../../users.json';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';


export default function DataTable() {
 
  return (
    <div>
      <Table data={users}>
        <Column width={100} sortable fixed resizable>
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey='id' />
        </Column>

        <Column width={100} sortable resizable>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey='first_name' />
        </Column>

        <Column width={100} sortable resizable>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey='email'/>
        </Column>
      </Table>
    </div>
  );
}
