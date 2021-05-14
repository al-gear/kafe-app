import React, { useState } from 'react'
import { Link } from "react-router-dom"
import FileBase from "react-file-base64";
import { createProduct } from "../../actions/products"
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import useStyles from "./styles"

const starting = {
    ustKategori: "", altKategori: "", turu: "", urunAdi: "", bilgi: "", resim: "",
    stokAdedi: null, birimFiyat: null,
}

const Form = () => {
    const [data, setData] = useState(starting)
    const classes = useStyles()

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(data))
        setData(starting)
    }

    return (
        <Paper className={classes.paper} >
            <form autoComplete="off" noValidate className={`${classes.form}`}  >
                <Typography variant="h4" color="secondary" >Ürün Ekle</Typography>
                <TextField name="ustKategori" variant="outlined" label="Ust Kategori" fullWidth value={data.ustKategori} onChange={(e) => setData({ ...data, ustKategori: e.target.value })} required />
                <TextField name="altKategori" variant="outlined" label="Alt Kategori" fullWidth value={data.altKategori} onChange={(e) => setData({ ...data, altKategori: e.target.value })} required />
                <TextField name="turu" variant="outlined" label="Türü" fullWidth value={data.turu} onChange={(e) => setData({ ...data, turu: e.target.value })} required />
                <TextField name="urunAdi" variant="outlined" label="Ürün Adı" fullWidth value={data.urunAdi} onChange={(e) => setData({ ...data, urunAdi: e.target.value })} required />
                <TextField name="birimFiyat" variant="outlined" label="Birim Fiyatı" fullWidth value={data.birimFiyat} onChange={(e) => setData({ ...data, birimFiyat: e.target.value })} required />
                <TextField name="bilgi" variant="outlined" label="Bilgi" fullWidth value={data.bilgi} onChange={(e) => setData({ ...data, bilgi: e.target.value })} required />
                <div className={classes.fileInput}> <FileBase type="file" multiple={false} onDone={({ base64 }) => setData({ ...data, resim: base64 })} /></div>
                <Button className={classes.buttonSubmit} type="submit" size="large" variant="contained" color="primary" onClick={handleSubmit} >Submit</Button>
                <Button ><Link to="/" >Anasayfa</Link></Button>
            </form>
        </Paper>
    )
}

export default Form;
