import 'styled-components/native'

type ThemeType = typeof theme;

declare module 'styled-components/native' {
    export interface DefaultTheme {
        COLORS: {
            WHITE: '#FFFFFF',
        
            PURPLE_LIGHT: '#8284FA',
            PURPLE_DARK: '#5E60CE',
        
            BLUE_LIGHT: '#4EA8DE',
            BLUE_DARK: '#1E6F9F',
        
            RED: '#E25858',
        
            GRAY_100: '#F2F2F2',
            GRAY_200: '#D9D9D9',
            GRAY_300: '#808080',
            GRAY_400: '#333333',
            GRAY_500: '#262626',
            GRAY_600: '#1A1A1A',
            GRAY_700: '#0D0D0D',
          },
          FONT_FAMILY: {
            REGULAR: 'Roboto_400Regular',
            BOLD: 'Roboto_700Bold'
          },
        
          FONT_SIZE: {
            XS: 12,
            SM: 14,
            MD: 16,
          }
    }
}