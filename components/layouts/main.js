import Head from 'next/head'
import Navbar from '../navbar'
import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import VoxelDesktop from '../voxel-desktop'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content ="width=device-width, initial-scale=1"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/public/images/maximeLogo.ico" />
                {/* <Image src='/public/images/maximeLogo.ico' alt='favicon'/> */}
                <title> Maxime Kirch -  Homepage </title>
            </Head>

        <Navbar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                <VoxelDesktop/> 
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main