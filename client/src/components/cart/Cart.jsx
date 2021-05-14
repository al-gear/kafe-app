import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from "./styles";
import { Button, ButtonGroup } from "@material-ui/core";


const Cart = ({ setEkle, ekle }) => {
    const onClickChange = () => {
        alert(`Siparişleriniz alındı`)
        setEkle([{ id: null, urunAdi: "", adet: null, fiyat: null }])
    }

    const sum = (ekle) => {
        return ekle.map((urun) => urun.fiyat * urun.adet).reduce((fiyat, i) => fiyat + i, 0).toFixed(1) + " TL"
    }
    const classes = useStyles();

    return (<>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={4}>
                            <h2>Sipariş Özeti</h2>
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell> Ürün </TableCell>
                        <TableCell align="right">Adet</TableCell>
                        <TableCell align="right">Birim Fiyatı</TableCell>
                        <TableCell align="right">Toplam</TableCell>



                    </TableRow>
                </TableHead>
                <TableBody>
                    {ekle && ekle.map((row) => (row.fiyat ? (
                        <TableRow key={row?.id}>
                            <TableCell>{row.urunAdi}</TableCell>
                            <TableCell align="right">{row.adet} </TableCell>
                            <TableCell align="right">{row.fiyat ? row.fiyat.toFixed(2) + " TL" : ""}</TableCell>
                            <TableCell align="right"><b>{row.fiyat ? (row.adet * row.fiyat).toFixed(2) + " TL" : ""}</b></TableCell>

                        </TableRow>)
                        : <div></div>))}


                    < TableRow >
                        <TableCell colSpan={3}>Toplam Fiyat</TableCell>
                        <TableCell align="right"><b>{sum(ekle)}</b></TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </TableContainer >
        <div className={classes.root}>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" >
                <Button onClick={onClickChange}  >Sipariş Ver</Button>
                <Button onClick={() => setEkle([{ id: null, urunAdi: "", adet: null, fiyat: null }])} >Listeyi Temizle</Button>
            </ButtonGroup>
        </div>

    </>
    )
}

export default Cart
