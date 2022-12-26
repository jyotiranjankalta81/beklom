import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  //   { field: 'Message', headerName: 'Message', width: 130 },
  {
    field: 'age',
    headerName: 'Phone',
    type: 'number',
    width: 90
  }
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: params =>
  //       `${params.row.firstName || ''} ${params.row.lastName || ''}`
  //   }
]

const rows = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 35,
    email: 'jrkbonds@gmail.com'
  },
  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    email: 'jrkbonds@gmail.com'
  },
  {
    id: 3,
    lastName: 'Lannister',
    firstName: 'Jaime',
    age: 45,
    email: 'jrkbonds@gmail.com'
  },
  {
    id: 4,
    lastName: 'Stark',
    firstName: 'Arya',
    age: 16,
    email: 'jrkbonds@gmail.com'
  },
  {
    id: 5,
    lastName: 'Targaryen',
    firstName: 'Daenerys',
    age: null,
    email: 'jrkbonds@gmail.com'
  },
  {
    id: 6,
    lastName: 'Melisandre',
    firstName: null,
    age: 150,
    email: 'jrkbonds@gmail.com'
  },
  {
    id: 7,
    lastName: 'Clifford',
    firstName: 'Ferrara',
    age: 44,
    email: 'jrkbonds@gmail.com'
  },
  {
    id: 8,
    lastName: 'Frances',
    firstName: 'Rossini',
    age: 36,
    email: 'jrkbonds@gmail.com'
  },
  {
    id: 9,
    lastName: 'Roxie',
    firstName: 'Harvey',
    age: 65,
    email: 'jrkbonds@gmail.com'
  }
]

export default function GetStarted () {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}
