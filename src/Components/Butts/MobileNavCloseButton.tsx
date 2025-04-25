import IconButton from '@mui/material/IconButton'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { useTheme } from '@mui/material/styles'
import { SimpleButtonProps } from '../../types/ButtTypes'

export default function MobileNavCloseButton({ onClick }: SimpleButtonProps) {
  const theme = useTheme()

  return (
    <IconButton
      onClick={onClick}
      sx={{
        width: '48px',
        height: '48px',
        borderRadius: '100px',
        color: theme.palette.text.secondary,
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
      }}
    >
      <MenuOpenIcon />
    </IconButton>
  )
}