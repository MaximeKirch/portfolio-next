import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layouts from '../../components/layouts/article'

const Work = () => {
    return(
        <Layouts title='Portfolio'>
            <Container>
                <Title>
                   Maxime Kirch Portfolio <Badge>2022</Badge>
                </Title>
                <P>
                    My personal portfolio 
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link target="_blank" href='/'>
                            Not uploaded<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta> Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span> Next.js, Chakra UI, Framer Motion, Vercel, VS Code </span>
                    </ListItem>
                </List>

                <WorkImage src="/works/portfolio/portfoliohome.png" alt="Portfolio" />
                <WorkImage src="/works/portfolio/portfolioworks.png" alt="Portfolio" />
            </Container>
        </Layouts>
    )

}

export default Work