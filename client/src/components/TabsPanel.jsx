import React from 'react';
import { Paper, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        marginBottom: 20,
    },
}));

const TabsPanel = ({ value, handleChange }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="primary"
                centered >
                <Tab label="Yiyecekler" />
                <Tab label="İçecekler" />
                <Tab label="Nargileler" />
            </Tabs>
        </Paper>
    )
}

export default TabsPanel;
