import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layouts from '../../components/layouts/article'

const Work = () => {
    return(
        <Layouts title='Fakeflix'>
            <Container>
                <Title>
                   Fakeflix <Badge>2022</Badge>
                </Title>
                <P>
                    A Netflix clone made in ReactJS with an external API.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link target="_blank" href='https://fakeflix-ruddy.vercel.app/'>
                        https://fakeflix-ruddy.vercel.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta> Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Axios, API Rest, SCSS </span>
                    </ListItem>
                </List>

            <Container>
                <WorkImage src="/works/fakeflix/fakeflix.png" alt="Fakeflix" />
            </Container>
            </Container>
        </Layouts>
    )

}

export default Work