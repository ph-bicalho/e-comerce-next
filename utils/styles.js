import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar: {
        backgroundColor: "#203040",

        '& a': {
            color: "#ffffff",
            marginLeft: 10,
            marginRight:10,
        },
    },
    main: {
        minHeight: "80vh",
    },
    footer: {
        textAlign: "center",
    },
    navDiv: {

        paddingLeft:"80%",

    },
    link: {
        padding: 10, 
        backgroundColor: "#202020",
        
    }
});

export default useStyles