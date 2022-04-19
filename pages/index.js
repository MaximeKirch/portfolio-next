import { Container, Box, Heading, Image, useColorModeValue, Link, List, Icon, ListItem, Button } from '@chakra-ui/react'
import Section from '../components/section'
import NextLink from 'next/link'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layouts from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin, IoLogoGoogle } from 'react-icons/io5'

const Page = () => {
    return (
        <Layouts>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center" mb={6}>
                Hello, I&apos;m a front-end developer based in France !
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Maxime Kirch
                    </Heading>
                    <p>Curious Developer</p>
                    <Box 
                        flexShrink={0} 
                        mt={{ base: 4, md:0}} 
                        ml={{md: 6}} 
                        align="center"
                    >
                        <Image 
                            borderColor="whiteAlpha.800" 
                            borderWidth={2} 
                            borderStyle="solid" 
                            maxWidth="100px"
                            mt="20px" 
                            display="inline-block" 
                            borderRadius="full" 
                            src="https://avatars.githubusercontent.com/u/77731977?v=4"
                            alt="Profile Picture" 
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading> 
                <Paragraph>
                    I'm a junior but ambitious front-end developer.  I began web development in February, 2021. In the near future i would like to learn full-stack techs like Node.js to build an end-to-end project. I actually work in a small startup which want to connect sports players between them.
                    I like resolve problems, challenge myself, learn and create news things everyday. You can see here  <NextLink href='/'>
                            <Link>
                                my portfolio
                            </Link>
                        </NextLink> build with Next.js, ChakraUI and FrameMotion.
                </Paragraph>       
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button 
                        colorScheme="teal"
                        rightIcon = {<ChevronRightIcon />} 
                        >
                            My Works
                        </Button>
                    </NextLink>
                </Box>     
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1993</BioYear>
                    Born in Bastia, Corsica, France.
                </BioSection>
                <BioSection>
                    <BioYear>2011</BioYear>
                     Bachelor of Economics and Social Sciences
                </BioSection>
                <BioSection>
                    <BioYear> 2021</BioYear>
                    Completed bootcamp for his Front-End Engineer career
                </BioSection>
            <BioSection>

            </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as ="h3" variant="section-title">
             I ♥
                </Heading>
                <Paragraph>
                    Music, Trail Running, Hiking, CrossFit, Video Games.
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Resume
                </Heading>

            <Paragraph>
              Want to know more about me ?  Here is my 
                <NextLink href={'/Maxime_Kirch_2022.pdf'}>
                    <Link> resume </Link>
                </NextLink>
                !
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href='https://github.com/MaximeKirch' target='_blank'>
                            <Button variant='ghost' colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/> }>
                                MaximeKirch
                            </Button>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link href='https://twitter.com/KirchMaxime' target='_blank'>
                            <Button variant='ghost' colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter}/> }>
                                @KirchMaxime
                            </Button>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link href='https://www.linkedin.com/in/maxime-kirch-467443135?originalSubdomain=fr' target='_blank'>
                            <Button variant='ghost' colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin}/> }>
                                Maxime Kirch
                            </Button>
                        </Link>
                    </ListItem>

                    <ListItem>
                            <Button variant='ghost' colorScheme="teal" leftIcon={<Icon as={IoLogoGoogle}/> }>
                                <a href='mailto:maxime.kirch@gmail.com'>maxime.kirch@gmail.com</a>
                            </Button>
                    </ListItem>
                </List>
            </Section>
        </Container>
        </Layouts>
    )
}


export default Page