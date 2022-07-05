import { AppBar, Container, Toolbar, Typography, Link, createTheme, ThemeProvider, CssBaseline, Box} from '@material-ui/core'
import Head from 'next/head';
import React, { useContext } from 'react';
import useStyles from '../utils/styles';
import NextLink from "next/link";
import { Store } from '../utils/Store';






export default  function Layout({ title, children}) {
    const {state, dispatch} = useContext(Store);
    const {darkMode} = state;
    
    const classes = useStyles();
    const theme = createTheme({
      typography: {
        h1: {fontSize: "1.6rem", fontWeight: 400, margin: "1rem 0"},
        h2: {fontSize: "1.4rem", fontWeight: 400, margin: "1rem 0"},
      },
      palette: {
      type: darkMode?  'dark':"light" ,
        primary:{ main : "#109090"},
        secondary:{ main : "#208080"},
      }

    });
    
    return (
      <div>
          <Head>
              <title> { title?  `E-commerce- ${title}`: 'E-commerce'} </title>
          </Head>
          <ThemeProvider theme={theme}>
              <AppBar position='static' className={classes.appbar}>
                <CssBaseline/>
                  <Toolbar sx={classes.toolbar}>
                      <NextLink href="/" passHref> 
                        <Link>
                         <Typography> E-commerce </Typography>
                         </Link>
                      </NextLink>
                      <div className={classes.navDiv}> 
                      <NextLink href="/cart" passHref > 
                          <Link className={classes.link}> Cart </Link>
                        </NextLink>
                        <NextLink href="/login" passHref> 
                          <Link> Login </Link>
                        </NextLink>
                      </div>
                    </Toolbar>
              </AppBar>
              <Container className={classes.main}>{children}</Container>

              <Box component="footer" className={classes.footer}> <Typography> all rights reserved </Typography>    </Box>
            
            </ThemeProvider>
         
       </div>
    )
  }
