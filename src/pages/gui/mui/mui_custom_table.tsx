/**
 * Materiel UI custom table
 * v 0.0.1
 * 2023-2023
 * based on those examples https://mui.com/material-ui/react-table/
 * 
 * */
// REACT
import React, { FC } from "react";
import {useState, useMemo} from "react";
import { createContext, useContext } from "react";
import {ChangeEvent, MouseEvent} from "react"
// APP
import Layout from "../../../components/struct/layout"
// MUI

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

// toolbar
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
// tool gui
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { maxWidth } from "@mui/system";
// to open the row icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';







export default function MUITable() {
  return (
    <div>
      <Layout title="Material UI V6: Custom Table"></Layout>
      <CustomTable/>
    </div>
  )
}


interface Data_Props {
  id: number;
  name: string;
  family: string;
  mythic: boolean;
  age: number;
  info: Array<string>;
}

function create_data(id: number, name: string, family: string, mythic: boolean, age: number, info: Array<string>)
  : Data_Props {
  return { id, name, family, mythic, age, info}; 
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

//////////////////
// HEADER
////////////////

interface Content_Props {
  disablePadding: boolean;
  id: keyof Data_Props;
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
  onRequestSort: (event: MouseEvent<unknown>, property: keyof Data_Props) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  order_by: string;
  row_count: number;
}

function CustomHeader(props: Custom_Header_Props) {
  const { onSelectAllClick, order, order_by, num_selected, row_count, onRequestSort } = props;
  const createSortHandler = (property: keyof Data_Props) => (event: MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={num_selected > 0 && num_selected < row_count}
            checked={row_count > 0 && num_selected === row_count}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
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


////////////////////
// TABLE
//////////////////

// CONTEXT
interface ITableContext {
  select_is: (name: string) => boolean;
}
export const TableContext = createContext<ITableContext>(null);

function TableContextProvider() {
  const [selected, set_selected] = useState<readonly string[]>([]);
  retunr <TableContext.Provider

}

function CustomTable() {
  const [order, set_order] = useState<Order>('asc');
  const [order_by, set_order_by] = useState<keyof Data_Props>('name');
  const [selected, set_selected] = useState<readonly string[]>([]);
  const [page, set_page] = useState(0);
  const [dense, set_dense] = useState(false);
  const [rows_per_page, set_rows_per_page] = useState(5);

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof Data_Props,
  ) => {
    const asc_is = order_by === property && order === 'asc';
    set_order(asc_is ? 'desc' : 'asc');
    set_order_by(property);
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const buf = rows.map((elem) => elem.name);
      set_selected(buf);
      return;
    }
    set_selected([]);
  };

  const handleClick = (event: MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    set_selected(newSelected);
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

  const select_is = (name: string) => selected.indexOf(name) !== -1;


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
            <CustomHeader
              num_selected={selected.length}
              order={order}
              order_by={order_by}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              row_count={rows.length}
            />
            <TableBody>
            <TableContext.Provider value={{ select_is}}></TableContext.Provider>
              {visible_rows.map((row, index) => {
                const select_item_is = select_is(row.name);
                // console.log("out index", index);
                // console.log("out select_item_is", select_item_is);
                // console.log("out row", row);
                // return (<Truc></Truc>);
                return (<CustomRow select_item_is={select_item_is} row={row} index={index}/>)
                // const labelId = `enhanced-table-checkbox-${index}`;

                // return (
                //   <TableRow
                //     hover
                //     onClick={(event) => handleClick(event, row.name)}
                //     role="checkbox"
                //     aria-checked={select_item_is}
                //     tabIndex={-1}
                //     key={row.name}
                //     selected={select_item_is}
                //     sx={{ cursor: 'pointer', background: row.mythic ? "magenta" : "cyan"}}
                //   >
                //     <TableCell padding="checkbox">
                //       <Checkbox
                //         color="primary"
                //         checked={select_item_is}
                //         inputProps={{
                //           'aria-labelledby': labelId,
                //         }}
                //       />
                //     </TableCell>
                //     <DesignTableCell>{row.id}</DesignTableCell>
                //     <DesignTableCell>{row.name}</DesignTableCell>
                //     <DesignTableCell>{row.family}</DesignTableCell>
                //     <DesignTableCell>{row.mythic ? "oui" : "non" }</DesignTableCell>
                //     <DesignTableCell>{row.age}</DesignTableCell>
                //     {/* <TableCell align="left">{row.id}</TableCell>
                //     <TableCell align="left">{row.name}</TableCell>
                //     <TableCell align="left">{row.family}</TableCell>
                //     <TableCell align="left">{row.mythic}</TableCell>
                //     <TableCell align="left">{row.age}</TableCell> */}
                //   </TableRow>
                // );
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

interface CustomRowProps {
  select_item_is: boolean;
  row: any,
  index: number,
}

const CustomRow: FC<CustomRowProps> =({select_item_is, row, index}) => {
  const [selected, set_selected] = useState<readonly string[]>([]);

  const handleClick = (event: MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    set_selected(newSelected);
  };

  // const select_item_is = select_is(row.name);
  const labelId = `enhanced-table-checkbox-${index}`;
  return (
    <TableRow
      hover
      onClick={(event) => handleClick(event, row.name)}
      role="checkbox"
      aria-checked={select_item_is}
      tabIndex={-1}
      key={row.name}
      selected={select_item_is}
      sx={{ cursor: 'pointer', background: row.mythic ? "magenta" : "cyan"}}
    >
      <TableCell padding="checkbox">
        <Checkbox
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








///////////////////
// TOOL BAR
////////////////////
// interface EnhancedTableToolbarProps {
//   numSelected: number;
// }

// function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Nutrition
//         </Typography>
//       )}
//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// }











