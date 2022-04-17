import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layouts from '../../components/layouts/article'

const Work = () => {
    return(
        <Layouts title='Tiusella'>
            <Container>
                <Title>
                   A Tiusella <Badge>2021</Badge>
                </Title>
                <P>
                    A website about family's guest rooms. 
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link target="_blank" href='https://www.atiusella.com'>
                            https://www.atiusella.com <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta> Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Wordpress, FileZilla </span>
                    </ListItem>
                </List>

                <WorkImage src="/images/tiusella.png" alt="A Tiusella" />
                <WorkImage src="/works/tiusella/tiusellabook.png" alt="A Tiusella" />
            </Container>
        </Layouts>
    )

}

export default Work