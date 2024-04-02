/**
 * Materiel UI custom table with context management
 * v 0.0.2
 * 2023-2023
 * based on those examples https://mui.com/material-ui/react-table/
 * https://blog.logrocket.com/how-to-use-react-context-typescript/
 * 
 * */
// REACT
import React, { FC, ReactNode } from "react";
import { useState, useMemo } from "react";
import { createContext, useContext } from "react";
import { ChangeEvent, MouseEvent } from "react"
// APP
import Layout from "../../../components/struct/layout"
// MUI

// Table
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';

// select
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';



///////////////////
// INTERFACE
////////////////////
export interface Row_Props {
  // data base
  id: number;
  name: string;
  family: string;
  mythic: boolean;
  age: number;
  info: Array<string>;
  // internal management
  selected: boolean;
}
///////////////////
// END INTERFACE
////////////////////



///////////////////
// SELECT
////////////////////
function BasicSelect() {
  const [family, set_family] = useState('');
  const [menu, set_menu] = useState<string[]>([]);

  const handle_selection = (event: SelectChangeEvent) => {
    set_family(event.target.value as string);
  };

  const init_menu = (data : Row_Props[]) => {
    let buf: string[] = ["Toute les familles"];
    data.map(elem_data => {
      let is = false;
      let add_data= "";
      for(let i = 0 ; i < buf.length ; i++) {
        if(buf[i] === elem_data.family) {
          is = true;
          break;
        }
      }
      if(is === false) {
        buf.push(elem_data.family);
      }
    })
    set_menu(buf);
  }

  return (
    <Box sx={{ width: '50%' }}>
  
    {/* <Box sx={{ minWidth: 120 }}> */}
      {menu.length === 0 ? init_menu(rows) : null}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Famille</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={family}
          label="Famille"
          onChange={handle_selection}
        >
          {menu.map(elem => <MenuItem value={elem}>{elem}</MenuItem>)}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
///////////////////
// SELECT
////////////////////




///////////////////
// DATA
////////////////////
function create_data(id: number, name: string, family: string, mythic: boolean, age: number, info: Array<string>)
  : Row_Props {
  // set the internal management
  let selected = false;
  return { id, name, family, mythic, age, info, selected}; 
}

const rows = [
  create_data(1, 'Dragon','Reptile', true, 500, ["rouge", "vert", "bleu", "jaune", "polychrome"]),
  create_data(2, 'Licorne', 'Mamifère', true, 50, ["blanche"]),
  create_data(3, 'Ours', 'Mamifère', false, 25, ["blanc", "brun"]),
  create_data(4, 'Yeti', 'Mamifère', true, 35, ["gris", "blanc"]),
  create_data(5, 'Tigre', 'Mamifère', false, 10, ["blanc", "jaune"]),
  create_data(6, 'Caméléon', 'Reptile', false, 10, ["vert", "polychrome"]),
  create_data(7, 'Chèvre', 'Mamifère', false, 8, ["grise", "noire", "blanche"]),
  create_data(8, 'Rat', 'Mamifère', false, 5, ["blanc", "noir", "gris"]),
  create_data(9, 'Souris', 'Mamifère', false, 4, ["grise", "blanche"]),
  create_data(10, 'Humain', 'Mamifère', false, 85, ["noir", "blanc", "rouge", "jaune"]),
  create_data(11, 'Requin', 'Poisson', false, 85, ["blanc", "bleu", "gris"]),
  create_data(12, 'Crabe', 'Crustacé', false, 8, ["rouge", "dorée", "rose"]),
  create_data(13, 'Tortue', 'Reptile', false, 150, ["verte", "grise"]),
  create_data(14, 'Cerbère', 'Mamifère', true, 70, ["brun"]),
  create_data(15, 'Scarabée', 'Insecte', false, 2, ["bleu", "vert", "polychrome"]),
];
//////////////////////////////
// END DATA
///////////////////////////





export default function MUITable() {
  return (
    <div>
      <Layout title="Material UI V6: Custom Table"></Layout>
      <TableContextProvider>
        <BasicSelect/>
        <CustomTableContext/>
      </TableContextProvider>
    </div>
  )
}








/////////////////
// RENDER
/////////////////
function CustomTableContext() {
  const [order, set_order] = useState<Order>('asc');
  const [order_by, set_order_by] = useState<keyof Row_Props>('name');
  const [page, set_page] = useState(0);
  const [dense, set_dense] = useState(false);
  const [rows_per_page, set_rows_per_page] = useState(5);

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof Row_Props,
  ) => {
    const asc_is = order_by === property && order === 'asc';
    set_order(asc_is ? 'desc' : 'asc');
    set_order_by(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    set_page(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    set_rows_per_page(parseInt(event.target.value, 10));
    set_page(0);
  };

  const handleChangeDense = (event: ChangeEvent<HTMLInputElement>) => {
    set_dense(event.target.checked);
  };


  // Avoid a layout jump when reaching the last page with empty rows.
  const empty_rows =
    page > 0 ? Math.max(0, (1 + page) * rows_per_page - rows.length) : 0;

  const visible_rows = useMemo(
    () =>
      stableSort(rows, getComparator(order, order_by)).slice(
        page * rows_per_page,
        page * rows_per_page + rows_per_page,
      ),
    [order, order_by, page, rows_per_page],
  );

  return (
    <Box sx={{ width: '50%' }}>
      <Paper sx={{ width: '100%', mb: 2}}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            sx={{ [`& .${tableCellClasses.root}`]: {
              borderBottom: "none",
              minWidth : 100,
              // background: "magenta", // take the lead on local color :(
              // color: "yellow"
            }}}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
              {/* HEADER TABLE */}
              <CustomHeader
                order={order}
                order_by={order_by}
                onRequestSort={handleRequestSort}
                row_count={rows.length}
              />
              {/* BODY TABLE */}
              <TableBody>
                {visible_rows.map((row, index) => {
                  return <CustomRow row={row} index={index}/>
                })}
                {empty_rows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * empty_rows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rows_per_page}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
////////////////
// END RENDERING
///////////////









//////////////////
// HEADER
////////////////

interface Content_Props {
  disablePadding: boolean;
  id: keyof Row_Props;
  label: string;
}

const content_table: readonly Content_Props[] = [
  { id: 'id', disablePadding: false, label: 'ID'},
  { id: 'name', disablePadding: false, label: 'Nom'},
  { id: 'family', disablePadding: false, label: 'Famille'},
  { id: 'mythic', disablePadding: false, label: 'Légendaire'},
  { id: 'age', disablePadding: false, label: 'Longévité'},
];


interface Custom_Header_Props {
  num_selected: number;
  onRequestSort: (event: MouseEvent<unknown>, property: keyof Row_Props) => void;
  order: Order;
  order_by: string;
  row_count: number;
}

function CustomHeader(props: Custom_Header_Props) {
  const {select_all, rows_state, init_rows, set_row_select_all} = useContext(TableContext);

  const { order, order_by, num_selected, row_count, onRequestSort } = props;
  const createSortHandler = (property: keyof Row_Props) => (event: MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  const select_all_rows = (event: MouseEvent<unknown>) => {
    if (event.target) {
      set_row_select_all();
      for(let elem of rows_state) {
        elem.selected = !select_all;
      }
      
    }
  }

  return (
    <TableHead>
      {rows_state.length === 0 ? init_rows(rows) : null }
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            // indeterminate={num_selected > 0 && num_selected < row_count}
            // checked={row_count > 0 && num_selected === row_count}
            // onChange={select_all_rows}
            onClick={(event) => select_all_rows(event)}
            // inputProps={{
            //   'aria-label': 'select all desserts',
            // }}
          />
        </TableCell>
        {content_table.map((Content_Props) => (
            <TableCell
              key={Content_Props.id}
              // sx={{width: 100}}
              // align={Content_Props.numeric ? 'center' : 'left'}
              // padding={Content_Props.disablePadding ? 'none' : 'normal'}
              sortDirection={order_by === Content_Props.id ? order : false}
            >
              <TableSortLabel
                active={order_by === Content_Props.id}
                direction={order_by === Content_Props.id ? order : 'asc'}
                onClick={createSortHandler(Content_Props.id)}
              >
                {Content_Props.label}
                {order_by === Content_Props.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
//////////////////////
// END HEADER
/////////////////////

















//////////////////
// BODY / ROWS
/////////////////

interface CustomRowProps {
  // selected_global: readonly string[],
  row: any,
  index: number,
}

const CustomRow: FC<CustomRowProps> =({row, index}) => {
  const {rows_state, add_row, update_row} = useContext(TableContext);
  let select_item_is = false;
  for(let elem of rows_state) {
    if(elem.id === row.id) {
      select_item_is = elem.selected;
      break;
    }
  }
  const select_row = (event: MouseEvent<unknown>, id: number) => {
    let id_is: boolean = false;
    for(let elem of rows_state) {
      if(elem.id === id) {
        if(elem.selected === true) {
          update_row(elem.id, false);
        } else {
          update_row(elem.id, true);
        }
        id_is = true;
        break;
      }
    }
    // if ID don't match
    if(id_is === false) {
      row.selected = true;
      add_row(row);
    }
    // init the list of row
    if(rows_state.length === 0) {
      row.selected = true;
      add_row(row);
    }
  };


  const labelId = `enhanced-table-checkbox-${index}`;
  return (
    <TableRow
      hover
      role="checkbox"
      aria-checked={select_item_is}
      tabIndex={-1}
      key={row.name}
      selected={select_item_is}
      sx={{ cursor: 'pointer', background: row.mythic ? "magenta" : "cyan"}}
    >
      <TableCell padding="checkbox">
        <Checkbox
          onClick={(event) => select_row(event, row.id)}
          color="primary"
          checked={select_item_is}
          inputProps={{
            'aria-labelledby': labelId,
          }}
        />
      </TableCell>
      <DesignTableCell>{row.id}</DesignTableCell>
      <DesignTableCell>{row.name}</DesignTableCell>
      <DesignTableCell>{row.family}</DesignTableCell>
      <DesignTableCell>{row.mythic ? "oui" : "non" }</DesignTableCell>
      <DesignTableCell>{row.age}</DesignTableCell>
    </TableRow>
  )
}

function DesignTableCell({children}) {
  return <>
    <TableCell align="left">{children}</TableCell>
  </>
}







//////////////////
// CONTEXT
/////////////////
export type TableContextType = {
  // maybe `rows_state` can change to just `rows` ????
  rows_state: Row_Props[];
  select_all: boolean;
  set_row_select_all:(is: boolean)=> void;
  add_row: (row: Row_Props) => void;
  update_row: (id: number, selected: boolean) => void;
  init_rows: (rows: Row_Props[]) => void;
};

export const TableContext = createContext<TableContextType | null >(null);

const TableContextProvider: FC<ReactNode> = ({children}) => {
  const [rows_state, set_rows_state] = useState<Row_Props[]>([]);
  const [select_all, set_select_all] = useState<boolean>(false);

  const set_row_select_all = () => {
    select_all === false ? set_select_all(true) : set_select_all(false);
  }

  const add_row = (row: Row_Props) => {
    set_rows_state([...rows_state, row])
  }

  const init_rows = (rows: Row_Props[]) => {
    set_rows_state(rows);
  }

  const update_row = (id: number, selected: boolean) => {
    rows_state.filter((row: Row_Props) => {
      if (row.id === id) {
        row.selected = selected;
        set_rows_state([...rows_state]);
      }
    });
  };
    
  return <TableContext.Provider value={{rows_state, select_all, add_row, init_rows, update_row, set_row_select_all,}}>{children}</TableContext.Provider>
}

//////////////////
// END CONTEXT
/////////////////













////////////////////
// SORT
/////////////////////
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  order_by: Key,
): (
  a: { [key in Key]: number | string | boolean },
  b: { [key in Key]: number | string | boolean },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, order_by)
    : (a, b) => -descendingComparator(a, b, order_by);
}


function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((elem, index) => [elem, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((elem) => elem[0]);
}
////////////////////
// END SORT
/////////////////////




















