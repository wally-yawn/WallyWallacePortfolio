import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
  const {image, live, fesource, besource, title, desc} = props;
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
      <Box component={'img'} src={image} alt={'mockup'} sx={{margin: '10px auto'}}/>
        <h1 style={{fontSize: '2rem'}}>{title}</h1>
        <h2 style={{fontSize: '1rem'}} sx={{marginLeft: '10px'}}>{desc}</h2>
        <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'} alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
          <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
            <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
          </Box>
          {fesource && (
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
              <IconLink link={fesource} title={'FE Source Code'} icon={'fa fa-code'}/>
            </Box>
          )}
          {besource && (
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
              <IconLink link={besource} title={'BE Source Code'} icon={'fa fa-code'}/>
            </Box>
          )}
        </Box>
    </Box>
  );
}

export default PortfolioBlock;