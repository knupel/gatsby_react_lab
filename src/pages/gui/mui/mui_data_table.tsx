/**
 * Materiel UI table
 * v 0.0.1
 * 2023-2023
 * 
 * */
// REACT
import React from "react"
import Layout from "../../../components/struct/layout"
// MUI
// https://mui.com/x/react-data-grid/
// There is limitatino with free plan example
// max 100 row, single sorting...
// no excel export, but CSV is possible
import { DataGrid, GridColDef, GridValueGetterParams, GridCellParams } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
// may be  npm uninstall @mui/x-data-grid-generator
import { darken, lighten, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


export default function MUITable() {
  return (
    <div>
      <Layout title="Material UI V4: Data Table"></Layout>
      <SimpleDataTable/>
      <ComplexDataTable/>
    </div>
  )
}

// SIMPLE DATA TABLE
/////////

function SimpleDataTable() {
  return <Box sx={{
    height: 300,
    width: '80%',
    border: 2,
    borderColor: 'black',
    '& .design_header': {
      backgroundColor: 'magenta',
    },
  }}>
    <DataGrid
      rows={rows}
      columns={columns_simple}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  </Box>
}



////////////
// GRID
//////////////
// ROW and DATA
const rows = [
  { id: 1, name: 'Dragon', family: 'Reptile', mythic: true, age: 500 },
  { id: 2, name: 'Licorne', family: 'Mamifère', mythic: true, age: 50 },
  { id: 3, name: 'Ours', family: 'Mamifère', mythic: false, age: 25 },
  { id: 4, name: 'Yeti', family: 'Mamifère', mythic: true, age: 35 },
  { id: 5, name: 'Tigre', family: 'Mamifère', mythic: false, age: 10 },
  { id: 6, name: 'Caméléon', family: 'Reptile', mythic: false, age: 10 },
  { id: 7, name: 'Chèvre', family: 'Mamifère', mythic: false, age: 8 },
  { id: 8, name: 'Rat', family: 'Mamifère', mythic: false, age: 5 },
  { id: 9, name: 'Souris', family: 'Mamifère', mythic: false, age: 4 },
  { id: 10, name: 'Humain', family: 'Mamifère', mythic: false, age: 85 },
  { id: 11, name: 'Requin', family: 'Poisson', mythic: false, age: 85 },
  { id: 12, name: 'Crabe', family: 'Crustacé', mythic: false, age: 8 },
  { id: 13, name: 'Tortue', family: 'Reptile', mythic: false, age: 150 },
  { id: 14, name: 'Cerbère', family: 'Mamifère', mythic: true, age: 70 },
  { id: 15, name: 'Scarabée', family: 'Insecte', mythic: false, age: 2 },
];


// COLUMNS
const columns_simple: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, headerClassName: 'design_header', },
  { field: 'name', headerName: 'Nom', width: 130 , editable: true, headerClassName: 'design_header' },
  { field: 'family', headerName: 'Famille', width: 130, headerClassName: 'design_header' },
  { field: 'age', headerName: 'Age', type: 'number', width: 90, headerClassName: 'design_header' },
  { field: 'fullName', headerName: 'Nom complet', description: 'This column has a value getter and is not sortable.',
    sortable: false, width: 160, headerClassName: 'design_header',
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.name || ''} ${params.row.family || ''}`,
  },
];







const columns_complex: GridColDef[] = [
  info('id', 'ID', 70, 'design_header', true),
  info('name', 'Nom', 130, 'design_header', true, {editable: true}),
  info('family', 'Famille', 130, 'design_header', true),
  info('age', 'Age', 90, 'design_header', true, {type: 'number'}),
  info('fullName', 'Nom complet', 160, 'design_header', true,
      // find(valueGetter: (params: GridValueGetterParams) => (return `${params.row.name}`)},
      // {valueFormatter: (truc : any) => {return truc.value.find((item: any) => item.field === 'mythic').option}},
       { sortable: false, 
        valueGetter: (params: GridValueGetterParams) => `${params.row.name || ''} ${params.row.family || ''}`,}),
  info('mythic', 'Legend', 100, 'design_header', 
      // {valueFormatter: ({value}) => {return value}}
      {valueFormatter: (truc : any) => {return truc.value}}
  // {valueFormatter: (params: GridValueGetterParams) => params.row.mythic,}
      // {valueGetter: (params: GridValueGetterParams) => params.row.mythic,}
      // {valueGetter: (params: GridValueGetterParams) => {console.log("params.row.mythic", params.row.mythic); return params.row.mythic}}, 
      // {valueGetter: (params: GridValueGetterParams) => `${params.row.mythic}`,}
      ),

];

function find(name: string) {
  console.log("columns_complex",rows);
  if(rows !== undefined) {
    rows.map(elem => {
      console.log("name", name);
      console.log("elem.name", elem.name);
      if(elem.name === name) {
        console.log("bingo", elem.name);
        return elem.mythic;
      }
    })
    return false;
  }
  return false;
}




function info(field : string, header: string, width : number, headerClassName : string, is : boolean | Object, obj? : Object) {
  console.log("is", is);
  if(typeof is === 'object') {
    // console.log("je suis is", is);
    console.log(Object.values(is));
    // const {valueFormatter} = is;
    // console.log("je suis", field, is, value);
    // let buf = {valueGetter: (params: GridValueGetterParams) => {console.log(params.row.is);`${params.row.is}`}};
    // console.log("buf", buf);
    is = (is: GridCellParams<any, any, boolean>) => { 
      is = is.value
      // console.log("je suis là", is, params.value);
      return { field: field, headerName: header, width: width, headerClassName: headerClassName, is: is.value, ...obj }
    };
  }
  return { field: field, headerName: header, width: width, headerClassName: headerClassName, is: is, ...obj };
}









// ADVANCED USE
function ComplexDataTable() {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 50,
  // });
  //  const { data } = rows;
  console.log("col", columns_complex.length);
  console.log("col 6", columns_complex[5]);
  return (
    <Box sx={{ height: 400, width: '100%', 
              '& .design_true': {
                backgroundColor: 'cyan',
              },
              '& .design_false': {
                backgroundColor: 'magenta',
              },
    }}>
      <DataGrid rows={rows} columns={columns_complex}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // getCellClassName = {() => {
        //   // console.log("col", columns_complex);
        //   return 'design_false'}}



        // getCellClassName = {(params: GridCellParams<any, any, boolean>) => {return params.value ? 'design_true' : 'design_false' }}
        getCellClassName={(truc: GridCellParams<any, any, boolean>) => {
          // comment étendre ça à l'ensemble des cellules ????
          return truc.value ? 'design_true' : 'design_false';
        }}
      />
      {/* <StyledDataGrid
        // {...data}
        getRowClassName={(params) => `super-app-theme--${params.row.status}`}
      /> */}
    </Box>
  );
}










