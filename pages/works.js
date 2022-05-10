import {Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-items"
import Layouts from '../components/layouts/article'

import thumbTiusella from '../public/images/tiusella.png'
import thumbPortfolio from '/public/images/portfolio.png'
import thumbTodoapp from '/public/works/todoapp/todoapphome.png'
import thumbFakeflix from "/public/works/fakeflix/fakeflix.png"

const Works = () => {
    return (
        <Layouts>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                    <WorkGridItem id="fakeflix" title='Fakeflix' thumbnail={thumbFakeflix}>
                        Fakeflix - an entertainment website
                    </WorkGridItem>
                </Section>
            <Section>
                    <WorkGridItem id="portfolio" title='Portfolio' thumbnail={thumbPortfolio}>
                        My personal portfolio
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem id="tiusella" title="A Tiusella " thumbnail={thumbTiusella}>
                        Website about family's guest rooms
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem id='todoapp' title='To Do List' thumbnail={thumbTodoapp}>
                        A React web app
                    </WorkGridItem>
                </Section>
               
            </SimpleGrid>
        </Container>
        </Layouts>
    )
}

export default Works