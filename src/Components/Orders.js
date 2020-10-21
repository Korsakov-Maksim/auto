import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {loadData} from "../reducers";
import {connect} from "react-redux";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


function Orders(props) {
    const {load, rowsData} = props
    const classes = useStyles();
    const [isLoaded, setLoaded] = useState(false);
    !isLoaded && fetch('http://localhost:3002/orders')
        .then(response => response.json())
        .then(data => {
            load(data);
            setLoaded(true)
        })
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Номер заказа</TableCell>
                        <TableCell align="center">Наименование</TableCell>
                        <TableCell align="center">Цена закупки</TableCell>
                        <TableCell align="center">Цена продажи</TableCell>
                        <TableCell align="center">Количество</TableCell>
                        <TableCell align="center">Описание</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowsData.map((row,index) => (
                        <TableRow key={index}>
                            <TableCell align="right">{row.id_order}</TableCell>
                            <TableCell align="right">{row['Название']}</TableCell>
                            <TableCell align="right">{`${row['Цена_закупки']} р.`}</TableCell>
                            <TableCell align="right">{`${row['Цена_продажи']} р.`}</TableCell>
                            <TableCell align="right">{`${row['количество']} шт`}</TableCell>
                            <TableCell align="justify">{row['Описание']}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        load: function (data) {
            return dispatch(loadData(data))
        }
    }
}
function mapStateToProps(state) {
    return {
        rowsData: state.data.rows
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Orders)