import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface Props {
  data: []
}

interface movDataProps {
  data: string,
  tipo: string,
  texto: string
}

const Row = ({ data, tipo, texto }: movDataProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { border: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {data}
        </TableCell>
        <TableCell align="left">{tipo}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {texto} 
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default function CollapsibleTable({data}: Props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Data</TableCell>
            <TableCell align="left">Tipo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((mov) => (
            <Row key={mov[4]} data={mov[0]} tipo={mov[1]} texto={mov[2]} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}