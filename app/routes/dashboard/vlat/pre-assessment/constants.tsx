import ShowChartIcon from '@mui/icons-material/ShowChart'
import BarChartIcon from '@mui/icons-material/BarChart'
import PieChartIcon from '@mui/icons-material/PieChart'
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot'
import BlurLinearIcon from '@mui/icons-material/BlurLinear'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart'
import GradientIcon from '@mui/icons-material/Gradient'
import { GRAPH_TYPES } from '~/utils/types'

export const graphData = [
  {
    icon: <ShowChartIcon />,
    label: 'Line Chart',
    to: '/dashboard/vlat/pre-assessment/linechart',
    graphType: GRAPH_TYPES.linechart,
    disabled: true,
  },
  {
    icon: <BarChartIcon />,
    label: 'Bar Chart',
    to: '/dashboard/vlat/pre-assessment/barchart',
    graphType: GRAPH_TYPES.barchart,
    disabled: false,
  },
  {
    icon: <PieChartIcon />,
    label: 'Pie Chart',
    to: '/dashboard/vlat/pre-assessment/piechart',
    graphType: GRAPH_TYPES.piechart,
    disabled: false,
  },
  {
    icon: <ScatterPlotIcon />,
    label: 'Scatter Plot',
    to: '/dashboard/vlat/pre-assessment/scatterplot',
    graphType: GRAPH_TYPES.scatterplot,
    disabled: true,
  },
  {
    icon: <BlurLinearIcon />,
    label: 'Dot Plot',
    to: '/dashboard/vlat/pre-assessment/dotplot',
    graphType: GRAPH_TYPES.dotplot,
    disabled: true,
  },
  {
    icon: <InsertPhotoIcon />,
    label: 'Pictograph',
    to: '/dashboard/vlat/pre-assessment/pictograph',
    graphType: GRAPH_TYPES.pictograph,
    disabled: true,
  },
  {
    icon: <StackedBarChartIcon />,
    label: 'Histogram',
    to: '/dashboard/vlat/pre-assessment/histogram',
    graphType: GRAPH_TYPES.histogram,
    disabled: true,
  },
  {
    icon: <GradientIcon />,
    label: 'Heat Map',
    to: '/dashboard/vlat/pre-assessment/heatmap',
    graphType: GRAPH_TYPES.heatmap,
    disabled: true,
  },
]