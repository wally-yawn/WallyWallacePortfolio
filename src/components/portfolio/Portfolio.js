import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio({innerRef}) {
    return (
        <Box id={'portfolio'} ref={innerRef}>
            <Grid container spacing={3} marginBottom={'10px'} marginTop={'10px'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                  <Grid item xs={12} md={6} lg={3} key={index} sx={{margin: '1%', boxShadow:2, background:'white', borderRadius:'2%'}} >
                    <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} desc={project.desc} fesource={project.fesource} besource={project.besource}/>
                  </Grid>
                ))}
            </Grid>
        </Box>
    );
};