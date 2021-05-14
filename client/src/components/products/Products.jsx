import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress, Card, CardActions, CardContent, CardMedia, Typography, Badge, Button, ButtonGroup } from "@material-ui/core"
import RemoveIcon from "@material-ui/icons/Remove"
import AddIcon from '@material-ui/icons/Add';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import useStyles from "./styles";
const Products = ({ count, setCount, setEkle, ekle, value }) => {
    const products = useSelector((state) => state.products)

    const onClickChange = (product) => {
        setEkle([...ekle, { id: product._id, urunAdi: product.urunAdi, fiyat: product.birimFiyat, adet: count }])

        setCount(1)
    }


    const classes = useStyles();
    return (
        <>
            {!products.length ? <CircularProgress /> : (<div >
                { value === 0 && (
                    <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                        {products.map((product) => product.ustKategori === "yiyecek" ?
                            (
                                <Grid item xs={12} sm={6}>
                                    <Card className={classes.card} >
                                        <CardMedia className={classes.media} image={product.resim} title={product.ustKategori} />
                                        <div className={classes.overlay}>
                                            <Typography variant="h6">{product.urunAdi.toUpperCase()}</Typography>
                                        </div>

                                        <CardContent >
                                            <Typography variant="body2" color="textPrimary" component="p" gutterBottom >{product.bilgi}</Typography>
                                            <Typography variant="h6" color="secondary" component="p" >Fiyat:{product.birimFiyat} TL</Typography>
                                        </CardContent>

                                        <CardActions className={classes.cardActions}>
                                            <Button className={classes.buton} size="large" value={product.urunAdi} color="secondary" onClick={() => onClickChange(product)} >Ekle</Button>
                                            <Badge color="secondary" badgeContent={count}>
                                                <ShoppingBasketIcon />
                                            </Badge>
                                            <ButtonGroup  >
                                                <Button
                                                    aria-label="reduce"
                                                    onClick={() => {
                                                        setCount(Math.max(count - 1, 0));
                                                    }}
                                                >
                                                    <RemoveIcon fontSize="small" />
                                                </Button>
                                                <Button
                                                    aria-label="increase"
                                                    onClick={() => {
                                                        setCount(count + 1);
                                                    }}
                                                >
                                                    <AddIcon fontSize="small" />
                                                </Button>
                                            </ButtonGroup>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ) : <div></div>)}
                    </Grid>)}
                {value === 1 && (
                    <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                        {products.map((product) => product.ustKategori === "icecek" ? (
                            <Grid item xs={12} sm={6}>
                                <Card className={classes.card} >
                                    <CardMedia className={classes.media} image={product.resim} title={product.ustKategori} />
                                    <div className={classes.overlay}>
                                        <Typography variant="h6">{product.urunAdi.toUpperCase()}</Typography>
                                    </div>

                                    <CardContent >
                                        <Typography variant="body2" color="textPrimary" component="p" gutterBottom >{product.bilgi}</Typography>
                                        <Typography variant="h6" color="secondary" component="p" >Fiyat:{product.birimFiyat} TL</Typography>
                                    </CardContent>

                                    <CardActions className={classes.cardActions}>
                                        <Button className={classes.buton} size="large" value={product.urunAdi} color="secondary" onClick={() => onClickChange(product)} >Ekle</Button>
                                        <Badge color="secondary" badgeContent={count}>
                                            <ShoppingBasketIcon />
                                        </Badge>
                                        <ButtonGroup  >
                                            <Button
                                                aria-label="reduce"
                                                onClick={() => {
                                                    setCount(Math.max(count - 1, 0));
                                                }}
                                            >
                                                <RemoveIcon fontSize="small" />
                                            </Button>
                                            <Button
                                                aria-label="increase"
                                                onClick={() => {
                                                    setCount(count + 1);
                                                }}
                                            >
                                                <AddIcon fontSize="small" />
                                            </Button>
                                        </ButtonGroup>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ) : <div></div>)}
                    </Grid>)}
                {value === 2 && (
                    <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                        {products.map((product) => product.ustKategori === "nargile" ? (
                            <Grid item xs={12} sm={6}>
                                <Card className={classes.card} >
                                    <CardMedia className={classes.media} image={product.resim} title={product.ustKategori} />
                                    <div className={classes.overlay}>
                                        <Typography variant="h6">{product.urunAdi.toUpperCase()}</Typography>
                                    </div>

                                    <CardContent >
                                        <Typography variant="body2" color="textPrimary" component="p" gutterBottom >{product.bilgi}</Typography>
                                        <Typography variant="h6" color="secondary" component="p" >Fiyat:{product.birimFiyat} TL</Typography>
                                    </CardContent>

                                    <CardActions className={classes.cardActions}>
                                        <Button className={classes.buton} size="large" value={product.urunAdi} color="secondary" onClick={() => onClickChange(product)} >Ekle</Button>
                                        <Badge color="secondary" badgeContent={count}>
                                            <ShoppingBasketIcon />
                                        </Badge>
                                        <ButtonGroup  >
                                            <Button
                                                aria-label="reduce"
                                                onClick={() => {
                                                    setCount(Math.max(count - 1, 0));
                                                }}
                                            >
                                                <RemoveIcon fontSize="small" />
                                            </Button>
                                            <Button
                                                aria-label="increase"
                                                onClick={() => {
                                                    setCount(count + 1);
                                                }}
                                            >
                                                <AddIcon fontSize="small" />
                                            </Button>
                                        </ButtonGroup>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ) : <div></div>)}
                    </Grid>)}
            </div>)
            }
        </>)
}


export default Products;
