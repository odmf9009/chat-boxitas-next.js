import App from 'next/app'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        primary: '#0070f3',
        body:{background:'#e5e5e5'}
    },
}

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        )
    }
}