import * as React from 'react'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import Typography from '@mui/material/Typography'
import GraphCard from './GraphCard'
import useWindowSize from '~/hooks/useWindowSize'
import Box from '@mui/material/Box'
import { useTheme } from '~/utils/theme'
import SearchBar from './SearchBar'
import { SavedGraphData } from '~/utils/types'

interface Props {
  graphData: SavedGraphData[]
}

export default function MyGraphs({ graphData }: Props) {
  // const [currentPage, setCurrentPage] = React.useState(1)
  const [value, setValue] = React.useState<string | undefined>('')
  const { width = 0 } = useWindowSize()
  const { mode } = useTheme()
  const filteredData = value ? graphData.filter(data => data.graph_type === value) : graphData

  const getVisibleSlides = () => {
    if (width > 2400) return 5
    if (width > 2000) return 4
    if (width > 1600) return 3
    if (width > 1200) return 2
    return 1
  }

  const totalSlides = graphData.length
  const visibleSlides = getVisibleSlides()

  return (
    <Box
      sx={{
        width: '100%',
        p: 4,
        my: 2,
        bgcolor: mode === 'light' ? 'white' : 'black',
        borderRadius: '10px',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      }}
    >
      <Typography variant='h4' sx={{ mb: 4 }}>
        Projects
      </Typography>
      <SearchBar value={value} setValue={setValue} data={graphData} />

      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={320}
        step={visibleSlides}
        dragStep={visibleSlides}
        visibleSlides={visibleSlides}
        totalSlides={totalSlides}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '30px 1fr 30px' }}>
          <ButtonBack style={{ all: 'unset', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ArrowBackIosIcon />
          </ButtonBack>
          <Slider style={{ maxHeight: 375 }}>
            {filteredData.map((data, index) => {
              return (
                <Slide key={index} index={index}>
                  <GraphCard data={data} />
                </Slide>
              )
            })}
          </Slider>
          <ButtonNext style={{ all: 'unset', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ArrowForwardIosIcon />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </Box>
  )
}
