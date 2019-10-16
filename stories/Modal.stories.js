import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { Theme } from './styles/StyleComponents';
import { Modal, Card } from '../components/cards';
import { Button } from '../components/forms';
import { H4, P } from '../components/typography';
import { Stack, Tab } from '../components/layouts';
 
const ExampleModal = () => {
    const [show, setModal] = useState(boolean('Show Modal', false))

    return <Theme>
        <H4>Modals</H4>
        <P>Some content</P>
        <Button onClick={() => setModal(true)}>
            Launch Modal
        </Button>
        <Modal
            size={text('Modal Size', 'sm')} 
            show={show}
            onClose={() => setModal(!show)}>
            <Stack>
                <Card.Header>The Card Heading</Card.Header>
                <P>
                    {text('Text', 'The way out of here is to find true love that distracts you from it.')}
                </P>
                <Tab>
                    <Button primary>Click Me</Button>
                    <Button primary outline>Try Me</Button>
                </Tab>
            </Stack>
        </Modal>
    </Theme>
}

const stories = storiesOf('Modal', module)
.addDecorator(withKnobs);
stories.add('Example', () => <ExampleModal />)
stories.add('Simple Modal', () => <Theme>
    <Modal
        size={text('Modal Size', 'sm')} 
        show={boolean('Show Modal', true)}
        onClose={() => eval('alert("Am closing")')}>
        <Stack>
            <Card.Header>The Card Heading</Card.Header>
            <P>
                {text('Text', 'The way out of here is to find true love that distracts you from it.')}
            </P>
            <Tab>
                <Button primary>Click Me</Button>
                <Button primary outline>Try Me</Button>
            </Tab>
        </Stack>
    </Modal>
</Theme>)