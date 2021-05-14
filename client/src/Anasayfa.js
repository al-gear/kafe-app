import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid } from "@material-ui/core";
import useStyles from "./styles";
import cafe from "./images/cafe.png";
import { AppBar, Typography, Button } from "@material-ui/core";
import TabsPanel from './components/TabsPanel';
import Cart from './components/cart/Cart';
import { useDispatch } from "react-redux";
import { getProducts } from "./actions/products"
import { Link } from "react-router-dom";
import Products from './components/products/Products';


const Anasayfa = () => {
    const [count, setCount] = useState(1)
    const [ekle, setEkle] = useState([{ id: null, urunAdi: "", adet: null, fiyat: null }])
    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch, ekle])

    return (
        < Container maxwidth="lg" >
            <AppBar className={classes.appBar} position="static" color="inherit" >
                <img className={classes.image} src={cafe} alt="cafe" height="60" />
                <Typography className={classes.heading} variant="h2" align="center" >TNC Cafe</Typography>
                <TabsPanel value={value} handleChange={handleChange} />
            </AppBar>
            <Grow in >
                <Container >
                    <Grid container display="flex" position="relative" justify="space-between" alignItems="stretch" spacing={2} >
                        {value === 0 && (
                            <Grid item className={classes.marg} item xs={12} sm={7} >
                                <Products count={count} ekle={ekle} setCount={setCount} value={value} setEkle={setEkle} />
                            </Grid>)}
                        {value === 1 && (<Grid item xs={12} sm={7} >
                            <Products count={count} ekle={ekle} value={value} setCount={setCount} setEkle={setEkle} />
                        </Grid>
                        )}
                        {value === 2 && (<Grid item xs={12} sm={7} >
                            <Products count={count} ekle={ekle} value={value} setCount={setCount} setEkle={setEkle} />
                        </Grid>
                        )}
                        <Grid item xs={12} sm={4} >
                            <Button style={{ backgroundColor: "lightblue", marginBottom: "12px" }} ><Link to="/add" >Ürün Ekle</Link></Button>
                            <Cart count={count} setEkle={setEkle} ekle={ekle} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container >
    )
}

export default Anasayfa
