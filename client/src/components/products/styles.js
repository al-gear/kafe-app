import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },

    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',

    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },

    grid: {
        display: 'flex',
    },

    cardActions: {
        padding: '0 16px 20px 16px',
        display: 'flex',
        justifyContent: 'space-between',

    },
    buton: {
        border: "4px solid skyblue",
        borderRadius: "10px",
        backgroundColor: "lightblue",

    },
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
    },

    actionDiv: {
        textAlign: 'center',
    },

});