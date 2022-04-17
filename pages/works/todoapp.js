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
                 To do list web app <Badge>2021</Badge>
                </Title>
                <P>
                    A tiny to do list 
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link target="_blank" href='https://todolist-e5a9d.web.app/'>
                        https://todolist-e5a9d.web.app/<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta> Platform</Meta>
                        <span>Windows/macOS/Linux/</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span> React.js, Firebase, VS Code</span>
                    </ListItem>
                </List>

                <WorkImage src="/works/todoapp/todoappfull.png" alt="To do app" />
                <WorkImage src="/works/todoapp/todoappmodify.png" alt="To do app" />
            </Container>
        </Layouts>
    )

}

export default Work