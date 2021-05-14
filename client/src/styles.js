import { makeStyles } from "@material-ui/core";


export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#caab9b",


    },
    heading: {
        color: 'rgba(0,183,254, 1)',
    },
    image: {
        marginLeft: '15px',
        marginRight: "10px",
    },

    marg: {
        marginBottom: "10px"
    },

}));