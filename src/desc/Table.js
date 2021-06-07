import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Name, calories, fat, carbs, protein) {
  return { Name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 'Seeds/Seedlings', '', 'Chilli Sakata 651(500 Seeds)', 26),
  createData(2, 'Nutrients/Fertilizers', '', 'Acme Brand Fert A/B Set-50Kg' , 114),
  createData(3, 'Pesticide/Fungicide','', 'Vallient 50ml',  6.0),
  createData(4, 'Growing Medium', 3.7,'Acne brand cockpet', 4.3),
  createData(5, 'Growing Medium', 3.7, 'Acne brand cockhusk', 4.3),
  createData(6, 'Pesticide', 16.0, 'Decsi (deltamitherene) 1l', 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="right">Agri-Input Category</StyledTableCell>
            <StyledTableCell align="right">Product Image</StyledTableCell>
            <StyledTableCell align="right">Product Description</StyledTableCell>
            <StyledTableCell align="right">Order Quantity</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell  scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
