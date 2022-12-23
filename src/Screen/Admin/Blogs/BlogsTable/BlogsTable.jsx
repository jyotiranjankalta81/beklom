import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'tag', headerName: 'Tag', width: 130 },
  { field: 'firstName', headerName: 'Title', width: 130 },
  { field: 'desc', headerName: 'Descripation', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90
  },
  {
    field: 'fullName',
    headerName: 'Creater name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: params =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`
  }
]

const rows = [
  {
    id: 1,
    tag: 'Cyber Security',
    desc: 'this blog on cyber security.',
    lastName: 'Snow',
    firstName: 'Jon',
    age: 35
  },
  {
    id: 2,
    tag: 'Cyber Security',
    desc: 'this blog on cyber security.',
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42
  },
  {
    id: 3,
    tag: 'Cyber Security',
    desc: 'this blog on cyber security.',
    lastName: 'Lannister',
    firstName: 'Jaime',
    age: 45
  },
  {
    id: 4,
    tag: 'Cyber Security',
    desc: 'this blog on cyber security.',
    lastName: 'Stark',
    firstName: 'Arya',
    age: 16
  },
  {
    id: 5,
    tag: 'Cyber Security',
    desc: 'this blog on cyber security.',
    lastName: 'Targaryen',
    firstName: 'Daenerys',
    age: null
  },
  {
    id: 6,
    tag: 'Cyber Security',
    desc: 'this blog on cyber security.',
    lastName: 'Melisandre',
    firstName: null,
    age: 150
  },
  {
    id: 7,
    tag: 'Cyber Security',
    desc: 'this blog on cyber security.',
    lastName: 'Clifford',
    firstName: 'Ferrara',
    age: 44
  },
  {
    id: 8,
    tag: 'Cyber Security',
    desc: 'this blog on cyber security.',
    lastName: 'Frances',
    firstName: 'Rossini',
    age: 36
  },
  {
    id: 9,
    tag: 'Cyber Security',
    desc: 'this blog on cyber security.',
    lastName: 'Roxie',
    firstName: 'Harvey',
    age: 65
  }
]

export default function BlogsTable () {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  )
}
